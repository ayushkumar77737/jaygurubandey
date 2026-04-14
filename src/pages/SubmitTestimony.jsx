import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SubmitTestimony.css";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

const SubmitTestimony = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    testimony: ""
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "testimonies"), {
        name:      form.name,
        location:  form.location,
        date:      form.date,
        testimony: form.testimony,
        createdAt: Timestamp.now(),
      });

      setSubmitted(true);
      setForm({ name: "", location: "", date: "", testimony: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error("Error submitting testimony:", error);
    }
  };

  return (
    <div className="submit-testimony-page">
      <h1>{t("submitTestimony.title")}</h1>
      <p>{t("submitTestimony.subtitle")}</p>

      <form onSubmit={handleSubmit} className="submit-form">

        <label>{t("submitTestimony.label_name")}</label>
        <input
          type="text"
          value={form.name}
          required
          onChange={handleNameChange}
          placeholder={t("submitTestimony.ph_name")}
        />

        <label>{t("submitTestimony.label_location")}</label>
        <input
          type="text"
          value={form.location}
          required
          onChange={handleLocationChange}
          placeholder={t("submitTestimony.ph_location")}
        />

        <label>{t("submitTestimony.label_date")}</label>
        <input
          type="date"
          value={form.date}
          required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <label>{t("submitTestimony.label_testimony")}</label>
        <textarea
          rows="6"
          value={form.testimony}
          required
          onChange={handleTestimonyChange}
          placeholder={t("submitTestimony.ph_testimony")}
        />

        <button type="submit" className="submit-testimony-btn">
          {t("submitTestimony.btn_submit")}
        </button>

        {submitted && (
          <p className="success-message">
            {t("submitTestimony.success")}
          </p>
        )}

      </form>
    </div>
  );
};

export default SubmitTestimony;