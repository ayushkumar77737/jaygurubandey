import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeleteAccount.css";

import { auth, db } from "../firebase/firebase";
import { doc, deleteDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [confirming, setConfirming] = useState(false); // 🆕 confirm state
  const [loading, setLoading] = useState(false);
  const showMessage = (text, duration = 3000) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("");
    }, duration);
  };

  const handleDeleteClick = () => {
    if (!reason.trim()) {
      showMessage("❌ Please enter a reason");
      return;
    }
    setMessage("");
    setConfirming(true);
  };

  const handleConfirmDelete = async () => {
    const user = auth.currentUser;
    if (!user) {
      showMessage("❌ Not logged in");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "deletedAccounts"), {
        userId: user.uid,
        email: user.email || "",
        reason: reason.trim(),
        createdAt: serverTimestamp(),
      });

      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);

      showMessage("✅ Account permanently deleted", 1200);
      setTimeout(() => navigate("/"), 1200);

    } catch (err) {
      console.error(err);
      if (err.code === "auth/requires-recent-login") {
        showMessage("⚠️ Please logout and login again to confirm deletion.", 4000);
      } else {
        showMessage("❌ Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
      setConfirming(false);
    }
  };

  return (
    <div className="delete-page">
      <div className="delete-card">
        <h2>Delete Account</h2>

        <p className="warning-text">
          ⚠️ This action is permanent and cannot be undone.
        </p>

        <textarea
          placeholder="Why are you deleting your account?"
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            if (message) setMessage("");
          }}
          disabled={loading}
        />

        {message && <p className="delete-message">{message}</p>}

        {!confirming ? (
          <>
            <button className="delete-btn" onClick={handleDeleteClick} disabled={loading}>
              {loading ? "Deleting..." : "Delete Permanently"}
            </button>

            <button className="cancel-btn" onClick={() => navigate("/account")} disabled={loading}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p className="confirm-text">Are you sure you want to permanently delete your account?</p>

            <button className="delete-btn" onClick={handleConfirmDelete} disabled={loading}>
              {loading ? "Deleting..." : "Yes, Delete My Account"}
            </button>

            <button
              className="cancel-btn"
              onClick={() => setConfirming(false)}
              disabled={loading}
            >
              No, Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteAccount;