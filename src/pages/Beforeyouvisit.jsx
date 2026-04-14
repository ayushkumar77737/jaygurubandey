import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Beforeyouvisit.css";

const AshramRules = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = t("ashramRules.sections", { returnObjects: true });
  const dos = t("ashramRules.dos", { returnObjects: true });
  const donts = t("ashramRules.donts", { returnObjects: true });

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ashrul__page">

      {/* Background orbs */}
      <div className="ashrul__orb ashrul__orb--1" />
      <div className="ashrul__orb ashrul__orb--2" />
      <div className="ashrul__orb ashrul__orb--3" />

      {/* ===== HERO ===== */}
      <section className="ashrul__hero">
        <div className="ashrul__hero-badge">{t("ashramRules.hero_badge")}</div>
        <h1 className="ashrul__hero-title">
          {t("ashramRules.hero_title")}{" "}
          <span className="ashrul__hero-scroll">
            {t("ashramRules.hero_scroll_icon")}
          </span>{" "}
          {t("ashramRules.hero_guidelines")}
        </h1>
        <p className="ashrul__hero-sub">{t("ashramRules.hero_sub")}</p>
        <div className="ashrul__hero-divider">
          <span className="ashrul__div-line" />
          <span className="ashrul__div-gem">✦</span>
          <span className="ashrul__div-line" />
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="ashrul__quick">
        <p className="ashrul__quick-label">{t("ashramRules.quick_label")}</p>
        <div className="ashrul__quick-grid">
          {sections.slice(0, 6).map((section) => (
            <button
              key={section.id}
              className="ashrul__chip"
              onClick={() => handleScroll(section.id)}
            >
              <span className="ashrul__chip-icon">{section.icon}</span>
              <span className="ashrul__chip-text">{section.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ===== MAIN LAYOUT ===== */}
      <section className="ashrul__layout">

        {/* Left sticky card */}
        <aside className="ashrul__summary">

          <div className="ashrul__summary-block ashrul__summary-dos">
            <h2 className="ashrul__summary-heading">
              <span className="ashrul__summary-icon">✅</span>{" "}
              {t("ashramRules.dos_heading")}
            </h2>
            <ul className="ashrul__summary-list">
              {dos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ashrul__summary-divider" />

          <div className="ashrul__summary-block ashrul__summary-donts">
            <h2 className="ashrul__summary-heading">
              <span className="ashrul__summary-icon">🚫</span>{" "}
              {t("ashramRules.donts_heading")}
            </h2>
            <ul className="ashrul__summary-list ashrul__summary-list--dont">
              {donts.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ashrul__summary-note">
            {t("ashramRules.summary_note")}
          </div>
        </aside>

        {/* Right sections */}
        <div className="ashrul__sections">
          {sections.map((section, i) => (
            <article
              key={section.id}
              id={section.id}
              className="ashrul__card"
              style={{ animationDelay: `${0.08 + i * 0.07}s` }}
            >
              <div className="ashrul__card-header">
                <span className="ashrul__card-icon">{section.icon}</span>
                <h3 className="ashrul__card-title">{section.title}</h3>
              </div>
              <ul className="ashrul__rules-list">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="ashrul__cta">
        <div className="ashrul__cta-inner">
          <div className="ashrul__cta-emoji">{t("ashramRules.cta_emoji")}</div>
          <h2 className="ashrul__cta-title">{t("ashramRules.cta_title")}</h2>
          <p className="ashrul__cta-sub">{t("ashramRules.cta_sub")}</p>
          <button
            className="ashrul__cta-btn"
            onClick={() => navigate("/")}
          >
            {t("ashramRules.cta_btn")}
          </button>
        </div>
      </section>

    </div>
  );
};

export default AshramRules;