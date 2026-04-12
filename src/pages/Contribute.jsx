import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";
import { collection, addDoc, query, where, getDocs, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase/firebase";

const Contribute = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [formData, setFormData] = useState({ name: "", phone: "", amount: "", transactionId: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text, time = 4000) => {
    setMessage(text);
    setTimeout(() => setMessage(""), time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "name") v = value.replace(/[^a-zA-Z\s]/g, "");
    if (name === "phone") v = value.replace(/\D/g, "").slice(0, 10);
    if (name === "amount") {
      v = value.replace(/\D/g, "");
      if (parseInt(v || "0", 10) > 100000) v = "100000";
    }
    if (name === "transactionId") v = value.replace(/\D/g, "").slice(0, 12);
    setFormData({ ...formData, [name]: v });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const user = auth.currentUser;
    if (!user) { showMessage(t("contribute.err_login")); return; }

    const errors = [];
    if (!formData.name.trim()) errors.push(t("contribute.err_name"));
    if (formData.phone.length !== 10) errors.push(t("contribute.err_phone"));
    const amountNum = parseInt(formData.amount, 10);
    if (!amountNum || amountNum <= 0) errors.push(t("contribute.err_amount_zero"));
    else if (amountNum > 100000) errors.push(t("contribute.err_amount_max"));
    if (formData.transactionId.length !== 12) errors.push(t("contribute.err_txn"));

    if (errors.length > 0) {
      showMessage(errors.join("\n"));
      setFormData({ name: "", phone: "", amount: "", transactionId: "" });
      return;
    }

    try {
      setLoading(true);
      const q = query(collection(db, "contributions"), where("transactionId", "==", formData.transactionId));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        showMessage(t("contribute.err_duplicate"));
        setFormData({ name: "", phone: "", amount: "", transactionId: "" });
        return;
      }
      await addDoc(collection(db, "contributions"), {
        userId: user.uid, name: formData.name, phone: formData.phone,
        amount: amountNum, transactionId: formData.transactionId, createdAt: new Date(),
      });
      showMessage(t("contribute.success"), 3000);
      setFormData({ name: "", phone: "", amount: "", transactionId: "" });
    } catch {
      showMessage(t("contribute.err_server"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ctbp-container">
      <div className="ctbp-orb ctbp-orb-1" aria-hidden="true" />
      <div className="ctbp-orb ctbp-orb-2" aria-hidden="true" />
      <div className="ctbp-orb ctbp-orb-3" aria-hidden="true" />
      <div className="ctbp-grid-overlay" aria-hidden="true" />

      <h1 className="ctbp-title">{t("contribute.title")}</h1>
      <p className="ctbp-subtitle">{t("contribute.subtitle")}</p>

      <div className="ctbp-card">
        <div className="ctbp-qr-box">
          <p className="ctbp-qr-title">
            <span className="ctbp-qr-dot" />{t("contribute.scan_title")}
          </p>
          <div className="ctbp-qr-image-wrapper">
            <img src={qrImg} alt="QR Code" className="ctbp-image" />
          </div>
          <p className="ctbp-qr-hint">{t("contribute.scan_hint")}</p>
        </div>

        <div className="ctbp-form-divider" aria-hidden="true" />

        <form className="ctbp-form" onSubmit={handleSubmit}>
          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">👤</span>
            <input type="text" name="name" placeholder={t("contribute.ph_name")} value={formData.name} onChange={handleChange} required />
          </div>
          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">📱</span>
            <input type="tel" name="phone" placeholder={t("contribute.ph_phone")} value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">₹</span>
            <input type="text" name="amount" placeholder={t("contribute.ph_amount")} value={formData.amount} onChange={handleChange} required />
          </div>
          <div className="ctbp-input-group">
            <span className="ctbp-input-icon">#</span>
            <input type="text" name="transactionId" placeholder={t("contribute.ph_txn")} value={formData.transactionId} onChange={handleChange} required />
          </div>

          <button type="submit" className="ctbp-submit-btn" disabled={loading}>
            <span className="ctbp-btn-shimmer" />
            <span className="ctbp-btn-content">
              {loading
                ? <><span className="ctbp-spinner" /> {t("contribute.btn_submitting")}</>
                : t("contribute.btn_submit")
              }
            </span>
          </button>
        </form>
      </div>

      {message && (
        <div className={`ctbp-message ${message.startsWith("✅") ? "ctbp-success" : "ctbp-error"}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;