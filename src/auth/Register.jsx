// src/auth/Register.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./Register.css";

import guruji from "../assets/guruji.webp";

const Register = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await sendEmailVerification(res.user);

      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email,
        role: "user",
        emailVerified: false,
        createdAt: serverTimestamp(),
      });

      await signOut(auth);

      // ✅ show success message
      setSuccess(
        "Verification email has been sent. Please verify your email before login."
      );

      // ⏳ auto clear success message
      setTimeout(() => {
        setSuccess("");
      }, 4000);

      // clear form
      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      setName("");
      setEmail("");
      setPassword("");
      setSuccess("");

      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-image">
          <img src={guruji} alt="Register" />
        </div>

        <h2 className="register-title">
          <span className="line1">🙏 Jai Gurubande 🙏</span>
          <span className="line2">Saheeb Sabka</span>
          <span className="line3">Create Account</span>
        </h2>

        {/* ✅ SUCCESS MESSAGE */}
        {success && <p className="register-success">{success}</p>}

        {/* ❌ ERROR MESSAGE */}
        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""));
              setError("");
              setSuccess("");
            }}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ""));
              setError("");
              setSuccess("");
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
              setSuccess("");
            }}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        {/* ✅ RESTORED LOGIN TEXT */}
        <p className="register-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;