import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Chatwithus.css";
import sideImage from "../assets/guruji.webp";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ChatWithUs = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "chatMessages"), {
        name: name.trim(), email: email.trim(),
        phone: phone.trim(), question: question.trim(),
        createdAt: serverTimestamp(),
      });
      setSuccessMessage(t("chat.success"));
      setName(""); setEmail(""); setPhone(""); setQuestion("");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Firestore Error:", error);
      setSuccessMessage(t("chat.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cwus-page">

      <div className="cwus-bg" aria-hidden="true">
        <div className="cwus-orb cwus-orb-1" />
        <div className="cwus-orb cwus-orb-2" />
        <div className="cwus-orb cwus-orb-3" />
      </div>

      <div className="cwus-wrapper">

        {/* Left image */}
        <div className="cwus-image-box">
          <div className="cwus-img-wrap">
            <img src={sideImage} alt="Chat Side" />
            <div className="cwus-img-glow" aria-hidden="true" />
          </div>
        </div>

        {/* Right chat box */}
        <div className="cwus-container">
          <div className="cwus-border-ring" aria-hidden="true" />

          <div className="cwus-title-wrap">
            <span className="cwus-title-dot" aria-hidden="true" />
            <h2 className="cwus-title">{t("chat.title")}</h2>
            <span className="cwus-title-dot" aria-hidden="true" />
          </div>
          <p className="cwus-subtitle">{t("chat.subtitle")}</p>

          <form className="cwus-form" onSubmit={handleSubmit}>

            <div className="cwus-field">
              <label className="cwus-label">{t("chat.label_name")}</label>
              <input
                type="text"
                placeholder={t("chat.ph_name")}
                value={name}
                onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">{t("chat.label_email")}</label>
              <input
                type="email"
                placeholder={t("chat.ph_email")}
                value={email}
                onChange={(e) => setEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ""))}
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">{t("chat.label_phone")}</label>
              <input
                type="tel"
                placeholder={t("chat.ph_phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                maxLength={10}
                pattern="\d{10}"
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">{t("chat.label_question")}</label>
              <textarea
                placeholder={t("chat.ph_question")}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              <span className="cwus-btn-shimmer" />
              <span className="cwus-btn-text">
                {loading ? (
                  <><span className="cwus-spinner" /> {t("chat.btn_sending")}</>
                ) : (
                  t("chat.btn_send")
                )}
              </span>
            </button>

          </form>

          {successMessage && (
            <p className={`cwus-success-msg ${successMessage.startsWith("❌") ? "cwus-error" : ""}`}>
              {successMessage}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;