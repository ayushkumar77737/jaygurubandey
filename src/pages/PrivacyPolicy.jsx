import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="pp__root">
      {/* Decorative floating orbs */}
      <div className="pp__orb pp__orb--1" />
      <div className="pp__orb pp__orb--2" />
      <div className="pp__orb pp__orb--3" />

      <div className="pp__container">
        {/* Badge */}
        <div className="pp__badge pp__fade-in">
          <span className="pp__badge-dot" />
          Last updated: April 2025
        </div>

        <h1 className="pp__title pp__fade-in pp__delay-1">
          Privacy <span className="pp__title-accent">Policy</span>
        </h1>

        <p className="pp__lead pp__fade-in pp__delay-2">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information.
        </p>

        <div className="pp__divider pp__fade-in pp__delay-2" />

        <div className="pp__section pp__fade-in pp__delay-3">
          <div className="pp__section-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="pp__section-body">
            <h2 className="pp__section-title">Information We Collect</h2>
            <p className="pp__section-text">
              We may collect personal details such as your name, email, and phone
              number when you interact with our services.
            </p>
          </div>
        </div>

        <div className="pp__section pp__fade-in pp__delay-4">
          <div className="pp__section-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div className="pp__section-body">
            <h2 className="pp__section-title">How We Use Your Information</h2>
            <p className="pp__section-text">
              We use your information to improve our services, respond to inquiries,
              and enhance user experience.
            </p>
          </div>
        </div>

        <div className="pp__section pp__fade-in pp__delay-5">
          <div className="pp__section-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="pp__section-body">
            <h2 className="pp__section-title">Data Protection</h2>
            <p className="pp__section-text">
              We implement security measures to safeguard your information. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </div>
        </div>

        <div className="pp__contact pp__fade-in pp__delay-6">
          <div className="pp__contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div>
            <h2 className="pp__section-title">Contact Us</h2>
            <p className="pp__section-text">
              If you have any questions about this Privacy Policy, please reach out —
              we're here to help.
            </p>
            <a
              href="mailto:support@jaigurubande.in"
              className="pp__email-link"
            >
              support@jaigurubande.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;