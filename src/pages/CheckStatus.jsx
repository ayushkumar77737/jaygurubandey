import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./CheckStatus.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import guruji from "../assets/guruji.webp";

const CheckStatus = () => {
  const { t } = useTranslation();
  const [transactionId, setTransactionId] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);

  const showResult = (message) => {
    setResult(message);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setResult("");
    }, 3000);
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (transactionId.length !== 12) {
      showResult(t("checkStatus.err_length"));
      setTransactionId("");
      return;
    }

    try {
      setLoading(true);
      setResult("");

      const q = query(
        collection(db, "contributions"),
        where("transactionId", "==", transactionId)
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showResult(t("checkStatus.err_not_found"));
        setTransactionId("");
        return;
      }

      const data = snapshot.docs[0].data();

      if (!data.status) {
        showResult(t("checkStatus.status_pending"));
      } else if (data.status === "verified") {
        showResult(t("checkStatus.status_verified"));
      } else if (data.status === "failed") {
        showResult(t("checkStatus.status_failed"));
      } else {
        showResult(t("checkStatus.status_pending"));
      }

      setTransactionId("");

    } catch (err) {
      showResult(t("checkStatus.err_server"));
      setTransactionId("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chkst-container">

      {/* ── Decorative background ── */}
      <div className="chkst-bg" aria-hidden="true">
        <div className="chkst-bg-ring chkst-bg-ring-1" />
        <div className="chkst-bg-ring chkst-bg-ring-2" />
        <div className="chkst-bg-ring chkst-bg-ring-3" />
        <div className="chkst-bg-orb chkst-bg-orb-1" />
        <div className="chkst-bg-orb chkst-bg-orb-2" />
        <div className="chkst-dots" />
      </div>

      {/* ── Content ── */}
      <div className="chkst-content">

        {/* Guruji image with sacred rings */}
        <div className="chkst-image-wrapper" aria-hidden="true">
          <div className="chkst-ring chkst-ring-outer" />
          <div className="chkst-ring chkst-ring-mid" />
          <div className="chkst-image">
            <img src={guruji} alt="Guruji" />
          </div>
        </div>

        <h1 className="chkst-title">{t("checkStatus.title")}</h1>
        <p className="chkst-subtitle">{t("checkStatus.subtitle")}</p>

        <form className="chkst-card" onSubmit={handleCheck}>
          <div className="chkst-input-wrap">
            <span className="chkst-input-icon">#</span>
            <input
              type="text"
              placeholder={t("checkStatus.ph_txn")}
              value={transactionId}
              onChange={(e) =>
                setTransactionId(e.target.value.replace(/\D/g, "").slice(0, 12))
              }
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            <span className="chkst-btn-shimmer" />
            <span className="chkst-btn-text">
              {loading ? (
                <>
                  <span className="chkst-spinner" /> {t("checkStatus.btn_checking")}
                </>
              ) : (
                t("checkStatus.btn_check")
              )}
            </span>
          </button>
        </form>

        {result && (
          <div
            className={`chkst-message ${result.startsWith("✅")
                ? "chkst-success"
                : result.startsWith("⏳")
                  ? "chkst-pending"
                  : "chkst-error"
              }`}
          >
            {result}
          </div>
        )}

      </div>
    </div>
  );
};

export default CheckStatus;