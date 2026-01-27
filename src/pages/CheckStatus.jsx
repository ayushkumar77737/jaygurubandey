import React, { useState } from "react";
import "./CheckStatus.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const CheckStatus = () => {
  const [transactionId, setTransactionId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (transactionId.length !== 12) {
      setResult("❌ Transaction ID must be 12 digits");
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
        setResult("❌ Wrong Transaction ID");
        return;
      }

      const data = snapshot.docs[0].data();

      // 🔥 NO STATUS FIELD? → TREAT AS PENDING
      if (!data.status) {
        setResult("⏳ Payment Pending Verification");
      } else if (data.status === "verified") {
        setResult("✅ Payment Verified");
      } else if (data.status === "failed") {
        setResult("❌ Payment Failed");
      } else {
        setResult("⏳ Payment Pending Verification");
      }
    } catch (err) {
      setResult("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="status-container">
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