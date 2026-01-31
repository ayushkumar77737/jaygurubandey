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

    // Validation rules
    if (name === "fullName") {
      const valid = /^[A-Za-z\s]*$/;
      if (!valid.test(value)) return;
    }

    if (name === "email") {
      const valid = /^[A-Za-z0-9@._]*$/;
      if (!valid.test(value)) return;
    }

    if (name === "feedback") {
      const valid = /^[A-Za-z0-9\s.,!?'"()-]*$/;
      if (!valid.test(value)) return;
    }

    // If issues = Yes → contact auto Yes
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

      // 🔥 Store data in Firestore
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

      setFormData({
        fullName: "",
        email: "",
        rating: "",
        feedback: "",
        issues: "",
        contact: "",
      });

      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error("Firestore Error:", err);
      setSuccessMsg("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h1 className="feedback-title">🙏 Devotee Feedback Form</h1>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <label>
            Full Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter only letters"
          />

          <label>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
          />

          <label>
            Overall Rating <span style={{ color: "red" }}>*</span>
          </label>
          <div className="rating-group">
            {[1, 2, 3, 4, 5].map((star) => (
              <label key={star}>
                <input
                  type="radio"
                  name="rating"
                  value={star}
                  checked={formData.rating === String(star)}
                  onChange={handleChange}
                />
                <span className="star">★</span>
              </label>
            ))}
          </div>

          <label>
            Feedback <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
            placeholder="Write your feedback here..."
          ></textarea>

          <label>
            Did you face any issues? <span style={{ color: "red" }}>*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="issues"
                value="Yes"
                checked={formData.issues === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="issues"
                value="No"
                checked={formData.issues === "No"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

          <label>
            Would you like us to contact you?{" "}
            <span style={{ color: "red" }}>*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contact"
                value="Yes"
                checked={formData.contact === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>

            {formData.issues !== "Yes" && (
              <label>
                <input
                  type="radio"
                  name="contact"
                  value="No"
                  checked={formData.contact === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            )}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>

          {successMsg && <p className="success-message">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Feedback;