import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Account.css";

import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Account = () => {
  const { t } = useTranslation();
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
      showMessage(t("account.err_same_name"));
      return;
    }
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
        updatedAt: new Date()
      });
      setOriginalName(name);
      setEditing(false);
      showMessage(t("account.success_update"));
    } catch (err) {
      console.error(err);
      showMessage(t("account.err_update"));
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
        <p className="acct-loading">{t("account.loading")}</p>
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

        <h2 className="acct-title">{t("account.title")}</h2>

        <div className="acct-card">

          <div className="acct-field">
            <label>{t("account.label_name")}</label>
            <input
              type="text"
              value={name}
              disabled={!editing}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="acct-email-note">{t("account.note_name")}</p>
          </div>

          <div className="acct-field">
            <label>{t("account.label_email")}</label>
            <input type="email" value={email} disabled />
            <p className="acct-email-note">{t("account.note_email")}</p>
          </div>

          {!editing ? (
            <button
              className="acct-primary-btn"
              onClick={() => setEditing(true)}
              disabled={isBlocked}
            >
              <span className="acct-btn-shimmer" />
              {t("account.btn_edit")}
            </button>
          ) : (
            <div className="acct-btn-group">
              <button className="acct-primary-btn" onClick={handleUpdate}>
                <span className="acct-btn-shimmer" />
                {t("account.btn_update")}
              </button>
              <button className="acct-cancel-btn" onClick={handleCancel}>
                {t("account.btn_cancel")}
              </button>
            </div>
          )}

          <button
            className="acct-payments-btn"
            onClick={() => navigate("/my-payments")}
          >
            <span className="acct-btn-shimmer" />
            {t("account.btn_payments")}
          </button>

          <button
            className="acct-delete-btn"
            onClick={() => navigate("/delete-account")}
          >
            {t("account.btn_delete")}
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