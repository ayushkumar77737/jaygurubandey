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
  const [isBlocked, setIsBlocked] = useState(false); // 🔒 blocks Edit button
  const [loading, setLoading] = useState(true);

  // 🔹 helper: show message + block Edit temporarily
  const showMessage = (text, duration = 3000) => {
    setIsBlocked(true);
    setMessage(text);

    setTimeout(() => {
      setMessage("");
      setIsBlocked(false);
    }, duration);
  };

  // 🔹 Load user data
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

  // 🔹 Update ONLY name
  const handleUpdate = async () => {
    const user = auth.currentUser;
    if (!user) return;

    // 🚫 same-name check
    if (name.trim() === originalName.trim()) {
      setEditing(false);
      showMessage("❌ Update failed: you are using the same name");
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

  // 🔹 Cancel editing
  const handleCancel = () => {
    setName(originalName);
    setEditing(false);
    setMessage("");
  };

  if (loading) {
    return (
      <div className="account-page">
        <p style={{ color: "#fff" }}>Loading...</p>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="account-container">
        <h2 className="account-title">My Account</h2>

        <div className="account-card">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              disabled={!editing}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" value={email} disabled />
            <p className="email-note">
              ℹ️ To update your email address, please contact the support team.
            </p>
          </div>

          {!editing ? (
            <button
              className="primary-btn"
              onClick={() => setEditing(true)}
              disabled={isBlocked}   // ✅ disabled while message shown
            >
              Edit
            </button>
          ) : (
            <div className="btn-group">
              <button
                className="primary-btn"
                onClick={handleUpdate}
              >
                Update
              </button>

              <button
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
          <button
  className="my-payments-btn"
  onClick={() => navigate("/my-payments")}
>
  💳 My Payments
</button>


          {message && <p className="success-msg">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Account;