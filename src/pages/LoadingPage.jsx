import React from "react";
import "./LoadingPage.css";
import circle from "../assets/circle.png"; // your image

const LoadingPage = () => {
  return (
    <div className="loading-page">
      {/* Particle overlay */}
      <div className="particles"></div>

      {/* Glowing Orb around the image */}
      <div className="orb-wrapper">
        <img src={circle} alt="Loading..." className="loading-circle" />
      </div>

      {/* Animated Text */}
      <div className="loading-text">
        <h1 className="main-text">🌸 Surrender to Guruji’s Grace 🌸</h1>
        <p className="sub-text">
          In surrender, there is peace; in peace, there is the Divine.
        </p>
        <div className="dots">...</div>
      </div>
    </div>
  );
};

export default LoadingPage;
