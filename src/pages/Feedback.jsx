import React, { useState } from "react";
import "./Feedback.css";

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

    // If "issues" is changed to "Yes", reset contact field
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

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfJPwUXzqt_USScLrDAquYYrjijAbg3kIuKixkvSkVMuBGQEA/formResponse";

    const data = new FormData();
    data.append("entry.1385578647", formData.fullName); // Full Name
    data.append("entry.331457870", formData.email); // Email
    data.append("entry.984911187", formData.rating); // Rating
    data.append("entry.118230991", formData.feedback); // Feedback
    data.append("entry.1904533888", formData.issues); // Issues
    data.append("entry.408974374", formData.contact); // Contact

    try {
      await fetch(formURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
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
      console.error("Error submitting form:", err);
      setSuccessMsg("❌ Submission failed. Please try again.");
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

            {/* 👇 Only show "No" if user didn't face issues */}
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

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>

          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Feedback;
