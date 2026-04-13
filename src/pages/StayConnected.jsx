import React, { useState } from "react";
import "./StayConnected.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/share/g/1AZvFisxcs/",
    icon: <FaFacebook />,
    color: "#1877F2",
    bg: "rgba(24, 119, 242, 0.12)",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy",
    icon: <FaInstagram />,
    color: "#E1306C",
    bg: "rgba(225, 48, 108, 0.12)",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@jaigurubande?feature=shared",
    icon: <FaYoutube />,
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.12)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Group",
    url: "https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD",
    icon: <FaWhatsapp />,
    color: "#25D366",
    bg: "rgba(37, 211, 102, 0.12)",
  },
  {
    id: "twitter",
    label: "Twitter (X)",
    url: "https://x.com/jaigurubande",
    icon: <FaXTwitter />,
    color: "#e8e8e8",
    bg: "rgba(232, 232, 232, 0.1)",
  },
  {
    id: "telegram",
    label: "Telegram Channel",
    url: "https://t.me/+5APCSKB6YC85MjRl",
    icon: <FaTelegram />,
    color: "#29A9EB",
    bg: "rgba(41, 169, 235, 0.12)",
  },
  {
    id: "email",
    label: "Email Us",
    url: "mailto:support@jaigurubande.in",
    icon: <FaEnvelope />,
    color: "#F59E0B",
    bg: "rgba(245, 158, 11, 0.12)",
  },
];

const StayConnected = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleOpenPopup = () => {
    setSelectedLink(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedLink(null);
  };

  const handleOptionClick = (id) => setSelectedLink(id);

  const openSelectedLink = () => {
    if (!selectedLink) return;
    const link = SOCIAL_LINKS.find((l) => l.id === selectedLink);
    if (link) window.open(link.url, "_blank", "noopener,noreferrer");
    setShowPopup(false);
    setSelectedLink(null);
  };

  return (
    <div className="stcon__page">

      {/* Background glow orbs */}
      <div className="stcon__glow stcon__glow--1" />
      <div className="stcon__glow stcon__glow--2" />
      <div className="stcon__glow stcon__glow--3" />

      <div className="stcon__inner">

        {/* ===== HERO ===== */}
        <div className="stcon__hero">
          <div className="stcon__badge">
            <span className="stcon__badge-dot" />
            Ashram Social Media
            <span className="stcon__badge-dot" />
          </div>
          <h1 className="stcon__title">Stay Connected with Guruji Online</h1>
          <p className="stcon__subtitle">
            Choose which social platform you want to open and follow Guruji's
            divine teachings across all channels.
          </p>
        </div>

        {/* ===== SOCIAL CARD ===== */}
        <div className="stcon__card">

          {/* Header strip */}
          <div className="stcon__card-header">
            <span className="stcon__card-header-dot stcon__card-header-dot--r" />
            <span className="stcon__card-header-dot stcon__card-header-dot--y" />
            <span className="stcon__card-header-dot stcon__card-header-dot--g" />
            <span className="stcon__card-header-label">Official Links</span>
          </div>

          <ul className="stcon__list">
            {SOCIAL_LINKS.map((link, i) => (
              <li
                key={link.id}
                className="stcon__item"
                style={{ animationDelay: `${0.3 + i * 0.07}s` }}
              >
                <div className="stcon__item-left">
                  <span
                    className="stcon__item-icon"
                    style={{ color: link.color, background: link.bg }}
                  >
                    {link.icon}
                  </span>
                  <span className="stcon__item-label">{link.label}</span>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="stcon__open-btn"
                  style={{ "--btn-color": link.color }}
                >
                  Open ↗
                </a>
              </li>
            ))}
          </ul>

          <button className="stcon__choose-btn" onClick={handleOpenPopup}>
            <span className="stcon__choose-btn-glow" />
            <span className="stcon__choose-btn-text">⚡ Choose Social Platform</span>
          </button>
        </div>

      </div>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="stcon__overlay" onClick={handleClosePopup}>
          <div className="stcon__popup" onClick={(e) => e.stopPropagation()}>

            <div className="stcon__popup-header">
              <h2 className="stcon__popup-title">Select a Platform</h2>
              <button className="stcon__popup-close" onClick={handleClosePopup}>✕</button>
            </div>

            <div className="stcon__popup-options">
              {SOCIAL_LINKS.map((link) => (
                <div
                  key={link.id}
                  className={`stcon__popup-option ${selectedLink === link.id ? "stcon__popup-option--active" : ""}`}
                  onClick={() => handleOptionClick(link.id)}
                  style={{
                    "--opt-color": link.color,
                    "--opt-bg": link.bg,
                  }}
                >
                  <span
                    className="stcon__popup-opt-icon"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </span>
                  <span className="stcon__popup-opt-label">{link.label}</span>
                  {selectedLink === link.id && (
                    <span className="stcon__popup-opt-check">✓</span>
                  )}
                </div>
              ))}
            </div>

            <div className="stcon__popup-actions">
              <button className="stcon__popup-cancel" onClick={handleClosePopup}>
                Cancel
              </button>
              <button
                className="stcon__popup-go"
                onClick={openSelectedLink}
                disabled={!selectedLink}
              >
                Open Selected ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StayConnected;