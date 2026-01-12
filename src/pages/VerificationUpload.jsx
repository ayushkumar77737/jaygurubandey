import React, { useState } from "react";
import "./VerificationUpload.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydswF4z_UD_NwvTUlof9OFVQnqOBJxW6ecdvDIlRYeDSWIVfbCcIDT9xX33lMZbA/exec"; // 🔴 replace

const VerificationUpload = () => {
  const [transactionId, setTransactionId] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload a screenshot.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("transactionId", transactionId);
    formData.append("file", file);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (result === "SUCCESS") {
        setSubmitted(true);
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="verification-page">
      <div className="verification-card">
        <h1 className="verification-title">
          Upload Payment Screenshot for Verification
        </h1>

        <p className="verification-note">
          Please upload the screenshot of your completed payment.
          <br />
          This is required only for verification purposes.
          <br />
          <strong>Confirmation will be sent after verification.</strong>
        </p>

        {!submitted ? (
          <form className="verification-form" onSubmit={handleSubmit}>
            {/* Transaction ID */}
            <div className="form-group">
              <label>
                Transaction ID / UTR Number <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Transaction ID / UTR"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
              />
            </div>

            {/* Upload Screenshot */}
            <div className="form-group">
              <label>
                Upload Payment Screenshot <span>*</span>
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />

              <ul className="upload-rules">
                <li>Accepted formats: JPG, PNG</li>
                <li>Maximum size: 5 MB</li>
                <li>Screenshot must clearly show:</li>
                <li>• Payment status</li>
                <li>• Amount</li>
                <li>• UTR / Transaction ID</li>
                <li>• Receiver name</li>
              </ul>
            </div>

            {/* Confirmation Checkbox */}
            <div className="form-checkbox">
              <input type="checkbox" required />
              <label>
                I confirm that the uploaded screenshot is genuine and unedited.
              </label>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Uploading..." : "Submit for Verification"}
            </button>
          </form>
        ) : (
          <div className="success-box">
            <h2>✅ Screenshot uploaded successfully.</h2>
            <p>
              Your payment will be verified shortly.
              <br />
              Confirmation may take up to <strong>24 hours</strong>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationUpload;
