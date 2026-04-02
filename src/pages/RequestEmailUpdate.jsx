// src/pages/RequestEmailUpdate.jsx
import React, { useState } from "react";
import "./RequestEmailUpdate.css";
import { auth, db } from "../firebase/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const RequestEmailUpdate = () => {
  const user = auth.currentUser;

  const [oldEmail] = useState(user?.email || "");
  const [newEmail, setNewEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newEmail || !reason) {
      setMessage("❌ Please fill all fields");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setMessage("❌ Please enter a valid email address");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    if (newEmail === oldEmail) {
      setMessage("❌ New email must be different from old email");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    if (!user) {
      setMessage("❌ You must be logged in");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      setLoading(true);

      const q = query(
        collection(db, "emailChangeRequests"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setMessage(
          "⚠️ You already requested an email update. We'll reach you through email."
        );
        setNewEmail("");
        setReason("");
        setTimeout(() => setMessage(""), 3000);
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "emailChangeRequests"), {
        userId: user.uid,
        oldEmail: oldEmail,
        newEmail: newEmail,
        reason: reason,
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Request sent successfully. We'll contact you by email.");
      setNewEmail("");
      setReason("");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Email change request error:", error);
      setMessage("❌ Failed to submit request. Try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="emailreq-page">

      {/* Decorative background */}
      <div className="er-bg" aria-hidden="true">
        <div className="er-orb er-orb-1" />
        <div className="er-orb er-orb-2" />
        <div className="er-orb er-orb-3" />
        <div className="er-grid" />
      </div>

      <div className="emailreq-card">

        {/* Header */}
        <div className="er-header">
          <div className="er-icon-wrap" aria-hidden="true">
            <span className="er-icon">✉</span>
            <div className="er-icon-ring" />
          </div>
          <h2 className="emailreq-title">Request Email Update</h2>
          <p className="er-subtitle">Submit a request and we'll reach you shortly</p>
        </div>

        {message && (
          <p className={`emailreq-message ${message.startsWith("✅") ? "er-msg-success"
              : message.startsWith("⚠️") ? "er-msg-warn"
                : "er-msg-error"
            }`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="emailreq-form">

          <div className="er-field">
            <label className="er-label">User ID</label>
            <div className="er-input-wrap">
              <span className="er-prefix">#</span>
              <input
                type="text"
                placeholder="User ID"
                value={user?.uid || ""}
                disabled
              />
            </div>
          </div>

          <div className="er-field">
            <label className="er-label">Current Email</label>
            <div className="er-input-wrap">
              <span className="er-prefix">@</span>
              <input
                type="email"
                placeholder="Old Email"
                value={oldEmail}
                disabled
              />
            </div>
          </div>

          <div className="er-field">
            <label className="er-label">New Email</label>
            <div className="er-input-wrap">
              <span className="er-prefix">@</span>
              <input
                type="email"
                placeholder="Enter new email address"
                value={newEmail}
                onChange={(e) => {
                  const value = e.target.value;
                  const cleaned = value.replace(/[^a-zA-Z0-9@._-]/g, "");
                  setNewEmail(cleaned);
                }}
                required
              />
            </div>
          </div>

          <div className="er-field">
            <label className="er-label">Reason for Change</label>
            <textarea
              placeholder="Briefly explain why you'd like to change your email..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="4"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <span className="er-btn-shimmer" />
            <span className="er-btn-text">
              {loading ? (
                <><span className="er-spinner" /> Submitting...</>
              ) : (
                "Request Email Update →"
              )}
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default RequestEmailUpdate;