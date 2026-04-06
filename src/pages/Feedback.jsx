import React, { useState } from "react";
import "./Feedback.css";

// 🔥 Firebase imports
import { db } from "../firebase//firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Feedback = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: "",
    feedback: "",
    issues: "",
    contact: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }
    if (name === "email") {
      if (!/^[A-Za-z0-9@._]*$/.test(value)) return;
    }
    if (name === "feedback") {
      if (!/^[A-Za-z0-9\s.,!?'"()-]*$/.test(value)) return;
    }
    if (name === "issues" && value === "Yes") {
      setFormData({ ...formData, [name]: value, contact: "Yes" });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.rating ||
      !formData.feedback ||
      !formData.issues ||
      !formData.contact
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "feedbacks"), {
        fullName: formData.fullName,
        email: formData.email,
        rating: formData.rating,
        feedback: formData.feedback,
        issues: formData.issues,
        contact: formData.contact,
        createdAt: serverTimestamp(),
      });

      setSuccessMsg("✅ Thank you for your feedback!");
      setFormData({ fullName: "", email: "", rating: "", feedback: "", issues: "", contact: "" });
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error("Firestore Error:", err);
      setSuccessMsg("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fbfrm__page">

      {/* Background orbs */}
      <div className="fbfrm__orb fbfrm__orb--1" />
      <div className="fbfrm__orb fbfrm__orb--2" />
      <div className="fbfrm__orb fbfrm__orb--3" />

      <div className="fbfrm__wrap">

        {/* ===== Header ===== */}
        <div className="fbfrm__hero">
          <div className="fbfrm__hero-badge">Share Your Experience</div>
          <h1 className="fbfrm__hero-title">
            <span className="fbfrm__pray">🙏</span>
            Devotee Feedback Form
          </h1>
          <p className="fbfrm__hero-sub">
            Your thoughts help us serve the ashram community better.
            We read every message with gratitude.
          </p>
          <div className="fbfrm__hero-divider">
            <span className="fbfrm__div-line" />
            <span className="fbfrm__div-gem">✦</span>
            <span className="fbfrm__div-line" />
          </div>
        </div>

        {/* ===== Form Card ===== */}
        <div className="fbfrm__card">

          {/* Progress dots */}
          <div className="fbfrm__card-dots">
            <span className="fbfrm__dot fbfrm__dot--pink" />
            <span className="fbfrm__dot fbfrm__dot--peach" />
            <span className="fbfrm__dot fbfrm__dot--lilac" />
            <span className="fbfrm__card-dots-label">Feedback Form</span>
          </div>

          <form className="fbfrm__form" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Full Name <span className="fbfrm__req">*</span>
              </label>
              <input
                className="fbfrm__input"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Email Address <span className="fbfrm__req">*</span>
              </label>
              <input
                className="fbfrm__input"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@gmail.com"
              />
            </div>

            {/* Rating */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Overall Rating <span className="fbfrm__req">*</span>
              </label>
              <div className="fbfrm__stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="fbfrm__star-label">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={formData.rating === String(star)}
                      onChange={handleChange}
                      className="fbfrm__star-input"
                    />
                    <span
                      className={`fbfrm__star ${formData.rating && Number(formData.rating) >= star
                          ? "fbfrm__star--lit"
                          : ""
                        }`}
                    >
                      ★
                    </span>
                  </label>
                ))}
                {formData.rating && (
                  <span className="fbfrm__rating-label">
                    {["", "Poor", "Fair", "Good", "Great", "Excellent!"][formData.rating]}
                  </span>
                )}
              </div>
            </div>

            {/* Feedback */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Your Feedback <span className="fbfrm__req">*</span>
              </label>
              <textarea
                className="fbfrm__textarea"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                placeholder="Write your feedback here..."
              />
            </div>

            {/* Issues */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Did you face any issues? <span className="fbfrm__req">*</span>
              </label>
              <div className="fbfrm__radio-group">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className={`fbfrm__radio-card ${formData.issues === opt ? "fbfrm__radio-card--active" : ""}`}>
                    <input
                      type="radio"
                      name="issues"
                      value={opt}
                      checked={formData.issues === opt}
                      onChange={handleChange}
                      className="fbfrm__radio-input"
                    />
                    <span className="fbfrm__radio-indicator" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="fbfrm__field">
              <label className="fbfrm__label">
                Would you like us to contact you? <span className="fbfrm__req">*</span>
              </label>
              <div className="fbfrm__radio-group">
                <label className={`fbfrm__radio-card ${formData.contact === "Yes" ? "fbfrm__radio-card--active" : ""}`}>
                  <input
                    type="radio"
                    name="contact"
                    value="Yes"
                    checked={formData.contact === "Yes"}
                    onChange={handleChange}
                    className="fbfrm__radio-input"
                  />
                  <span className="fbfrm__radio-indicator" />
                  Yes
                </label>

                {formData.issues !== "Yes" && (
                  <label className={`fbfrm__radio-card ${formData.contact === "No" ? "fbfrm__radio-card--active" : ""}`}>
                    <input
                      type="radio"
                      name="contact"
                      value="No"
                      checked={formData.contact === "No"}
                      onChange={handleChange}
                      className="fbfrm__radio-input"
                    />
                    <span className="fbfrm__radio-indicator" />
                    No
                  </label>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="fbfrm__submit"
              disabled={loading}
            >
              {loading ? (
                <span className="fbfrm__spinner" />
              ) : (
                <>Submit Feedback 🙏</>
              )}
            </button>

            {/* Success */}
            {successMsg && (
              <div className={`fbfrm__success ${successMsg.startsWith("❌") ? "fbfrm__success--error" : ""}`}>
                {successMsg}
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;