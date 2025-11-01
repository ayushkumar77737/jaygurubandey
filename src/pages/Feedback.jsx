import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: "",
    feedback: "",
    issues: "",
    issueDescription: "",
    contact: "",
  });

  // ✅ Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Validation for fullName (only letters and spaces)
    if (name === "fullName") {
      const regex = /^[A-Za-z\s]*$/; // only alphabets and spaces
      if (!regex.test(value)) return; // ignore invalid input
    }

    // ✅ Validation for email (allow letters, numbers, @, ., _ only)
    if (name === "email") {
      const regex = /^[A-Za-z0-9@._]*$/; 
      if (!regex.test(value)) return; // ignore invalid input
    }

    setFormData({ ...formData, [name]: value });
  };

  // ✅ Form validation before submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.rating ||
      !formData.feedback ||
      !formData.issues ||
      !formData.contact
    ) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    alert("Thank you for your feedback!");
    console.log(formData);
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <h1 className="feedback-title">🙏 Devotee Feedback Form</h1>
        <p className="feedback-subtitle">
          We value your thoughts and experiences. Please take a moment to share your feedback below.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            maxLength={50}
          />

          {/* Email */}
          <label>
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          {/* Rating */}
          <label>
            Overall Experience Rating <span className="required">*</span>
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

          {/* Feedback Comments */}
          <label>
            Feedback / Comments <span className="required">*</span>
          </label>
          <textarea
            name="feedback"
            placeholder="Share your experience or suggestions..."
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>

          {/* Issues */}
          <label>
            Did you face any issues while using the website?
            <span className="required">*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="issues"
                value="Yes"
                checked={formData.issues === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="issues"
                value="No"
                checked={formData.issues === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {formData.issues === "Yes" && (
            <>
              <label>
                Please describe the issue <span className="required">*</span>
              </label>
              <textarea
                name="issueDescription"
                placeholder="Describe the issue you faced..."
                value={formData.issueDescription}
                onChange={handleChange}
              ></textarea>
            </>
          )}

          {/* Contact permission */}
          <label>
            Would you like us to contact you about your feedback?
            <span className="required">*</span>
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contact"
                value="Yes"
                checked={formData.contact === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="No"
                checked={formData.contact === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
