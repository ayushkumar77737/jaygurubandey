import React, { useState } from "react";
import "./StayConnected.css";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/share/g/1AZvFisxcs/",
    icon: "📘",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy",
    icon: "📸",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@jaigurubande?feature=shared",
    icon: "▶️",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Group",
    url: "https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD",
    icon: "💬",
  },
];

const StayConnected = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null); // 🔁 single selection

  const handleOpenPopup = () => {
    // every time popup opens, clear previous selection
    setSelectedLink(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedLink(null); // reset selection on close
  };

  const handleOptionClick = (id) => {
    setSelectedLink(id); // only one can be active
  };

  const openSelectedLink = () => {
    if (!selectedLink) return;

    const link = SOCIAL_LINKS.find((l) => l.id === selectedLink);
    if (link) {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }

    // close and reset after opening
    setShowPopup(false);
    setSelectedLink(null);
  };

  return (
    <div className="stay-page">
      <div className="stay-inner">
        <p className="stay-badge">⿨ Ashram Social Media Links 🌐</p>

        <h1 className="stay-title">Stay Connected with Guruji Online</h1>
        <p className="stay-subtitle">
          Choose which social platform you want to open.
        </p>

        <div className="stay-card">
          <ul className="social-list">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id} className="social-item">
                <div className="social-left">
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-label">{link.label}</span>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-view-btn"
                >
                  Open
                </a>
              </li>
            ))}
          </ul>

          {/* POPUP TRIGGER BUTTON */}
          <button
            className="open-all-btn"
            onClick={handleOpenPopup}
          >
            Choose Social Platform
          </button>
        </div>
      </div>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Select Social Link</h2>

            <div className="popup-options">
              {SOCIAL_LINKS.map((link) => (
                <div
                  key={link.id}
                  className={`popup-option ${
                    selectedLink === link.id ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(link.id)}
                >
                  {link.icon} {link.label}
                </div>
              ))}
            </div>

            <div className="popup-actions">
              <button
                className="popup-btn cancel"
                onClick={handleClosePopup}
              >
                Cancel
              </button>

              <button
                className="popup-btn open"
                onClick={openSelectedLink}
                disabled={!selectedLink}
              >
                Open Selected
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StayConnected;
