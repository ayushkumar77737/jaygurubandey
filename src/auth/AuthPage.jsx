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
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./AuthPage.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6Lfed4ksAAAAAB8zC6bmp-LdJLaUD45xf27NUGbX";

import slide1 from "../assets/bg1.webp";
import slide2 from "../assets/bg2.webp";
import slide3 from "../assets/bg3.webp";

const SLIDES = [slide1, slide2, slide3];



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
            <div className="bg-overlay" />
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
    const { t, i18n } = useTranslation();   // ✅ NEW

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
            setLoginError(t("auth.err_captcha"));
            resetLoginCaptcha();
            setLoginLoading(false);
            setTimeout(() => setLoginError(""), 3000);
            return;
        }

        try {
            const data = await verifyCaptcha(loginCaptchaToken);
            if (!data.success) {
                setLoginError(t("auth.err_captcha_fail"));
                resetLoginCaptcha();
                setLoginLoading(false);
                return;
            }
        } catch {
            setLoginError(t("auth.err_captcha_error"));
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
                    ? t("auth.err_invalid_email")
                    : t("auth.err_invalid_credentials")
            );
            setTimeout(() => setLoginError(""), 3000);
        } finally {
            setLoginLoading(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!loginEmail) {
            setLoginError(t("auth.err_enter_email"));
            setTimeout(() => setLoginError(""), 3000);
            return;
        }
        try {
            await sendPasswordResetEmail(auth, loginEmail.trim());
            setLoginEmail("");
            setLoginPassword("");
            setLoginError(t("auth.success_reset"));
            setTimeout(() => setLoginError(""), 4000);
        } catch {
            setLoginError(t("auth.err_reset_fail"));
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
            setRegError(t("auth.err_captcha"));
            resetRegCaptcha();
            setRegLoading(false);
            setTimeout(() => setRegError(""), 3000);
            return;
        }

        try {
            const data = await verifyCaptcha(regCaptchaToken);
            if (!data.success) {
                setRegError(t("auth.err_captcha_fail"));
                resetRegCaptcha();
                setRegLoading(false);
                return;
            }
        } catch {
            setRegError(t("auth.err_captcha_error"));
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
            setRegSuccess(t("auth.success_verify"));
            setTimeout(() => setRegSuccess(""), 4000);
            setRegName(""); setRegEmail(""); setRegPassword("");
            resetRegCaptcha();
        } catch (err) {
            setRegName(""); setRegEmail(""); setRegPassword("");
            resetRegCaptcha();
            if (err.code === "auth/email-already-in-use") setRegError(t("auth.err_email_in_use"));
            else if (err.code === "auth/invalid-email") setRegError(t("auth.err_invalid_email"));
            else if (err.code === "auth/weak-password") setRegError(t("auth.err_weak_password"));
            else setRegError(t("auth.err_generic"));
            setTimeout(() => setRegError(""), 3000);
        } finally {
            setRegLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <BgCarousel />

            <div className={`container ${isRegister ? "active" : ""}`}>

                {/* ── LOGIN FORM ── */}
                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>{t("auth.login_title")}</h1>
                        <p className="auth-subtitle">{t("auth.subtitle")}</p>
                        {loginError && <p className="auth-error">{loginError}</p>}

                        <div className="input-box">
                            <input
                                type="email"
                                placeholder={t("auth.email")}
                                value={loginEmail}
                                onChange={(e) => { setLoginEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "")); setLoginError(""); }}
                                required
                            />
                            <i className="bx bxs-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder={t("auth.password")}
                                value={loginPassword}
                                onChange={(e) => { setLoginPassword(e.target.value); setLoginError(""); }}
                                required
                            />
                            <i className="bx bxs-lock-alt"></i>
                        </div>

                        <div className="forgot-link">
                            <span onClick={handleForgotPassword}>{t("auth.forgot_password")}</span>
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
                            {loginLoading ? t("auth.loading_login") : t("auth.login_btn")}
                        </button>
                    </form>
                </div>

                {/* ── REGISTER FORM ── */}
                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>{t("auth.register_title")}</h1>
                        <p className="auth-subtitle">{t("auth.subtitle")}</p>
                        {regSuccess && <p className="auth-success">{regSuccess}</p>}
                        {regError && <p className="auth-error">{regError}</p>}

                        <div className="input-box">
                            <input
                                type="text"
                                placeholder={t("auth.full_name")}
                                value={regName}
                                onChange={(e) => { setRegName(e.target.value.replace(/[^a-zA-Z\s]/g, "")); setRegError(""); setRegSuccess(""); }}
                                required
                            />
                            <i className="bx bxs-user"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="email"
                                placeholder={t("auth.email_address")}
                                value={regEmail}
                                onChange={(e) => { setRegEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "")); setRegError(""); setRegSuccess(""); }}
                                required
                            />
                            <i className="bx bxs-envelope"></i>
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder={t("auth.password")}
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
                            {regLoading ? t("auth.loading_register") : t("auth.register_btn")}
                        </button>
                    </form>
                </div>

                {/* ── TOGGLE PANELS ── */}
                <div className="toggle-box">
                    <div className="toggle-panel toggle-right">
                        <p className="toggle-tag">{t("auth.toggle_right_tag")}</p>
                        <h1>{t("auth.toggle_right_heading")}</h1>
                        <p>{t("auth.toggle_right_text")}</p>
                        <p className="toggle-saheb">{t("auth.toggle_right_saheb")}</p>
                        <Link to="/register"><button className="btn">{t("auth.register_btn")}</button></Link>
                    </div>
                    <div className="toggle-panel toggle-left">
                        <p className="toggle-tag">{t("auth.toggle_left_tag")}</p>
                        <h1>{t("auth.toggle_left_heading")}</h1>
                        <p>{t("auth.toggle_left_text")}</p>
                        <p className="toggle-saheb">{t("auth.toggle_left_saheb")}</p>
                        <Link to="/login"><button className="btn">{t("auth.login_btn")}</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthPage;