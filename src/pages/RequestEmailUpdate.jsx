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
          "⚠️ You already requested an email update. We’ll reach you through email."
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

      setMessage("✅ Request sent successfully. We’ll contact you by email.");
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
      <div className="emailreq-card">
        <h2 className="emailreq-title">Request Email Update</h2>

        {message && <p className="emailreq-message">{message}</p>}

        <form onSubmit={handleSubmit} className="emailreq-form">
          <input
            type="text"
            placeholder="User ID"
            value={user?.uid || ""}
            disabled
          />

          <input
            type="email"
            placeholder="Old Email"
            value={oldEmail}
            disabled
          />

          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Reason for email change"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows="4"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Request Email Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestEmailUpdate;
