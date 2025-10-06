import React from "react";
import "./LoadingPage.css";
import circle from "../assets/circle.png";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      {/* Glowing Rings */}
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>

      {/* Center Circle Image */}
      <img src={circle} alt="Loading..." className="loading-circle" />
    </div>
  );
};

export default LoadingPage;
