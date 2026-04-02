import React, { useState } from "react";
import "./Chatwithus.css";
import sideImage from "../assets/guruji.webp";

import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ChatWithUs = () => {
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
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        question: question.trim(),
        createdAt: serverTimestamp(),
      });

      setSuccessMessage("Message sent successfully ✅");
      setName("");
      setEmail("");
      setPhone("");
      setQuestion("");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Firestore Error:", error);
      setSuccessMessage("❌ Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cwus-page">

      {/* Decorative background */}
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

          {/* Animated border ring */}
          <div className="cwus-border-ring" aria-hidden="true" />

          <div className="cwus-title-wrap">
            <span className="cwus-title-dot" aria-hidden="true" />
            <h2 className="cwus-title">Chat With Us</h2>
            <span className="cwus-title-dot" aria-hidden="true" />
          </div>
          <p className="cwus-subtitle">We'd love to hear from you 🙏</p>

          <form className="cwus-form" onSubmit={handleSubmit}>

            <div className="cwus-field">
              <label className="cwus-label">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={name}
                onChange={(e) => {
                  const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  setName(onlyLetters);
                }}
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">Email Address</label>
              <input
                type="email"
                placeholder="e.g. you@example.com"
                value={email}
                onChange={(e) => {
                  const filtered = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
                  setEmail(filtered);
                }}
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">Phone Number</label>
              <input
                type="tel"
                placeholder="10-digit number"
                value={phone}
                onChange={(e) => {
                  const onlyNums = e.target.value.replace(/\D/g, "");
                  setPhone(onlyNums);
                }}
                maxLength={10}
                pattern="\d{10}"
                required
              />
            </div>

            <div className="cwus-field">
              <label className="cwus-label">Your Question</label>
              <textarea
                placeholder="Write your question or message here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              <span className="cwus-btn-shimmer" />
              <span className="cwus-btn-text">
                {loading ? (
                  <><span className="cwus-spinner" /> Sending...</>
                ) : (
                  "Send Message ✦"
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