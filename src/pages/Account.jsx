import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Account = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [email, setEmail] = useState("");

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  const showMessage = (text, duration = 3000) => {
    setIsBlocked(true);
    setMessage(text);
    setTimeout(() => {
      setMessage("");
      setIsBlocked(false);
    }, duration);
  };

  useEffect(() => {
    const loadUser = async () => {
      const user = auth.currentUser;
      if (!user) return;
      try {
        setEmail(user.email);
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const fetchedName = snap.data().name || "";
          setName(fetchedName);
          setOriginalName(fetchedName);
        }
      } catch (err) {
        console.error("Load error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (!user) return;
    if (name.trim() === originalName.trim()) {
      setEditing(false);
      showMessage("❌ Update failed : you are using the same name");
      return;
    }
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
        updatedAt: new Date()
      });
      setOriginalName(name);
      setEditing(false);
      showMessage("✅ Name updated successfully");
    } catch (err) {
      console.error(err);
      showMessage("❌ Failed to update name");
    }
  };

  const handleCancel = () => {
    setName(originalName);
    setEditing(false);
    setMessage("");
  };

  if (loading) {
    return (
      <div className="acct-page">
        <div className="acct-bg" aria-hidden="true">
          <div className="acct-orb acct-orb-1" />
          <div className="acct-orb acct-orb-2" />
        </div>
        <p className="acct-loading">Loading...</p>
      </div>
    );
  }

  // Derive initials for avatar
  const initials = name
    ? name.trim().split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase()
    : email?.[0]?.toUpperCase() || "U";

  return (
    <div className="acct-page">

      {/* Decorative background */}
      <div className="acct-bg" aria-hidden="true">
        <div className="acct-orb acct-orb-1" />
        <div className="acct-orb acct-orb-2" />
        <div className="acct-grid" />
      </div>

      <div className="acct-container">

        {/* Avatar */}
        <div className="acct-avatar" aria-hidden="true">
          <span>{initials}</span>
          <div className="acct-avatar-ring" />
        </div>

        <h2 className="acct-title">My Account</h2>

        <div className="acct-card">

          <div className="acct-field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              disabled={!editing}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="acct-email-note">
              ℹ️ To update your name, please click on the edit button below the email.
            </p>
          </div>

          <div className="acct-field">
            <label>Email</label>
            <input type="email" value={email} disabled />
            <p className="acct-email-note">
              ℹ️ To update your email address, please go to request email update page.
            </p>
          </div>

          {!editing ? (
            <button
              className="acct-primary-btn"
              onClick={() => setEditing(true)}
              disabled={isBlocked}
            >
              <span className="acct-btn-shimmer" />
              Edit
            </button>
          ) : (
            <div className="acct-btn-group">
              <button className="acct-primary-btn" onClick={handleUpdate}>
                <span className="acct-btn-shimmer" />
                Update
              </button>
              <button className="acct-cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          )}

          <button
            className="acct-payments-btn"
            onClick={() => navigate("/my-payments")}
          >
            <span className="acct-btn-shimmer" />
            💳 My Payments
          </button>

          <button
            className="acct-delete-btn"
            onClick={() => navigate("/delete-account")}
          >
            Delete Account
          </button>

          {message && (
            <p className={message.startsWith("❌") ? "acct-error-msg" : "acct-success-msg"}>
              {message}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Account;