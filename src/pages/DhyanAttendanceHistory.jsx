import React from "react";
import dhyanImg from "../assets/guruji.webp";
import "./DhyanAttendanceHistory.css";

const DhyanAttendanceHistory = () => {

  return (
    <div className="dhyan-history-page">

      <div className="dhyan-top-section">

        <div className="dhyan-image">
          <img src={dhyanImg} alt="Dhyan Meditation" />
        </div>

        <div className="dhyan-about">

          <h2>🧘 Dhyan Program</h2>

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

          <a
            href="https://dhyan-attandance.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="check-btn"
          >
            Check
          </a>

        </div>

      </div>

    </div>
  );
};

export default DhyanAttendanceHistory;