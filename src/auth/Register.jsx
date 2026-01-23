// src/auth/Register.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import "./Register.css";

import guruji from "../assets/guruji.webp";

const Register = () => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ error state

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await createUserWithEmailAndPassword(auth, email.trim(), password);

      await setDoc(doc(db, "users", res.user.uid), {
        name,
        email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      navigate("/login", { replace: true });
    } catch (err) {
      // ❌ CLEAR ALL FIELDS
      setName("");
      setEmail("");
      setPassword("");

      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please login.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        setError("Password must be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      // ⏳ AUTO HIDE ERROR MESSAGE
      setTimeout(() => {
        setError("");
      }, 3000);
    }
    finally {
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
          <span className="line2">Saheb Sabka</span>
          <span className="line3">Create Account</span>
        </h2>

        {/* ✅ INLINE ERROR MESSAGE */}
        {error && <p className="register-error">{error}</p>}

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              const filtered = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              setName(filtered);
              setError("");
            }}
            required
          />


          <input
            type="email"
            placeholder="Email Address"
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
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="register-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
