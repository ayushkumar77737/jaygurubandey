import React, { useState } from "react";
import "./SubmitTestimony.css"; // you can design later

const SubmitTestimony = () => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    testimony: ""
  });

  const googleFormURL = "https://docs.google.com/forms/d/e/xxxxxxxxxxxx/formResponse"; // replace

  const entryName = "entry.123456789";     // replace
  const entryLocation = "entry.987654321"; // replace
  const entryDate = "entry.111213141";     // replace
  const entryTestimony = "entry.555666777"; // replace

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

    alert("Thank you! Your testimony has been submitted.");
    setForm({ name: "", location: "", date: "", testimony: "" });
  };

  return (
    <div className="submit-testimony-page">
      <h1>🌸 Share Your Experience 🌸</h1>
      <p>Your story may inspire someone who needs hope.</p>

      <form onSubmit={handleSubmit} className="submit-form">
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Location</label>
        <input
          type="text"
          value={form.location}
          required
          onChange={(e) => setForm({ ...form, location: e.target.value })}
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
          onChange={(e) => setForm({ ...form, testimony: e.target.value })}
        />

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SubmitTestimony;
