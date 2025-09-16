import React from "react";
import "./ImportantDates.css";
import satsangImg from "../assets/photo7.jpg"; // ✅ Replace with your image

const ImportantDates = () => {
  return (
    <div className="important-dates-container">
      {/* Left Side Image */}
      <div className="image-section">
        <img src={satsangImg} alt="Important Event" />
      </div>

      {/* Right Side Content */}
      <div className="content-section">
        <h2>📅 Important Dates</h2>
        <div className="dates-box">
          <p>🔔 <strong>17th September 2025</strong> - Special Satsang at 7 PM</p>
          <p>📅 <strong>24th September 2025</strong> - Guru Bhakti Program</p>
          <p>📅 <strong>2nd October 2025</strong> - Meditation Camp</p>
          <p>📅 <strong>15th October 2025</strong> - Spiritual Discourse</p>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
