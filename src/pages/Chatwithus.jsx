import React, { useState } from "react";
import "./Chatwithus.css";
import sideImage from "../assets/guruji.jpg"; // <-- replace with your image path

const ChatWithUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeuxiyEAvdTkwzSJUKYhx6BKkqR1bQvyUV2GOELQacWwBAA-g/formResponse";

    const formData = new FormData();
    formData.append("entry.189061439", name); // Name
    formData.append("entry.1391401379", email); // Email
    formData.append("entry.1240440170", phone); // Phone
    formData.append("entry.747611041", question); // Question

    try {
      await fetch(formURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccessMessage("Message sent successfully ✅");
      setName("");
      setEmail("");
      setPhone("");
      setQuestion("");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error!", error.message);
      setSuccessMessage("❌ Failed to send message");
    }
  };

  return (
    <div className="chatwithus-wrapper">
      {/* Left Side Image */}
      <div className="chat-image-box">
        <img src={sideImage} alt="Chat Side" />
      </div>

      {/* Right Side Chat Box */}
      <div className="chat-container">
        <h2 className="chat-title">Chat With Us</h2>
        <form className="chat-form" onSubmit={handleSubmit}>
          {/* Name Field - only letters & spaces */}
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

          {/* Email Field - standard email safe chars */}
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              const filtered = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, "");
              setEmail(filtered);
            }}
            required
          />

          {/* Phone Field - only digits */}
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            value={phone}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              setPhone(onlyNums);
            }}
            pattern="\d{10}" // only digits, exactly 10
            maxLength={10}
            required
          />

          <textarea
            placeholder="Enter your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>
        {successMessage && <p className="success-msg">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ChatWithUs;
