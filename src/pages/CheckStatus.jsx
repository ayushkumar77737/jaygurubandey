import React, { useState, useRef } from "react";
import "./CheckStatus.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import guruji from "../assets/guruji.webp";

const CheckStatus = () => {
  const [transactionId, setTransactionId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // ⏱ to clear previous timers safely
  const timerRef = useRef(null);

  // ✅ show message & auto-hide
  const showResult = (message) => {
    setResult(message);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setResult("");
    }, 3000); // ⏱ 3 seconds
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

      {/* 🖼 Guruji Image */}
      <div className="status-image">
        <img src={guruji} alt="Guruji" />
      </div>

      <h1 className="status-title">Check Payment Status</h1>

      <form className="status-card" onSubmit={handleCheck}>
        <input
          type="text"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(e.target.value.replace(/\D/g, "").slice(0, 12))
          }
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check Status"}
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
  );
};

export default CheckStatus;