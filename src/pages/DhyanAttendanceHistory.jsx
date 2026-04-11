import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import dhyanImg from "../assets/guruji.webp";
import "./DhyanAttendanceHistory.css";

const DhyanAttendanceHistory = () => {
  const { t } = useTranslation();   // ✅ NEW

  return (
    <div className="dah-page">

      {/* Eyebrow Header */}
      <div className="dah-page-eyebrow">
        <span className="dah-eyebrow-tag">{t("dhyan.eyebrow")}</span>
        <h1>
          {t("dhyan.title_1")} <span>{t("dhyan.title_accent")}</span>
        </h1>
        <div className="dah-header-divider">
          <span className="dah-header-divider-icon">✦</span>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="dah-content-row">

        {/* Left — Image */}
        <div className="dah-img-col">
          <div className="dah-img-frame">
            <img src={dhyanImg} alt="Dhyan Meditation" />
            <span className="dah-img-ornament">✦</span>
          </div>
        </div>

        {/* Right — Text */}
        <div className="dah-text-col">
          <h2>{t("dhyan.h2")}</h2>
          <span className="dah-title-accent" />
          <p>{t("dhyan.p1")}</p>
          <p>{t("dhyan.p2")}</p>
          <p>{t("dhyan.p3")}</p>
          <p>{t("dhyan.p4")}</p>

          <a
            href="https://dhyan.jaigurubande.in"
            target="_blank"
            rel="noopener noreferrer"
            className="dah-check-btn"
            onTouchEnd={(e) => {
              e.preventDefault();
              window.open("https://dhyan.jaigurubande.in", "_blank", "noopener,noreferrer");
            }}
          >
            {t("dhyan.btn")}
            <span className="dah-btn-arrow">→</span>
          </a>
        </div>

      </div>

    </div>
  );
};

export default DhyanAttendanceHistory;