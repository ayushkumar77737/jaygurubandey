// src/auth/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import "./Login.css";

import guruji from "../assets/guruji.webp";

const Login = () => {
  useEffect(() => {
  // 🔒 Disable Right Click
  const disableRightClick = (e) => {
    e.preventDefault();
  };

  // 🔒 Disable Inspect & View Source
  const disableInspectKeys = (e) => {
    // F12
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Ctrl + Shift + I / J / C
    if (
      e.ctrlKey &&
      e.shiftKey &&
      ["I", "J", "C"].includes(e.key.toUpperCase())
    ) {
      e.preventDefault();
    }

    // Ctrl + U (View Source)
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
      e.preventDefault();
    }
  };

  document.addEventListener("contextmenu", disableRightClick);
  document.addEventListener("keydown", disableInspectKeys);

  // ✅ CLEANUP (VERY IMPORTANT)
  return () => {
    document.removeEventListener("contextmenu", disableRightClick);
    document.removeEventListener("keydown", disableInspectKeys);
  };
}, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ error state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // clear previous error

    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate("/", { replace: true });
    }
    catch (err) {
      // ❌ Clear fields
      setEmail("");
      setPassword("");

      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Invalid email or password.");
      }

      // ⏳ AUTO REMOVE ERROR MESSAGE
      setTimeout(() => {
        setError("");
      }, 3000); // disappears after 3 seconds
    }
    finally {
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

        {/* ✅ MESSAGE TYPE ERROR */}
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
