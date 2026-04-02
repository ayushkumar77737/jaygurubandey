import React, { useState } from "react";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { auth } from "../firebase/firebase";
import { serverTimestamp } from "firebase/firestore";


const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text, time = 4000) => {
    setMessage(text);
    setTimeout(() => setMessage(""), time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "amount") {
      newValue = value.replace(/\D/g, "");
      if (parseInt(newValue || "0", 10) > 100000) {
        newValue = "100000";
      }
    }

    if (name === "transactionId") {
      newValue = value.replace(/\D/g, "").slice(0, 12);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const user = auth.currentUser;
    if (!user) {
      showMessage("❌ Please login to submit contribution.");
      return;
    }

    let errors = [];

    if (!formData.name.trim()) {
      errors.push("❌ Name is required.");
    }

    if (formData.phone.length !== 10) {
      errors.push("❌ Phone number must be exactly 10 digits.");
    }

    const amountNum = parseInt(formData.amount, 10);
    if (!amountNum || amountNum <= 0) {
      errors.push("❌ Amount must be greater than 0.");
    } else if (amountNum > 100000) {
      errors.push("❌ Amount cannot exceed ₹1,00,000.");
    }

    if (formData.transactionId.length !== 12) {
      errors.push("❌ Transaction ID must be exactly 12 digits.");
    }

    if (errors.length > 0) {
      showMessage(errors.join("\n"));
      setFormData({ name: "", phone: "", amount: "", transactionId: "" });
      return;
    }

    try {
      setLoading(true);

      const q = query(
        collection(db, "contributions"),
        where("transactionId", "==", formData.transactionId)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        showMessage("❌ This Transaction ID has already been submitted.");
        setFormData({ name: "", phone: "", amount: "", transactionId: "" });
        return;
      }

      await addDoc(collection(db, "contributions"), {
        userId: user.uid,
        name: formData.name,
        phone: formData.phone,
        amount: amountNum,
        transactionId: formData.transactionId,
        createdAt: new Date(),
      });

      showMessage("✅ Contribution submitted successfully. Please verify the payment by checking the payment status", 3000);
      setFormData({ name: "", phone: "", amount: "", transactionId: "" });
    } catch (error) {
      showMessage("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ctbp-container">
      {/* Decorative background orbs */}
      <div className="ctbp-orb ctbp-orb-1" aria-hidden="true" />
      <div className="ctbp-orb ctbp-orb-2" aria-hidden="true" />
      <div className="ctbp-orb ctbp-orb-3" aria-hidden="true" />
      <div className="ctbp-grid-overlay" aria-hidden="true" />

      <h1 className="ctbp-title">
        <span className="ctbp-title-icon">💳</span> Contribute
      </h1>
      <p className="ctbp-subtitle">Support us with a secure UPI payment</p>

      <div className="ctbp-card">
        <div className="ctbp-qr-box">
          <p className="ctbp-qr-title">
            <span className="ctbp-qr-dot" />
            Scan to Pay
          </p>
          <div className="ctbp-qr-image-wrapper">
            <img src={qrImg} alt="QR Code" className="ctbp-image" />
          </div>
          <p className="ctbp-qr-hint">UPI · Any Bank · Instant</p>
        </div>

        <div className="ctbp-form-divider" aria-hidden="true" />

        <form className="ctbp-form" onSubmit={handleSubmit}>
          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">📱</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">₹</span>
            <input
              type="text"
              name="amount"
              placeholder="Amount (Max ₹1,00,000)"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">#</span>
            <input
              type="text"
              name="transactionId"
              placeholder="Transaction ID (12 digits)"
              value={formData.transactionId}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="ctbp-submit-btn" disabled={loading}>
            <span className="ctbp-btn-shimmer" />
            {loading ? (
              <span className="ctbp-btn-content">
                <span className="ctbp-spinner" /> Submitting...
              </span>
            ) : (
              <span className="ctbp-btn-content">Submit Contribution →</span>
            )}
          </button>
        </form>
      </div>

      {message && (
        <div
          className={`ctbp-message ${message.startsWith("✅") ? "ctbp-success" : "ctbp-error"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;