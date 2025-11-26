import React, { useState } from "react";
import "./SubmitTestimony.css";

const SubmitTestimony = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    testimony: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLScYAJdOlq2a9vG_a46-cz6UsLmDkhROgCBc3zEbUMY6MY-uBg/formResponse";

  const entryName = "entry.1956407696";
  const entryLocation = "entry.699348816";
  const entryDate = "entry.349804285";
  const entryTestimony = "entry.185507649";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(entryName, form.name);
    formData.append(entryLocation, form.location);
    formData.append(entryDate, form.date);
    formData.append(entryTestimony, form.testimony);

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
    setForm({ name: "", location: "", date: "", testimony: "" });

    // ⏳ hide success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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

        <button type="submit" className="submit-btn">Submit</button>

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
