import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuickStart.css";

const QuickStart = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: 1,
      label: "Home",
      emoji: "🏠",
      description:
        "Enter the divine space of Guruji’s blessings and ashram updates.",
      path: "/",
      tag: "Most visited",
    },
    {
      id: 2,
      label: "About Guruji",
      emoji: "ℹ️",
      description:
        "Guruji’s teachings illuminate the path of peace, devotion, and purposeful living.",
      path: "/about",
      tag: "Divine Guidance",
    },
    {
      id: 3,
      label: "Daily Satsang",
      emoji: "🔅",
      description:
        "Daily satsang offering guidance, peace, and spiritual connection with Guruji.",
      path: "/dailysatsang",
      tag: "Most visited",
    },
    {
      id: 4,
      label: "Important Dates",
      emoji: "📅",
      description:
        "Stay updated with all upcoming and important Ashram schedules.",
      path: "/important-dates",
      tag: "Key dates",
    },
    {
      id: 5,
      label: "Contact Us",
      emoji: "📞",
      description:
        "We’re here to help you with all inquiries and support needs.",
      path: "/contact",
      tag: "Support",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="quick-page">
      <div className="quick-inner">
        {/* Title */}
        <h1 className="quick-title">Top 5 Important Pages</h1>

        {/* Subtitle */}
        <p className="quick-subtitle">
          New to this website or visiting the Ashram soon?  
          Start with these five essential sections to get all important
          information in just a few clicks.
        </p>

        {/* Grid of cards */}
        <div className="quick-grid">
          {quickLinks.map((item) => (
            <button
              key={item.id}
              className="quick-card"
              onClick={() => handleNavigate(item.path)}
            >
              <div className="quick-card-header">
                <span className="quick-emoji">{item.emoji}</span>
                <span className="quick-tag">{item.tag}</span>
              </div>

              <h2 className="quick-card-title">{item.label}</h2>
              <p className="quick-card-text">{item.description}</p>

              <div className="quick-card-footer">
                <span className="quick-card-cta">Open page</span>
                <span className="quick-card-arrow">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Small note */}
        <p className="quick-note">
          Looking for something else? You can always use the main menu at the
          top to explore all other pages.
        </p>
      </div>
    </div>
  );
};

export default QuickStart;
