import React, { useState } from "react";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");

  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLScPaPqGsLaYiW7g_wh_fwByBIi_TbA7j-pe61szA6y10TVRmQ/formResponse";

  const FORM_FIELDS = {
    name: "entry.1297364123",
    phone: "entry.1745026852",
    amount: "entry.118440354",
    transactionId: "entry.336321479",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") newValue = value.replace(/[^a-zA-Z\s]/g, "");
    if (name === "phone") newValue = value.replace(/\D/g, "").slice(0, 10);
    if (name === "amount") {
      newValue = value.replace(/\D/g, ""); // only digits
      if (parseInt(newValue, 10) > 100000) {
        newValue = "100000"; // cap at 1 lakh
      }
    }
    if (name === "transactionId") newValue = value.replace(/\D/g, "").slice(0, 12);

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = [];

    // Name validation
    if (!formData.name.trim()) {
      errors.push("❌ Name is required.");
    }

    // Phone validation
    if (formData.phone.length !== 10) {
      errors.push("❌ Phone number must be exactly 10 digits.");
    }

    // Amount validation
    if (!formData.amount || parseInt(formData.amount, 10) <= 0) {
      errors.push("❌ Amount must be greater than 0.");
    } else if (parseInt(formData.amount, 10) > 100000) {
      errors.push("❌ Amount cannot exceed ₹1,00,000.");
    }

    // Transaction ID validation
    if (formData.transactionId.length !== 12) {
      errors.push("❌ Transaction ID must be exactly 12 digits.");
    }

    // Check for duplicate Transaction ID in localStorage
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    if (storedTransactions.includes(formData.transactionId)) {
      errors.push("❌ This Transaction ID has already been submitted.");
    }

    // If there are errors, show all at once
    if (errors.length > 0) {
      setMessage(errors.join("\n")); // multiple lines
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    // ✅ Send data to Google Form
    const formDataToSend = new FormData();
    formDataToSend.append(FORM_FIELDS.name, formData.name);
    formDataToSend.append(FORM_FIELDS.phone, formData.phone);
    formDataToSend.append(FORM_FIELDS.amount, formData.amount);
    formDataToSend.append(FORM_FIELDS.transactionId, formData.transactionId);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      // Save transaction ID to localStorage to prevent duplicates
      storedTransactions.push(formData.transactionId);
      localStorage.setItem("transactions", JSON.stringify(storedTransactions));

      setMessage("✅ Message sent successfully!");
      setFormData({ name: "", phone: "", amount: "", transactionId: "" });

      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("❌ Failed to send. Please try again.");
      setTimeout(() => setMessage(""), 3000);
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Success or error message */}
      {message && (
        <div
          style={{
            color: message.startsWith("✅") ? "#00ff9d" : "#ff6b6b",
            marginTop: "20px",
            whiteSpace: "pre-line",
            fontWeight: "bold",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Contribute;
