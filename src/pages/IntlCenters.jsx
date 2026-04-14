import React from "react";
import { useTranslation } from "react-i18next";
import "./IntlCenters.css";
import indiaMap from "../assets/indiamap.jpg";

const InternationalCenters = () => {
  const { t } = useTranslation();

  const pins = t("intlCenters.pins", { returnObjects: true });
  const stats = t("intlCenters.stats", { returnObjects: true });

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
          {t("intlCenters.badge")}
        </div>
        <h1 className="ic__intro-title">
          {t("intlCenters.intro_title")}
          <span className="ic__intro-title-sub">
            {t("intlCenters.intro_title_sub")}
          </span>
        </h1>
        <p className="ic__intro-text">{t("intlCenters.intro_text")}</p>
        <div className="ic__intro-divider" />
      </section>

      {/* ===== 2. MAP SECTION ===== */}
      <section className="ic__map-section">
        <div className="ic__map-header">
          <h2 className="ic__map-title">{t("intlCenters.map_title")}</h2>
          <p className="ic__map-subtitle">{t("intlCenters.map_subtitle")}</p>
        </div>

        <div className="ic__map-wrapper">
          <div className="ic__map-glow" />
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
        <h2 className="ic__stats-title">{t("intlCenters.stats_title")}</h2>
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