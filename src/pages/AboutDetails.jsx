import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./About.css";

const AboutDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();   // ✅ NEW

  const { section, currentPage } = location.state || {};

  if (!section) {
    return (
      <div className="ab__page">
        <div className="ab__not-found">
          <div className="ab__not-found-icon">🙏</div>
          <h2 className="ab__not-found-title">{t("about.not_found_title")}</h2>
          <button className="ab__know-btn" onClick={() => navigate("/about")}>
            {t("about.go_back")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ab__page">
      <div className="ab__orb ab__orb--1" />
      <div className="ab__orb ab__orb--2" />

      <section className="ab__section ab__section--detail">
        <div className="ab__section-photo">
          <div className="ab__photo-ring" />
          <img src={section.photo} alt={section.title} className="ab__photo-img" />
        </div>
        <div className="ab__section-text">
          <span className="ab__section-tag">{t("about.tag")}</span>
          <h2 className="ab__section-title">{section.title}</h2>
          <div className="ab__section-rule" />
          {section.text.map((p, i) => (
            <p key={i} className="ab__section-para ab__section-para--full">{p}</p>
          ))}
          <button className="ab__know-btn" onClick={() => navigate("/about", { state: { currentPage } })}>
            {t("about.back")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;