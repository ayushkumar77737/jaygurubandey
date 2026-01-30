import React, { useState } from "react";
import "./Chatwithus.css";
import sideImage from "../assets/guruji.webp";

// 🔥 Firebase imports
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

      // Reset form
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
    <div className="chatwithus-page">
      <div className="chatwithus-wrapper">
        {/* Left Side Image */}
        <div className="chat-image-box">
          <img src={sideImage} alt="Chat Side" />
        </div>

        {/* Right Side Chat Box */}
        <div className="chat-container">
          <h2 className="chat-title">Chat With Us</h2>

          <form className="chat-form" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => {
                const onlyLetters = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                setName(onlyLetters);
              }}
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => {
                const filtered = e.target.value.replace(
                  /[^a-zA-Z0-9@._-]/g,
                  ""
                );
                setEmail(filtered);
              }}
              required
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, "");
                setPhone(onlyNums);
              }}
              maxLength={10}
              pattern="\d{10}"
              required
            />

            {/* Question */}
            <textarea
              placeholder="Enter your Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {successMessage && (
            <p className="success-msg">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;