import React from "react";
import dhyanImg from "../assets/guruji.webp";
import "./DhyanAttendanceHistory.css";

const DhyanAttendanceHistory = () => {

  return (
    <div className="dah-page">

      {/* ===== Page Eyebrow Header ===== */}
      <div className="dah-page-eyebrow">
        <span className="dah-eyebrow-tag">🧘 Spiritual Practice</span>
        <h1>
          The Art of <span>Dhyan</span>
        </h1>
        <div className="dah-header-divider">
          <span className="dah-header-divider-icon">✦</span>
        </div>
      </div>

      {/* ===== Main Content Row ===== */}
      <div className="dah-content-row">

        {/* Left — Image */}
        <div className="dah-img-col">
          <div className="dah-img-frame">
            <img src={dhyanImg} alt="Dhyan Meditation" />
            <span className="dah-img-ornament">✦</span>
          </div>
        </div>

        {/* Right — Text */}
        <div className="dah-text-col">
          <h2>🧘 Dhyan Program</h2>
          <span className="dah-title-accent" />

          <p>
            Dhyan is a spiritual meditation practice that helps calm the mind and connect with inner peace.
            Through regular meditation sessions, participants learn to control their thoughts, reduce stress,
            and develop a deeper awareness of themselves.
          </p>

          <p>
            The Dhyan program encourages individuals to build a daily meditation habit that promotes
            mental clarity, emotional balance, and spiritual growth. By practicing Dhyan regularly,
            participants experience improved concentration, inner stability, and a more positive outlook on life.
          </p>

          <p>
            Our Dhyan sessions are designed to guide participants step-by-step through breathing techniques,
            mindfulness practices, and silent meditation. These practices help cultivate discipline,
            self-control, and a deeper connection with the inner self.
          </p>

          <p>
            The goal of the Dhyan program is not only meditation but also personal transformation.
            With consistent practice, individuals can achieve peace of mind, stronger focus,
            and a balanced lifestyle that supports both spiritual and personal development.
          </p>

          {/* ✅ onTouchEnd ensures single-tap open on all mobile browsers */}
          <a
            href="https://dhyan.jaigurubande.in"
            target="_blank"
            rel="noopener noreferrer"
            className="dah-check-btn"
            onTouchEnd={(e) => {
              e.preventDefault();
              window.open("https://dhyan.jaigurubande.in", "_blank", "noopener,noreferrer");
            }}
          >
            Explore Dhyan Portal
            <span className="dah-btn-arrow">→</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default DhyanAttendanceHistory;