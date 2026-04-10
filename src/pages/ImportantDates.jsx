import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./ImportantDates.css";
import satsangImg from "../assets/photo24.webp";

const ImportantDates = () => {
  const { t } = useTranslation();   // ✅ NEW

  // ✅ dates inside component to use t()
  const dates = [
    { icon: "🔔", name: t("importantDates.d1_name"), schedule: t("importantDates.d1_schedule"), contact: t("importantDates.d1_contact"), isHQ: true },
    { icon: "📅", name: t("importantDates.d2_name"), schedule: t("importantDates.d2_schedule"), contact: t("importantDates.d2_contact") },
    { icon: "📅", name: t("importantDates.d3_name"), schedule: t("importantDates.d3_schedule"), contact: t("importantDates.d3_contact") },
    { icon: "📅", name: t("importantDates.d4_name"), schedule: t("importantDates.d4_schedule"), contact: t("importantDates.d4_contact") },
    { icon: "📅", name: t("importantDates.d5_name"), schedule: t("importantDates.d5_schedule"), contact: t("importantDates.d5_contact") },
    { icon: "📅", name: t("importantDates.d6_name"), schedule: t("importantDates.d6_schedule"), contact: t("importantDates.d6_contact") },
    { icon: "📅", name: t("importantDates.d7_name"), schedule: t("importantDates.d7_schedule"), contact: t("importantDates.d7_contact") },
    { icon: "📅", name: t("importantDates.d8_name"), schedule: t("importantDates.d8_schedule"), contact: t("importantDates.d8_contact") },
    { icon: "📅", name: t("importantDates.d9_name"), schedule: t("importantDates.d9_schedule"), contact: t("importantDates.d9_contact") },
  ];

  return (
    <div className="imd-page">

      {/* Heading */}
      <div className="imd-heading-section">
        <span className="imd-eyebrow">{t("importantDates.eyebrow")}</span>
        <h2>{t("importantDates.title")}</h2>
        <div className="imd-heading-divider">
          <span className="imd-heading-divider-icon">🪷</span>
        </div>
      </div>

      {/* Image */}
      <div className="imd-img-section">
        <div className="imd-img-frame">
          <img src={satsangImg} alt="Important Event" />
        </div>
      </div>

      {/* Dates */}
      <div className="imd-dates-section">
        <div className="imd-dates-box">
          {dates.map((item, index) => (
            <div className={`imd-date-row${item.isHQ ? " imd-hq" : ""}`} key={index}>
              <span className="imd-date-icon">{item.icon}</span>
              <div className="imd-date-text">
                <strong>{item.name}</strong>
                {" – "}
                {item.schedule}
                <span className="imd-date-contact">{item.contact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ImportantDates;