import React, { useState, useRef } from "react";
import "./CheckStatus.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import guruji from "../assets/guruji.webp";

const CheckStatus = () => {
  const [transactionId, setTransactionId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

  const showResult = (message) => {
    setResult(message);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setResult("");
    }, 3000);
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (transactionId.length !== 12) {
      showResult("❌ Transaction ID must be 12 digits");
      setTransactionId("");
      return;
    }

    try {
      setLoading(true);
      setResult("");

      const q = query(
        collection(db, "contributions"),
        where("transactionId", "==", transactionId)
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showResult("❌ Wrong Transaction ID");
        setTransactionId("");
        return;
      }

      const data = snapshot.docs[0].data();

      if (!data.status) {
        showResult("⏳ Payment Pending Verification");
      } else if (data.status === "verified") {
        showResult("✅ Payment Verified");
      } else if (data.status === "failed") {
        showResult("❌ Payment Failed");
      } else {
        showResult("⏳ Payment Pending Verification");
      }

      setTransactionId("");

    } catch (err) {
      showResult("❌ Server error. Try again later.");
      setTransactionId("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="status-container">

      {/* ── Decorative background ── */}
      <div className="cs-bg" aria-hidden="true">
        <div className="cs-bg-ring cs-bg-ring-1" />
        <div className="cs-bg-ring cs-bg-ring-2" />
        <div className="cs-bg-ring cs-bg-ring-3" />
        <div className="cs-bg-orb cs-bg-orb-1" />
        <div className="cs-bg-orb cs-bg-orb-2" />
        <div className="cs-dots" />
      </div>

      {/* ── Content ── */}
      <div className="cs-content">

        {/* Guruji image with sacred rings */}
        <div className="status-image-wrapper" aria-hidden="true">
          <div className="cs-ring cs-ring-outer" />
          <div className="cs-ring cs-ring-mid" />
          <div className="status-image">
            <img src={guruji} alt="Guruji" />
          </div>
        </div>

        <h1 className="status-title">Check Payment Status</h1>
        <p className="status-subtitle">Enter your 12-digit transaction ID below</p>

        <form className="status-card" onSubmit={handleCheck}>
          <div className="cs-input-wrap">
            <span className="cs-input-icon">#</span>
            <input
              type="text"
              placeholder="Transaction ID (12 digits)"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(e.target.value.replace(/\D/g, "").slice(0, 12))
              }
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <span className="cs-btn-shimmer" />
            <span className="cs-btn-text">
              {loading ? (
                <>
                  <span className="cs-spinner" /> Checking...
                </>
              ) : (
                "Check Status"
              )}
            </span>
          </button>
        </form>

        {result && (
          <div
            className={`status-message ${
              result.startsWith("✅")
                ? "success"
                : result.startsWith("⏳")
                ? "pending"
                : "error"
            }`}
          >
            {result}
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckStatus;