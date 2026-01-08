import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

/* ===== Cookie Helpers ===== */
const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  /* ===== Check cookie on load ===== */
  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  /* ===== Accept / Reject ===== */
  const handleConsent = (choice) => {
    if (choice === "accept") {
      setCookie("cookieConsent", "accepted", 365);
      setCookie(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: true,
          marketing: true,
        }),
        365
      );
    }

    if (choice === "reject") {
      setCookie("cookieConsent", "rejected", 365);
      setCookie(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: false,
          marketing: false,
        }),
        365
      );
    }

    setVisible(false);
  };

  /* ===== Save Custom Preferences ===== */
  const handleSavePreferences = () => {
    setCookie("cookieConsent", "customised", 365);
    setCookie("cookiePreferences", JSON.stringify(preferences), 365);
    setShowModal(false);
    setVisible(false);
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!visible) return null;

  return (
    <>
      {/* ===== Cookie Popup ===== */}
      <div className="cookie-popup">
        <div className="cookie-content">
          <h3>We value your privacy</h3>
          <p>
            We use cookies to enhance your browsing experience, analyse traffic,
            and personalise content. You can manage your preferences at any time.
          </p>
          <div className="cookie-buttons">
            <button className="customise-btn" onClick={() => setShowModal(true)}>
              Customise
            </button>
            <button
              className="reject-btn"
              onClick={() => handleConsent("reject")}
            >
              Reject All
            </button>
            <button
              className="accept-btn"
              onClick={() => handleConsent("accept")}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* ===== Customise Modal ===== */}
      {showModal && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <h3>Customise your cookie preferences</h3>
            <p>Select which types of cookies you want to allow:</p>

            <div className="cookie-option">
              <label>
                <input type="checkbox" checked disabled readOnly />
                <span>Functional cookies (required)</span>
              </label>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference("analytics")}
                />
                <span>Analytics cookies</span>
              </label>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference("marketing")}
                />
                <span>Marketing cookies</span>
              </label>
            </div>

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="save-btn" onClick={handleSavePreferences}>
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
