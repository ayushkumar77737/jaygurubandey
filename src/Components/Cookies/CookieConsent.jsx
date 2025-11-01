import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    if (choice === "accept") {
      localStorage.setItem("cookieConsent", "accepted");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: true,
          marketing: true,
        })
      );
    } else if (choice === "reject") {
      localStorage.setItem("cookieConsent", "rejected");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: false,
          marketing: false,
        })
      );
    }
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "customised");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
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
      {/* ===== Main Cookie Popup ===== */}
      <div className="cookie-popup">
        <div className="cookie-content">
          <h3>We value your privacy</h3>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalised ads or content, and analyse our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
          <div className="cookie-buttons">
            <button className="customise-btn" onClick={() => setShowModal(true)}>
              Customise
            </button>
            <button className="reject-btn" onClick={() => handleConsent("reject")}>
              Reject All
            </button>
            <button className="accept-btn" onClick={() => handleConsent("accept")}>
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
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  disabled
                  readOnly
                />
                <span>Functional cookies (required)</span>
              </label>
              <p className="desc">
                These cookies are essential for the website to function properly.
              </p>
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
              <p className="desc">
                Help us understand how you use our site so we can improve it.
              </p>
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
              <p className="desc">
                Used to deliver personalised advertisements and content.
              </p>
            </div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
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
