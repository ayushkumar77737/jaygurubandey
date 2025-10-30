import React from "react";
import "./IntlCenters.css";
import indiaMap from "../assets/indiamap.jpg"; // use India map image

const InternationalCenters = () => {
  return (
    <div className="centers-page">
      {/* ===== 1. INTRO SECTION ===== */}
      <section className="centers-intro">
        <h1>Spreading Love and Light Across India</h1>
        <p>
          Guruji’s divine teachings have touched hearts across every corner of
          India. Explore our centers and the growing community of devotees
          spreading the message of devotion, peace, and spiritual awakening.
        </p>
      </section>

      {/* ===== 2. INTERACTIVE INDIA MAP SECTION ===== */}
      <section className="centers-map-section">
        <h2>Our Presence Across India</h2>
        <div className="map-container">
          <img src={indiaMap} alt="India Map" className="world-map" />

          {/* Example Pins (adjust positions) */}
          <div className="map-pin" style={{ top: "35%", left: "48%" }}>
            <span>Delhi</span>
          </div>
          <div className="map-pin" style={{ top: "55%", left: "45%" }}>
            <span>Hyderabad</span>
          </div>
          <div className="map-pin" style={{ top: "40%", left: "50%" }}>
            <span>Lucknow</span>
          </div>
          <div className="map-pin" style={{ top: "70%", left: "52%" }}>
            <span>Chennai</span>
          </div>
          <div className="map-pin" style={{ top: "60%", left: "35%" }}>
            <span>Mumbai</span>
          </div>
          <div className="map-pin" style={{ top: "30%", left: "60%" }}>
            <span>Kolkata</span>
          </div>
        </div>
      </section>

      {/* ===== 3. REACH STATISTICS ===== */}
      <section className="centers-stats">
        <div className="stat-card">
          <h3>20+</h3>
          <p>States Reached</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Active Centers</p>
        </div>
        <div className="stat-card">
          <h3>1 Lakh+</h3>
          <p>Devotees Connected</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Weekly Satsangs</p>
        </div>
      </section>
    </div>
  );
};

export default InternationalCenters;
