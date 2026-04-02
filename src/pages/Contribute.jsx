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
      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
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
        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });
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

      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    } catch (error) {
      showMessage("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contribute-container">
      {/* Decorative background orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <h1 className="contribute-title">
        <span className="title-icon">💳</span> Contribute
      </h1>
      <p className="contribute-subtitle">Support us with a secure UPI payment</p>

      <div className="contribute-card">
        <div className="qr-box">
          <p className="qr-title">
            <span className="qr-dot" />
            Scan to Pay
          </p>
          <div className="qr-image-wrapper">
            <img src={qrImg} alt="QR Code" className="contribute-image" />
          </div>
          <p className="qr-hint">UPI · Any Bank · Instant</p>
        </div>

        <div className="form-divider" aria-hidden="true" />

        <form className="contribute-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">📱</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">₹</span>
            <input
              type="text"
              name="amount"
              placeholder="Amount (Max ₹1,00,000)"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">#</span>
            <input
              type="text"
              name="transactionId"
              placeholder="Transaction ID (12 digits)"
              value={formData.transactionId}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            <span className="btn-shimmer" />
            {loading ? (
              <span className="btn-content">
                <span className="spinner" /> Submitting...
              </span>
            ) : (
              <span className="btn-content">Submit Contribution →</span>
            )}
          </button>
        </form>
      </div>

      {message && (
        <div
          className={`contribute-message ${message.startsWith("✅") ? "success" : "error"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;