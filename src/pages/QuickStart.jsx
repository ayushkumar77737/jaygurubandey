import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuickStart.css";

const QuickStart = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: 1,
      label: "Daily Satsang",
      emoji: "🕉️",
      description:
        "Know satsang timings, format, and how to join the daily divine sessions.",
      path: "/satsang",
      tag: "Most visited",
    },
    {
      id: 2,
      label: "Explore Ashram",
      emoji: "🏞️",
      description:
        "See all zones of the Ashram, main temple, and important places to visit first.",
      path: "/explore-ashram",
      tag: "On-campus help",
    },
    {
      id: 3,
      label: "Event Calendar",
      emoji: "🗓️",
      description:
        "Check all upcoming programs, poornimas, special events and seva opportunities.",
      path: "/important-dates",
      tag: "Plan your visit",
    },
    {
      id: 4,
      label: "Ask for Accommodation",
      emoji: "🏨",
      description:
        "Request room help for festival days, poornima, long-distance travel and stays.",
      path: "/accommodation",
      tag: "Must check",
    },
    {
      id: 5,
      label: "Contact & Stay Connected",
      emoji: "📞",
      description:
        "Get phone/email support and follow official Facebook, Instagram, YouTube & WhatsApp.",
      path: "/contact",
      tag: "Support & updates",
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
