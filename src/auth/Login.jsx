// src/auth/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore"; // ✅ added
import { auth, db } from "../firebase/firebase";     // ✅ db added
import "./Login.css";

import guruji from "../assets/guruji.webp";

const Login = () => {
  useEffect(() => {
    // 🔒 Disable Right Click
    const disableRightClick = (e) => e.preventDefault();

    // 🔒 Disable Inspect & View Source
    const disableInspectKeys = (e) => {
      if (e.key === "F12") e.preventDefault();
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
      ) e.preventDefault();
      if (e.ctrlKey && e.key.toUpperCase() === "U") e.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableInspectKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableInspectKeys);
    };
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await setPersistence(auth, browserSessionPersistence);

      const res = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      // ❌ BLOCK LOGIN IF EMAIL NOT VERIFIED
      if (!res.user.emailVerified) {
        await signOut(auth);
        // ✅ CLEAR FIELDS
        setEmail("");
        setPassword("");
        setError("Please verify your email before logging in.");
        setTimeout(() => setError(""), 4000);
        return;
      }

      // ✅ OPTIONAL: sync verification status to Firestore
      await updateDoc(doc(db, "users", res.user.uid), {
        emailVerified: true,
      });

      navigate("/", { replace: true });

    } catch (err) {
      setEmail("");
      setPassword("");


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

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-image">
          <img src={guruji} alt="Guruji" />
        </div>

        <h2 className="login-title">
          <span className="line1">🙏 Jai Gurubande 🙏</span>
          <span className="line2">Saheeb Sabka</span>
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