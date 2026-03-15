// src/auth/Login.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./Login.css";

import ReCAPTCHA from "react-google-recaptcha"; // ✅ added

import guruji from "../assets/guruji.webp";
import guruji2 from "../assets/photo11.webp";
import guruji3 from "../assets/photo10.webp";

import pic from "../assets/pic.jpeg";
import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";
import bg3 from "../assets/bg3.webp";

const Login = () => {
  const bgImages = [pic, bg1, bg2, bg3];
  const guruImages = [guruji, guruji2, guruji3];
  const [bgIndex, setBgIndex] = useState(0);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [captchaToken, setCaptchaToken] = useState(null); // ✅ added
  const captchaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // ✅ Block login if captcha not verified
    if (!captchaToken) {
      setError("Please verify that you are not a robot.");
      setLoading(false);
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      await setPersistence(auth, browserSessionPersistence);

      const res = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      if (!res.user.emailVerified) {
        navigate("/verify-email", { replace: true });
        return;
      }

      await updateDoc(doc(db, "users", res.user.uid), {
        emailVerified: true,
      });

      navigate("/home", { replace: true });

    } catch (err) {
      setEmail("");
      setPassword("");

      if (captchaRef.current) {
        captchaRef.current.reset();
        setCaptchaToken(null);
      }

      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else {
        setError("Invalid email or password.");
      }

      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your registered email first.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email.trim());

      setEmail("");
      setPassword("");

      setError("Password reset link sent to your email.");
      setTimeout(() => setError(""), 4000);
    } catch {
      setError("Unable to send reset email. Try again.");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg-wrapper">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`login-bg ${index === bgIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${img})`,
            }}
          ></div>
        ))}
      </div>

      <div className="login-card">
        <div className="login-image">
          <img
            key={bgIndex}
            src={guruImages[bgIndex % guruImages.length]}
            alt="Guruji"
          />
        </div>

        <h2 className="login-title">
          <span className="line1">🙏 Jai Gurubande 🙏</span>
          <span className="line2">Saheb Sabka</span>
          <span className="line3">Welcome Back</span>
        </h2>

        {error && <p className="login-error">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const filtered = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
              setEmail(filtered);
              setError("");
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />

          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>

          {/* ✅ reCAPTCHA */}
          <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center" }}>
            <ReCAPTCHA
            ref={captchaRef}
              sitekey="6Lfed4ksAAAAAB8zC6bmp-LdJLaUD45xf27NUGbX"
              onChange={(token) => setCaptchaToken(token)}
              onExpired={() => setCaptchaToken(null)}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>

        <p className="login-text">
          New user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;