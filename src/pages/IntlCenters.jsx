import React from "react";
import "./IntlCenters.css";
import indiaMap from "../assets/indiamap.jpg";

/*
  Pin coordinates calibrated against the "India States and Union Territories" map.
  Reference: top-left of image = (0%,0%), bottom-right = (100%,100%).

  City dot positions read directly from the map:
  ┌────────────────┬────────┬────────┐
  │ City           │  top   │  left  │
  ├────────────────┼────────┼────────┤
  │ New Delhi      │  33%   │  32%   │
  │ Lucknow        │  40%   │  43%   │
  │ Kolkata        │  52%   │  63%   │
  │ Mumbai         │  63%   │  17%   │
  │ Hyderabad      │  68%   │  35%   │
  │ Chennai        │  80%   │  43%   │
  └────────────────┴────────┴────────┘
*/
const pins = [
  { label: "New Delhi", top: "33%", left: "32%" },
  { label: "Lucknow", top: "40%", left: "43%" },
  { label: "Kolkata", top: "52%", left: "63%" },
  { label: "Mumbai", top: "63%", left: "17%" },
  { label: "Hyderabad", top: "68%", left: "35%" },
  { label: "Chennai", top: "80%", left: "43%" },
];

const stats = [
  { value: "20+", label: "States Reached" },
  { value: "50+", label: "Active Centers" },
  { value: "1 Lakh+", label: "Devotees Connected" },
  { value: "100+", label: "Weekly Satsangs" },
];

const InternationalCenters = () => {
  return (
    <div className="ic__root">
      {/* Decorative orbs */}
      <div className="ic__orb ic__orb--1" />
      <div className="ic__orb ic__orb--2" />
      <div className="ic__orb ic__orb--3" />

      {/* ===== 1. INTRO SECTION ===== */}
      <section className="ic__intro">
        <div className="ic__intro-badge">
          <span className="ic__badge-dot" />
          Spiritual Outreach
        </div>
        <h1 className="ic__intro-title">
          Spreading Love &amp; Light
          <span className="ic__intro-title-sub">Across India</span>
        </h1>
        <p className="ic__intro-text">
          Guruji's divine teachings have touched hearts across every corner of
          India. Explore our centers and the growing community of devotees
          spreading the message of devotion, peace, and spiritual awakening.
        </p>
        <div className="ic__intro-divider" />
      </section>

      {/* ===== 2. MAP SECTION ===== */}
      <section className="ic__map-section">
        <div className="ic__map-header">
          <h2 className="ic__map-title">Our Presence Across India</h2>
          <p className="ic__map-subtitle">Hover any pin to explore a center</p>
        </div>

        <div className="ic__map-wrapper">
          <div className="ic__map-glow" />

          {/*
            ic__map-frame is position:relative + display:inline-block
            so it hugs the image exactly — all pin % coords are relative
            to the rendered image dimensions.
          */}
          <div className="ic__map-frame">
            <img src={indiaMap} alt="India Map" className="ic__map-img" />

            {pins.map((pin, i) => (
              <div
                key={pin.label}
                className="ic__pin"
                style={{
                  top: pin.top,
                  left: pin.left,
                  animationDelay: `${0.6 + i * 0.18}s`,
                }}
              >
                <div className="ic__pin-dot" />
                <span className="ic__pin-label">{pin.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. STATS SECTION ===== */}
      <section className="ic__stats">
        <h2 className="ic__stats-title">Our Growing Community</h2>
        <div className="ic__stats-grid">
          {stats.map((s, i) => (
            <div
              className="ic__stat-card"
              key={s.label}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="ic__stat-glow" />
              <span className="ic__stat-value">{s.value}</span>
              <span className="ic__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternationalCenters;