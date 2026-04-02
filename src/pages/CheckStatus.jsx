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
    <div className="chkst-container">

      {/* ── Decorative background ── */}
      <div className="chkst-bg" aria-hidden="true">
        <div className="chkst-bg-ring chkst-bg-ring-1" />
        <div className="chkst-bg-ring chkst-bg-ring-2" />
        <div className="chkst-bg-ring chkst-bg-ring-3" />
        <div className="chkst-bg-orb chkst-bg-orb-1" />
        <div className="chkst-bg-orb chkst-bg-orb-2" />
        <div className="chkst-dots" />
      </div>

      {/* ── Content ── */}
      <div className="chkst-content">

        {/* Guruji image with sacred rings */}
        <div className="chkst-image-wrapper" aria-hidden="true">
          <div className="chkst-ring chkst-ring-outer" />
          <div className="chkst-ring chkst-ring-mid" />
          <div className="chkst-image">
            <img src={guruji} alt="Guruji" />
          </div>
        </div>

        <h1 className="chkst-title">Check Payment Status</h1>
        <p className="chkst-subtitle">Enter your 12-digit transaction ID below</p>

        <form className="chkst-card" onSubmit={handleCheck}>
          <div className="chkst-input-wrap">
            <span className="chkst-input-icon">#</span>
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
            <span className="chkst-btn-shimmer" />
            <span className="chkst-btn-text">
              {loading ? (
                <>
                  <span className="chkst-spinner" /> Checking...
                </>
              ) : (
                "Check Status"
              )}
            </span>
          </button>
        </form>

        {result && (
          <div
            className={`chkst-message ${
              result.startsWith("✅")
                ? "chkst-success"
                : result.startsWith("⏳")
                ? "chkst-pending"
                : "chkst-error"
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