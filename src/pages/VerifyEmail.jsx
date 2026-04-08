import React, { useState, useEffect } from "react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState(""); // "success" | "error"
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) { navigate("/login", { replace: true }); return; }
    if (user.emailVerified) { navigate("/", { replace: true }); }
  }, [navigate]);

  const resendVerification = async () => {
    if (!auth.currentUser) {
      setMsgType("error");
      setMessage("Not logged in. Please login again.");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    try {
      setLoading(true);
      await sendEmailVerification(auth.currentUser);
      setMsgType("success");
      setMessage("Verification email sent! Please check your inbox or spam.");
      setTimeout(() => setMessage(""), 4000);
    } catch (err) {
      console.error(err);
      setMsgType("error");
      setMessage("Failed to send email. Please try again later.");
      setTimeout(() => setMessage(""), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vem__page">

      {/* Background rings */}
      <div className="vem__ring vem__ring--1" />
      <div className="vem__ring vem__ring--2" />

      <div className="vem__card">

        {/* Icon */}
        <div className="vem__icon-wrap">
          <div className="vem__icon-glow" />
          <span className="vem__icon">📩</span>
        </div>

        {/* Ornament */}
        <div className="vem__ornament">
          <span className="vem__orn-line" />
          <span className="vem__orn-gem">✦</span>
          <span className="vem__orn-line" />
        </div>

        <h2 className="vem__title">Verify Your Email</h2>
        <p className="vem__desc">
          Your email is not verified yet. Please check your inbox and click the
          verification link we sent you.
        </p>

        {message && (
          <div className={`vem__msg vem__msg--${msgType}`}>
            <span>{msgType === "success" ? "✔" : "✕"}</span> {message}
          </div>
        )}

        <button
          className="vem__btn vem__btn--primary"
          onClick={resendVerification}
          disabled={loading}
        >
          {loading ? (
            <span className="vem__spinner" />
          ) : (
            <>✉ Resend Verification Email</>
          )}
        </button>

        <button
          className="vem__btn vem__btn--ghost"
          onClick={() => auth.signOut()}
        >
          ← Logout
        </button>

      </div>
    </div>
  );
};

export default VerifyEmail;