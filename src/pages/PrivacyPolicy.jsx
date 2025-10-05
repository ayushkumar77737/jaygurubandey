import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1 className="fade-in">Privacy Policy</h1>
        <p className="fade-in delay-1">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information.
        </p>

        <div className="policy-section fade-in delay-2">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email, and phone
            number when you interact with our services.
          </p>
        </div>

        <div className="policy-section fade-in delay-3">
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to improve our services, respond to inquiries,
            and enhance user experience.
          </p>
        </div>

        <div className="policy-section fade-in delay-4">
          <h2>Data Protection</h2>
          <p>
            We implement security measures to safeguard your information. However,
            no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="policy-section fade-in delay-5">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            at <span className="highlight">jaigurubandey15@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
