// src/auth/AuthPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from "firebase/auth";
import { doc, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./AuthPage.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Lfed4ksAAAAAB8zC6bmp-LdJLaUD45xf27NUGbX";

// ── Your local images from the assets folder ────────────────────────────────
import slide1 from "../assets/bg1.webp";
import slide2 from "../assets/bg2.webp";
import slide3 from "../assets/bg3.webp";

const SLIDES = [slide1, slide2, slide3];
// ─────────────────────────────────────────────────────────────────────────────

const BgCarousel = () => {
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(
            () => setCurrent((p) => (p + 1) % SLIDES.length),
            4500
        );
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const goTo = (idx) => { setCurrent(idx); startTimer(); };

    return (
        <div className="bg-carousel">
            {SLIDES.map((src, i) => (
                <div
                    key={i}
                    className={`bg-slide ${i === current ? "active" : ""}`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}
            {/* dark overlay so the card stays legible */}
            <div className="bg-overlay" />

            {/* dot indicators at bottom-center of page */}
            <div className="bg-dots">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`bg-dot ${i === current ? "active" : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const AuthPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isRegister = location.pathname === "/register";

    // ── Login state ──
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    const [loginError, setLoginError] = useState("");
    const loginCaptchaRef = useRef(null);
    const [loginCaptchaToken, setLoginCaptchaToken] = useState(null);

    // ── Register state ──
    const [regName, setRegName] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regLoading, setRegLoading] = useState(false);
    const [regError, setRegError] = useState("");
    const [regSuccess, setRegSuccess] = useState("");
    const regCaptchaRef = useRef(null);
    const [regCaptchaToken, setRegCaptchaToken] = useState(null);

    // ── Dev/inspect protection ──
    useEffect(() => {
        const disableRightClick = (e) => e.preventDefault();
        const disableInspectKeys = (e) => {
            if (e.key === "F12") e.preventDefault();
            if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
                e.preventDefault();
            if (e.ctrlKey && e.key.toUpperCase() === "U") e.preventDefault();
        };
        document.addEventListener("contextmenu", disableRightClick);
        document.addEventListener("keydown", disableInspectKeys);
        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableInspectKeys);
        };
    }, []);

    const resetLoginCaptcha = () => { loginCaptchaRef.current?.reset(); setLoginCaptchaToken(null); };
    const resetRegCaptcha = () => { regCaptchaRef.current?.reset(); setRegCaptchaToken(null); };

    const verifyCaptcha = async (token) => {
        const res = await fetch("/api/verify-captcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
        });
        return res.json();
    };

    // ── Login handler ──
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginLoading(true);
        setLoginError("");

        if (!loginCaptchaToken) {
            setLoginError("Please verify that you are not a robot.");
            resetLoginCaptcha();
            setLoginLoading(false);
            setTimeout(() => setLoginError(""), 3000);
            return;
        }

        try {
            const data = await verifyCaptcha(loginCaptchaToken);
            if (!data.success) {
                setLoginError("Captcha verification failed. Try again.");
                resetLoginCaptcha();
                setLoginLoading(false);
                return;
            }
        } catch {
            setLoginError("Captcha error. Please try again.");
            resetLoginCaptcha();
            setLoginLoading(false);
            return;
        }

        try {
            await setPersistence(auth, browserSessionPersistence);
            const res = await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword);

            if (!res.user.emailVerified) {
                navigate("/verify-email", { replace: true });
                return;
            }

            await updateDoc(doc(db, "users", res.user.uid), { emailVerified: true });
            resetLoginCaptcha();
            navigate("/home", { replace: true });
        } catch (err) {
            setLoginEmail("");
            setLoginPassword("");
            resetLoginCaptcha();
            setLoginError(
                err.code === "auth/invalid-email"
                    ? "Please enter a valid email address."
                    : "Invalid email or password."
            );
            setTimeout(() => setLoginError(""), 3000);
        } finally {
            setLoginLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!loginEmail) {
            setLoginError("Please enter your registered email first.");
            setTimeout(() => setLoginError(""), 3000);
            return;
        }
        try {
            await sendPasswordResetEmail(auth, loginEmail.trim());
            setLoginEmail("");
            setLoginPassword("");
            setLoginError("Password reset link sent to your email.");
            setTimeout(() => setLoginError(""), 4000);
        } catch {
            setLoginError("Unable to send reset email. Try again.");
            setTimeout(() => setLoginError(""), 4000);
        }
    };

    // ── Register handler ──
    const handleRegister = async (e) => {
        e.preventDefault();
        setRegLoading(true);
        setRegError("");
        setRegSuccess("");

        if (!regCaptchaToken) {
            setRegError("Please verify that you are not a robot.");
            resetRegCaptcha();
            setRegLoading(false);
            setTimeout(() => setRegError(""), 3000);
            return;
        }

        try {
            const data = await verifyCaptcha(regCaptchaToken);
            if (!data.success) {
                setRegError("Captcha verification failed.");
                resetRegCaptcha();
                setRegLoading(false);
                return;
            }
        } catch {
            setRegError("Captcha error. Try again.");
            resetRegCaptcha();
            setRegLoading(false);
            return;
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, regEmail.trim(), regPassword);
            await sendEmailVerification(res.user);
            await setDoc(doc(db, "users", res.user.uid), {
                name: regName,
                email: regEmail,
                role: "user",
                emailVerified: false,
                createdAt: serverTimestamp(),
            });
            await signOut(auth);
            setRegSuccess("Verification email sent. Please verify before logging in.");
            setTimeout(() => setRegSuccess(""), 4000);
            setRegName(""); setRegEmail(""); setRegPassword("");
            resetRegCaptcha();
        } catch (err) {
            setRegName(""); setRegEmail(""); setRegPassword("");
            resetRegCaptcha();
            if (err.code === "auth/email-already-in-use") setRegError("This email is already registered.");
            else if (err.code === "auth/invalid-email") setRegError("Please enter a valid email address.");
            else if (err.code === "auth/weak-password") setRegError("Password must be at least 6 characters.");
            else setRegError("Something went wrong. Please try again.");
            setTimeout(() => setRegError(""), 3000);
        } finally {
            setRegLoading(false);
        }
    };

    return (
        <div className="auth-page">

            {/* ── FULL-PAGE BACKGROUND CAROUSEL ── */}
            <BgCarousel />

            <div className={`container ${isRegister ? "active" : ""}`}>

                {/* ── LOGIN FORM ── */}
                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <p className="auth-subtitle">🙏 Jai Gurubande 🙏</p>
                        {loginError && <p className="auth-error">{loginError}</p>}

                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => { setLoginEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "")); setLoginError(""); }}
                                required
                            />
                            <i className="bx bxs-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => { setLoginPassword(e.target.value); setLoginError(""); }}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className="forgot-link">
                            <span onClick={handleForgotPassword}>Forgot Password?</span>
                        </div>

                        <div className="captcha-wrapper">
                            <ReCAPTCHA
                                ref={loginCaptchaRef}
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={(token) => setLoginCaptchaToken(token)}
                                onExpired={() => setLoginCaptchaToken(null)}
                            />
                        </div>

                        <button type="submit" className="btn" disabled={loginLoading}>
                            {loginLoading ? "Please wait..." : "Login"}
                        </button>
                    </form>
                </div>

                {/* ── REGISTER FORM ── */}
                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Register</h1>
                        <p className="auth-subtitle">🙏 Jai Gurubande 🙏</p>
                        {regSuccess && <p className="auth-success">{regSuccess}</p>}
                        {regError && <p className="auth-error">{regError}</p>}

                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={regName}
                                onChange={(e) => { setRegName(e.target.value.replace(/[^a-zA-Z\s]/g, "")); setRegError(""); setRegSuccess(""); }}
                                required
                            />
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={regEmail}
                                onChange={(e) => { setRegEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "")); setRegError(""); setRegSuccess(""); }}
                                required
                            />
                            <i className="bx bxs-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="Password"
                                value={regPassword}
                                onChange={(e) => { setRegPassword(e.target.value); setRegError(""); setRegSuccess(""); }}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className="captcha-wrapper">
                            <ReCAPTCHA
                                ref={regCaptchaRef}
                                sitekey={RECAPTCHA_SITE_KEY}
                                onChange={(token) => setRegCaptchaToken(token)}
                                onExpired={() => setRegCaptchaToken(null)}
                            />
                        </div>

                        <button type="submit" className="btn" disabled={regLoading}>
                            {regLoading ? "Creating..." : "Register"}
                        </button>
                    </form>
                </div>

                {/* ── TOGGLE PANELS ── */}
                <div className="toggle-box">
                    <div className="toggle-panel toggle-right">
                        <p className="toggle-tag">🙏 Jai Gurubande 🙏</p>
                        <h1>Begin Your Journey</h1>
                        <p>Join our community and walk the path of wisdom and devotion.</p>
                        <p className="toggle-saheb">🙏 Saheb Sabka 🙏</p>
                        <Link to="/register"><button className="btn">Register</button></Link>
                    </div>
                    <div className="toggle-panel toggle-left">
                        <p className="toggle-tag">🙏 Jai Gurubande 🙏</p>
                        <h1>Welcome Back!</h1>
                        <p>Your spiritual journey continues. We're glad to see you again.</p>
                        <p className="toggle-saheb">🙏 Saheb Sabka 🙏</p>
                        <Link to="/login"><button className="btn">Login</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;