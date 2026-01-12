import React, { useState } from "react";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbznlQRq52r71ftv6lgYAEL5FQ_4PmG60SPAjlzq9-wRVGI8pkDLd11seck6SfYmbmDoLw/exec"; // 🔴 replace with your URL

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showMessage = (text, time = 4000) => {
    setMessage(text);
    setTimeout(() => setMessage(""), time);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "amount") {
      newValue = value.replace(/\D/g, "");
      if (parseInt(newValue || "0", 10) > 100000) {
        newValue = "100000";
      }
    }

    if (name === "transactionId") {
      newValue = value.replace(/\D/g, "").slice(0, 12);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    let errors = [];

    if (!formData.name.trim()) {
      errors.push("❌ Name is required.");
    }

    if (formData.phone.length !== 10) {
      errors.push("❌ Phone number must be exactly 10 digits.");
    }

    const amountNum = parseInt(formData.amount, 10);
    if (!amountNum || amountNum <= 0) {
      errors.push("❌ Amount must be greater than 0.");
    } else if (amountNum > 100000) {
      errors.push("❌ Amount cannot exceed ₹1,00,000.");
    }

    if (formData.transactionId.length !== 12) {
      errors.push("❌ Transaction ID must be exactly 12 digits.");
    }

    // ❌ Validation errors
    if (errors.length > 0) {
      showMessage(errors.join("\n"));

      // 🔥 CLEAR ALL FIELDS ON ERROR
      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          amount: formData.amount,
          transactionId: formData.transactionId,
        }),
      });

      const text = await response.text();

      // ❌ Duplicate transaction
      if (text === "Duplicate transaction") {
        showMessage("❌ This Transaction ID has already been submitted.");

        // 🔥 CLEAR FIELDS
        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });

        return;
      }

      // ✅ Success
      if (text === "Success") {
        showMessage("✅ Contribution submitted successfully!", 3000);

        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });

        return;
      }

      // ❌ Unknown response
      showMessage("❌ Something went wrong. Please try again.");

      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    } catch {
      // ❌ Server error
      showMessage("❌ Server error. Please try again.");

      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="contribute-container">
      <h1 className="contribute-title">Contribute</h1>

      <div className="contribute-card">
        <img src={qrImg} alt="Scanner / QR" className="contribute-image" />

        <form className="contribute-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="amount"
            placeholder="Amount (Max ₹1,00,000)"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID (12 digits)"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {message && (
        <div
          style={{
            color: message.startsWith("✅") ? "#00ff9d" : "#ff6b6b",
            marginTop: "20px",
            whiteSpace: "pre-line",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;
