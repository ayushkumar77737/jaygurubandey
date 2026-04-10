import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./About.css";
import guruji from "../assets/guruji.webp";
import vision from "../assets/vision.webp";
import daily from "../assets/journey.webp";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();   // ✅ NEW

  const initialPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const sectionsPerPage = 3;

  // ✅ sections inside component to use t()
  const sections = [
    { id: 1, key: "journey", photo: guruji, title: t("about.s1_title"), text: [t("about.s1_p1"), t("about.s1_p2"), t("about.s1_p3")] },
    { id: 2, key: "vision", photo: vision, title: t("about.s2_title"), text: [t("about.s2_p1"), t("about.s2_p2"), t("about.s2_p3")] },
    { id: 3, key: "daily", photo: daily, title: t("about.s3_title"), text: [t("about.s3_p1"), t("about.s3_p2"), t("about.s3_p3")] },
    { id: 4, key: "teachings", photo: guruji, title: t("about.s4_title"), text: [t("about.s4_p1"), t("about.s4_p2"), t("about.s4_p3")] },
    { id: 5, key: "seva", photo: vision, title: t("about.s5_title"), text: [t("about.s5_p1"), t("about.s5_p2"), t("about.s5_p3")] },
    { id: 6, key: "festivals", photo: daily, title: t("about.s6_title"), text: [t("about.s6_p1"), t("about.s6_p2"), t("about.s6_p3")] },
  ];

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="ab__page">
      <div className="ab__orb ab__orb--1" />
      <div className="ab__orb ab__orb--2" />

      {/* Intro */}
      <section className="ab__intro">
        <div className="ab__intro-deco">🙏</div>
        <h1 className="ab__intro-heading">{t("about.intro_heading")}</h1>
        <div className="ab__intro-rule" />
        <p className="ab__intro-subtext">{t("about.intro_sub")}</p>
      </section>

      {/* Section Cards */}
      {currentSections.map((sec, idx) => (
        <section key={sec.id} className="ab__section" style={{ animationDelay: `${idx * 0.15}s` }}>
          <div className="ab__section-photo">
            <div className="ab__photo-ring" />
            <img src={sec.photo} alt={sec.title} className="ab__photo-img" />
          </div>
          <div className="ab__section-text">
            <span className="ab__section-tag">{t("about.tag")}</span>
            <h2 className="ab__section-title">{sec.title}</h2>
            <div className="ab__section-rule" />
            <p className="ab__section-para">{sec.text[0]}</p>
            <button className="ab__know-btn" onClick={() => navigate(`/about/${sec.id}`, { state: { section: sec, currentPage } })}>
              {t("about.know_more")}<span className="ab__btn-arrow">→</span>
            </button>
          </div>
        </section>
      ))}

      {/* Pagination */}
      <div className="ab__pagination">
        <button className="ab__pg-btn" onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
          {t("about.prev")}
        </button>
        <div className="ab__pg-badge">
          <span className="ab__pg-current">{currentPage}</span>
          <span className="ab__pg-sep">/</span>
          <span className="ab__pg-total">{totalPages}</span>
        </div>
        <button className="ab__pg-btn" onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>
          {t("about.next")}
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="ab__nav-actions">
        <button className="ab__nav-btn" onClick={() => navigate("/intlcenters")}><span>🌏</span> {t("about.btn_network")}</button>
        <button className="ab__nav-btn" onClick={() => navigate("/spotlight")}><span>🔦</span> {t("about.btn_spotlight")}</button>
        <button className="ab__nav-btn" onClick={() => navigate("/dailyschedule")}><span>📅</span> {t("about.btn_schedule")}</button>
      </div>
    </div>
  );
};

export default About;