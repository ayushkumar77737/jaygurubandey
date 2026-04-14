import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./program.css";
import gurujiImage from "../assets/guruji.webp";

const Program = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [selectedProgram, setSelectedProgram] = useState("");

  // ✅ data inside component to use t()
  const data = [
    { id: 1, year: 2025, status: t("program.status_completed"), type: t("program.type_satsang"), title: t("program.p1_title"), description: t("program.p1_desc"), image: gurujiImage, time: t("program.p1_time"), date: t("program.p1_date"), location: t("program.p1_location") },
    { id: 2, year: 2025, status: t("program.status_upcoming"), type: t("program.type_satsang"), title: t("program.p2_title"), description: t("program.p2_desc"), image: gurujiImage, time: t("program.p2_time"), date: t("program.p2_date"), location: t("program.p2_location") },
    { id: 3, year: 2025, status: t("program.status_completed"), type: t("program.type_travel"), title: t("program.p3_title"), description: t("program.p3_desc"), image: gurujiImage, time: t("program.p3_time"), date: t("program.p3_date"), location: t("program.p3_location") },
    { id: 4, year: 2025, status: t("program.status_upcoming"), type: t("program.type_travel"), title: t("program.p4_title"), description: t("program.p4_desc"), image: gurujiImage, time: t("program.p4_time"), date: t("program.p4_date"), location: t("program.p4_location") },
    { id: 5, year: 2025, status: t("program.status_completed"), type: t("program.type_ashram"), title: t("program.p5_title"), description: t("program.p5_desc"), image: gurujiImage, time: t("program.p5_time"), date: t("program.p5_date"), location: t("program.p5_location") },
    { id: 6, year: 2025, status: t("program.status_upcoming"), type: t("program.type_ashram"), title: t("program.p6_title"), description: t("program.p6_desc"), image: gurujiImage, time: t("program.p6_time"), date: t("program.p6_date"), location: t("program.p6_location") },
  ];

  const programOptions = data.map((item) => `${item.year} ${item.status} ${item.type}`);

  const filteredData = selectedProgram
    ? data.filter((item) => `${item.year} ${item.status} ${item.type}` === selectedProgram)
    : [];

  const isUpcoming = (item) => item.status === t("program.status_upcoming");

  // ✅ strip leading emoji+label from time/date/location
  const stripPrefix = (str) => str.replace(/^[\u{1F300}-\u{1FAFF}🕔🕖🕠🕛📅📍]\s*(Time:|Date:|Venue:|Darshan of Satguru Sahib:)?\s*/u, "").trim();

  return (
    <div className="pg-page">
      <div className="pg-stars" aria-hidden="true">
        <span className="pg-stars__layer pg-stars__layer--1" />
        <span className="pg-stars__layer pg-stars__layer--2" />
        <span className="pg-stars__layer pg-stars__layer--3" />
      </div>
      <div className="pg-nebula" aria-hidden="true">
        <span className="pg-nebula__orb pg-nebula__orb--1" />
        <span className="pg-nebula__orb pg-nebula__orb--2" />
        <span className="pg-nebula__orb pg-nebula__orb--3" />
      </div>

      {/* Header */}
      <div className="pg-header">
        <div className="pg-header__ornament">
          <span className="pg-orn-line" />
          <span className="pg-orn-icon">🪷</span>
          <span className="pg-orn-line" />
        </div>
        <h1 className="pg-header__title">{t("program.title")}</h1>
        <p className="pg-header__subtitle">{t("program.subtitle")}</p>
      </div>

      {/* Dropdown */}
      <div className="pg-dropdown-wrap">
        <label className="pg-dropdown-label" htmlFor="pg-program-select">
          {t("program.select_label")}
        </label>
        <div className="pg-dropdown-box">
          <select
            id="pg-program-select"
            className="pg-dropdown"
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
            dir="ltr"
            lang="hi"
          >
            <option value="" hidden>{t("program.select_placeholder")}</option>
            {programOptions.map((option, index) => (
              <option key={index} value={option} dir="ltr">{option}</option>
            ))}
          </select>
          <span className="pg-dropdown-arrow">▾</span>
        </div>
      </div>

      {/* Cards */}
      <div className="pg-cards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className={`pg-card ${isUpcoming(item) ? "pg-card--upcoming" : "pg-card--completed"}`} key={item.id}>
              <div className="pg-card__border" aria-hidden="true" />
              <span className={`pg-card__ribbon ${isUpcoming(item) ? "pg-card__ribbon--upcoming" : "pg-card__ribbon--completed"}`}>
                {item.status}
              </span>
              <div className="pg-card__avatar-wrap">
                <div className="pg-card__avatar-ring" />
                <div className="pg-card__avatar">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <h2 className="pg-card__title">{item.title}</h2>
              <div className="pg-card__divider" />
              <p className="pg-card__desc" style={{ whiteSpace: "pre-line" }}>
                {item.description}
              </p>
              <div className="pg-card__info">
                <div className="pg-card__info-pill">
                  <span className="pg-card__info-icon">🕔</span>
                  <span>{stripPrefix(item.time)}</span>
                </div>
                <div className="pg-card__info-pill">
                  <span className="pg-card__info-icon">📅</span>
                  <span>{stripPrefix(item.date)}</span>
                </div>
                <div className="pg-card__info-pill pg-card__info-pill--wide">
                  <span className="pg-card__info-icon">📍</span>
                  <span>{stripPrefix(item.location)}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          selectedProgram && (
            <p className="pg-empty">{t("program.no_results")}</p>
          )
        )}
      </div>
    </div>
  );
};

export default Program;