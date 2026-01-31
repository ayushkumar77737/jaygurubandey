import React, { useState } from "react";
import "./SubmitTestimony.css";

// 🔥 Firebase imports
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase"; // adjust path if needed

const SubmitTestimony = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    testimony: ""
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ Allow only letters & spaces
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm({ ...form, name: value });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setForm({ ...form, location: value });
  };

  const handleTestimonyChange = (e) => {
    setForm({ ...form, testimony: e.target.value });
  };

  // 🔥 Submit to Firebase Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "testimonies"), {
        name: form.name,
        location: form.location,
        date: form.date,
        testimony: form.testimony,
        createdAt: Timestamp.now(),
      });

      setSubmitted(true);
      setForm({ name: "", location: "", date: "", testimony: "" });

      // ⏳ hide success message after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error("Error submitting testimony:", error);
    }
  };

  return (
    <div className="submit-testimony-page">
      <h1>🌸 Share Your Testimony 🌸</h1>
      <p>Your story may inspire someone who needs hope.</p>

      <form onSubmit={handleSubmit} className="submit-form">
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          required
          onChange={handleNameChange}
          placeholder="Enter your full name"
        />

        <label>Location</label>
        <input
          type="text"
          value={form.location}
          required
          onChange={handleLocationChange}
          placeholder="City / Place"
        />

        <label>Date</label>
        <input
          type="date"
          value={form.date}
          required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <label>Testimony</label>
        <textarea
          rows="6"
          value={form.testimony}
          required
          onChange={handleTestimonyChange}
          placeholder="Write your testimony..."
        />

        <button type="submit" className="submit-testimony-btn">
          Submit
        </button>

        {submitted && (
          <p className="success-message">
            🌸 Thank you! Your testimony has been submitted.
          </p>
        )}
      </form>
    </div>
  );
};

export default SubmitTestimony;