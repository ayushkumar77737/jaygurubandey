import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./QuickStart.css";

// Paths are navigation concerns, not translatable — kept here separately
const QUICK_PATHS = ["/", "/about", "/dailysatsang", "/important-dates", "/contact"];

const QuickStart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const links = t("quickStart.links", { returnObjects: true });

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="qkst__page">

      {/* Background orbs */}
      <div className="qkst__orb qkst__orb--1" />
      <div className="qkst__orb qkst__orb--2" />
      <div className="qkst__orb qkst__orb--3" />

      <div className="qkst__inner">

        {/* ===== Hero ===== */}
        <div className="qkst__hero">
          <div className="qkst__badge">{t("quickStart.badge")}</div>
          <h1 className="qkst__title">{t("quickStart.title")}</h1>
          <p className="qkst__subtitle">{t("quickStart.subtitle")}</p>
          <div className="qkst__divider">
            <span className="qkst__div-line" />
            <span className="qkst__div-gem">✦</span>
            <span className="qkst__div-line" />
          </div>
        </div>

        {/* ===== Grid ===== */}
        <div className="qkst__grid">
          {links.map((item, i) => (
            <button
              key={item.id}
              className="qkst__card"
              onClick={() => handleNavigate(QUICK_PATHS[i])}
              style={{ animationDelay: `${0.05 + i * 0.09}s` }}
            >
              {/* Hover glow layer */}
              <span className="qkst__card-glow" />

              <div className="qkst__card-top">
                <span className="qkst__emoji">{item.emoji}</span>
                <span className="qkst__tag">{item.tag}</span>
              </div>

              <h2 className="qkst__card-title">{item.label}</h2>
              <p className="qkst__card-text">{item.description}</p>

              <div className="qkst__card-footer">
                <span className="qkst__cta">{t("quickStart.cta")}</span>
                <span className="qkst__arrow">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* ===== Footer note ===== */}
        <p className="qkst__note">{t("quickStart.note")}</p>

      </div>
    </div>
  );
};

export default QuickStart;