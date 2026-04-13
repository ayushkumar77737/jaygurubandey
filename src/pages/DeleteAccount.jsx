import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./DeleteAccount.css";

import { auth, db } from "../firebase/firebase";
import { doc, deleteDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { deleteUser } from "firebase/auth";

const DeleteAccount = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  const showMessage = (text, duration = 3000) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("");
    }, duration);
  };

  const handleDeleteClick = () => {
    if (!reason.trim()) {
      showMessage(t("deleteAccount.err_reason"));
      return;
    }
    setMessage("");
    setConfirming(true);
  };

  const handleConfirmDelete = async () => {
    const user = auth.currentUser;
    if (!user) {
      showMessage(t("deleteAccount.err_login"));
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

      showMessage(t("deleteAccount.success"), 1200);
      setTimeout(() => navigate("/"), 1200);

    } catch (err) {
      console.error(err);
      if (err.code === "auth/requires-recent-login") {
        showMessage(t("deleteAccount.err_relogin"), 4000);
      } else {
        showMessage(t("deleteAccount.err_server"));
      }
    } finally {
      setLoading(false);
      setConfirming(false);
    }
  };

  return (
    <div className="delete-page">
      <div className="delete-card">
        <h2>{t("deleteAccount.title")}</h2>

        <p className="warning-text">{t("deleteAccount.warning")}</p>

        <textarea
          placeholder={t("deleteAccount.ph_reason")}
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
              {loading ? t("deleteAccount.btn_deleting") : t("deleteAccount.btn_delete")}
            </button>

            <button className="cancel-btn" onClick={() => navigate("/account")} disabled={loading}>
              {t("deleteAccount.btn_cancel")}
            </button>
          </>
        ) : (
          <>
            <p className="confirm-text">{t("deleteAccount.confirm_text")}</p>

            <button className="delete-btn" onClick={handleConfirmDelete} disabled={loading}>
              {loading ? t("deleteAccount.btn_deleting") : t("deleteAccount.btn_confirm_yes")}
            </button>

            <button
              className="cancel-btn"
              onClick={() => setConfirming(false)}
              disabled={loading}
            >
              {t("deleteAccount.btn_confirm_no")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteAccount;