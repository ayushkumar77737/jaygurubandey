import React from "react";
import "./IntlCenters.css";
import { useNavigate } from "react-router-dom";

const IntlCenters = () => {
  const navigate = useNavigate();

  return (
    <div className="intlcenters-page">
      <h1 className="intlcenters-title">🌍 International Centers / Followers Map</h1>

      <p className="intlcenters-description">
        Explore our global community of centers and followers dedicated to spreading peace,
        love, and devotion around the world.
      </p>

      <button
        className="intlcenters-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default IntlCenters;
