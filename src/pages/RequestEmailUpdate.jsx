// src/pages/RequestEmailUpdate.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const user = auth.currentUser;

  const [oldEmail] = useState(user?.email || "");
  const [newEmail, setNewEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newEmail || !reason) {
      showMessage(t("requestEmailUpdate.err_fields"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      showMessage(t("requestEmailUpdate.err_invalid_email"));
      return;
    }

    if (newEmail === oldEmail) {
      showMessage(t("requestEmailUpdate.err_same_email"));
      return;
    }

    if (!user) {
      showMessage(t("requestEmailUpdate.err_login"));
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
        showMessage(t("requestEmailUpdate.warn_duplicate"));
        setNewEmail("");
        setReason("");
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

      showMessage(t("requestEmailUpdate.success"));
      setNewEmail("");
      setReason("");
    } catch (error) {
      console.error("Email change request error:", error);
      showMessage(t("requestEmailUpdate.err_server"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="requ-page">

      {/* Decorative background */}
      <div className="requ-bg" aria-hidden="true">
        <div className="requ-orb requ-orb-1" />
        <div className="requ-orb requ-orb-2" />
        <div className="requ-orb requ-orb-3" />
        <div className="requ-grid" />
      </div>

      <div className="requ-card">

        {/* Header */}
        <div className="requ-header">
          <div className="requ-icon-wrap" aria-hidden="true">
            <span className="requ-icon">✉</span>
            <div className="requ-icon-ring" />
          </div>
          <h2 className="requ-title">{t("requestEmailUpdate.title")}</h2>
          <p className="requ-subtitle">{t("requestEmailUpdate.subtitle")}</p>
        </div>

        {message && (
          <p className={`requ-message ${message.startsWith("✅") ? "requ-msg-success"
              : message.startsWith("⚠️") ? "requ-msg-warn"
                : "requ-msg-error"
            }`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="requ-form">

          <div className="requ-field">
            <label className="requ-label">{t("requestEmailUpdate.label_uid")}</label>
            <div className="requ-input-wrap">
              <span className="requ-prefix">#</span>
              <input
                type="text"
                placeholder={t("requestEmailUpdate.ph_uid")}
                value={user?.uid || ""}
                disabled
              />
            </div>
          </div>

          <div className="requ-field">
            <label className="requ-label">{t("requestEmailUpdate.label_old_email")}</label>
            <div className="requ-input-wrap">
              <span className="requ-prefix">@</span>
              <input
                type="email"
                placeholder={t("requestEmailUpdate.ph_old_email")}
                value={oldEmail}
                disabled
              />
            </div>
          </div>

          <div className="requ-field">
            <label className="requ-label">{t("requestEmailUpdate.label_new_email")}</label>
            <div className="requ-input-wrap">
              <span className="requ-prefix">@</span>
              <input
                type="email"
                placeholder={t("requestEmailUpdate.ph_new_email")}
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

          <div className="requ-field">
            <label className="requ-label">{t("requestEmailUpdate.label_reason")}</label>
            <textarea
              placeholder={t("requestEmailUpdate.ph_reason")}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows="4"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <span className="requ-btn-shimmer" />
            <span className="requ-btn-text">
              {loading ? (
                <><span className="requ-spinner" /> {t("requestEmailUpdate.btn_submitting")}</>
              ) : (
                t("requestEmailUpdate.btn_submit")
              )}
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default RequestEmailUpdate;