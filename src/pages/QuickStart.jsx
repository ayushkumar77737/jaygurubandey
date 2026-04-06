import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuickStart.css";

const quickLinks = [
  {
    id: 1,
    label: "Home",
    emoji: "🏠",
    description:
      "Enter the divine space of Guruji's blessings and ashram updates.",
    path: "/",
    tag: "Most Visited",
  },
  {
    id: 2,
    label: "About Guruji",
    emoji: "ℹ️",
    description:
      "Guruji's teachings illuminate the path of peace, devotion, and purposeful living.",
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
    tag: "Most Visited",
  },
  {
    id: 4,
    label: "Important Dates",
    emoji: "📅",
    description:
      "Stay updated with all upcoming and important Ashram schedules.",
    path: "/important-dates",
    tag: "Key Dates",
  },
  {
    id: 5,
    label: "Contact Us",
    emoji: "📞",
    description:
      "We're here to help you with all inquiries and support needs.",
    path: "/contact",
    tag: "Support",
  },
];

const QuickStart = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="qkst__page">

      {/* Background orbs */}
      <div className="qkst__orb qkst__orb--1" />
      <div className="qkst__orb qkst__orb--2" />
      <div className="qkst__orb qkst__orb--3" />

      <div className="qkst__inner">

        {/* ===== Hero ===== */}
        <div className="qkst__hero">
          <div className="qkst__badge">Quick Navigation</div>
          <h1 className="qkst__title">Top 5 Important Pages</h1>
          <p className="qkst__subtitle">
            New to this website or visiting the Ashram soon? Start with these
            five essential sections to get all important information in just a
            few clicks.
          </p>
          <div className="qkst__divider">
            <span className="qkst__div-line" />
            <span className="qkst__div-gem">✦</span>
            <span className="qkst__div-line" />
          </div>
        </div>

        {/* ===== Grid ===== */}
        <div className="qkst__grid">
          {quickLinks.map((item, i) => (
            <button
              key={item.id}
              className="qkst__card"
              onClick={() => handleNavigate(item.path)}
              style={{ animationDelay: `${0.05 + i * 0.09}s` }}
            >
              {/* Hover glow layer */}
              <span className="qkst__card-glow" />

              <div className="qkst__card-top">
                <span className="qkst__emoji">{item.emoji}</span>
                <span className="qkst__tag">{item.tag}</span>
              </div>

              <h2 className="qkst__card-title">{item.label}</h2>
              <p className="qkst__card-text">{item.description}</p>

              <div className="qkst__card-footer">
                <span className="qkst__cta">Open page</span>
                <span className="qkst__arrow">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* ===== Footer note ===== */}
        <p className="qkst__note">
          🌸 Looking for something else? Use the main menu at the top to
          explore all other pages of the ashram.
        </p>

      </div>
    </div>
  );
};

export default QuickStart;