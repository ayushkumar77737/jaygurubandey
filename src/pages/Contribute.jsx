import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contribute.css";
import qrImg from "../assets/scanner.jpg";

/* ===============================
   GOOGLE APPS SCRIPT URL
================================ */
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbznlQRq52r71ftv6lgYAEL5FQ_4PmG60SPAjlzq9-wRVGI8pkDLd11seck6SfYmbmDoLw/exec";

const Contribute = () => {
  const navigate = useNavigate();

  /* ===============================
     STATE
  ================================ */
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    transactionId: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* ===============================
     SHOW MESSAGE
  ================================ */
  const showMessage = (text, time = 4000) => {
    setMessage(text);
    setTimeout(() => setMessage(""), time);
  };

  /* ===============================
     INPUT HANDLER
  ================================ */
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

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  /* ===============================
     SUBMIT HANDLER
  ================================ */
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

    /* ❌ VALIDATION ERROR */
    if (errors.length > 0) {
      showMessage(errors.join("\n"));
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

      /* ❌ DUPLICATE TRANSACTION */
      if (text === "Duplicate transaction") {
        showMessage("❌ This Transaction ID has already been submitted.");
        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });
        return;
      }

      /* ✅ SUCCESS */
      if (text === "Success") {
        showMessage("✅ Contribution submitted successfully!", 3000);

        setFormData({
          name: "",
          phone: "",
          amount: "",
          transactionId: "",
        });

        /* 🔁 REDIRECT AFTER 3 SECONDS */
        setTimeout(() => {
          navigate("/payment-verification");
        }, 3000);

        return;
      }

      /* ❌ UNKNOWN RESPONSE */
      showMessage("❌ Something went wrong. Please try again.");
    } catch {
      /* ❌ SERVER ERROR */
      showMessage("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        phone: "",
        amount: "",
        transactionId: "",
      });
    }
  };

  /* ===============================
     JSX
  ================================ */
  return (
    <div className="contribute-container">
      <h1 className="contribute-title">Contribute</h1>

      <div className="contribute-card">
        <img
          src={qrImg}
          alt="Scanner / QR"
          className="contribute-image"
        />

        <form
          className="contribute-form"
          onSubmit={handleSubmit}
        >
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

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>

      {message && (
        <div
          style={{
            color: message.startsWith("✅")
              ? "#00ff9d"
              : "#ff6b6b",
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
