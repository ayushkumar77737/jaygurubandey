import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./UpcomingPrograms.css";

const UpcomingPrograms = () => {
  const { t } = useTranslation();   // ✅ NEW

  // ✅ programs inside component to use t()
  const programs = [
    {
      title: t("upcomingPrograms.p1_title"),
      subtitle: t("upcomingPrograms.p1_subtitle"),
      date: t("upcomingPrograms.p1_date"),
      day: t("upcomingPrograms.p1_day"),
      time: t("upcomingPrograms.p1_time"),
      location: t("upcomingPrograms.p1_location"),
      message: t("upcomingPrograms.p1_message"),
      contact: t("upcomingPrograms.p1_contact"),
    },
    {
      title: t("upcomingPrograms.p2_title"),
      subtitle: t("upcomingPrograms.p2_subtitle"),
      date: t("upcomingPrograms.p2_date"),
      day: t("upcomingPrograms.p2_day"),
      time: t("upcomingPrograms.p2_time"),
      location: t("upcomingPrograms.p2_location"),
      message: t("upcomingPrograms.p2_message"),
      contact: t("upcomingPrograms.p2_contact"),
    },
    {
      title: t("upcomingPrograms.p3_title"),
      subtitle: t("upcomingPrograms.p3_subtitle"),
      date: t("upcomingPrograms.p3_date"),
      day: t("upcomingPrograms.p3_day"),
      time: t("upcomingPrograms.p3_time"),
      location: t("upcomingPrograms.p3_location"),
      message: t("upcomingPrograms.p3_message"),
      contact: t("upcomingPrograms.p3_contact"),
    },
  ];

  return (
    <section className="ugp-page">

      {/* Header */}
      <header className="ugp-header">
        <h1>
          {t("upcomingPrograms.title")}
          <span className="ugp-calendar-icon"> 📅</span>
        </h1>
        <p className="ugp-header-sub">{t("upcomingPrograms.header_sub")}</p>
        <div className="ugp-lotus-divider">
          <span className="ugp-lotus-icon">🪷</span>
        </div>
      </header>

      {/* Cards */}
      <div className="ugp-grid">
        {programs.map((program, index) => (
          <article className="ugp-card" key={index}>
            <div className="ugp-card-topbar" />
            <div className="ugp-card-body">

              <h2 className="ugp-card-title">{program.title}</h2>
              <h3 className="ugp-card-subtitle">{program.subtitle}</h3>

              <div className="ugp-card-info">
                <p><span className="ugp-info-icon">🗓️</span><strong>{t("upcomingPrograms.label_date")}</strong> {program.date}</p>
                <p><span className="ugp-info-icon">📆</span><strong>{t("upcomingPrograms.label_day")}</strong> {program.day}</p>
                <p><span className="ugp-info-icon">⏰</span><strong>{t("upcomingPrograms.label_time")}</strong> {program.time}</p>
                <p><span className="ugp-info-icon">📍</span><strong>{t("upcomingPrograms.label_venue")}</strong> {program.location}</p>
              </div>

              <div className="ugp-card-message">
                <p>{program.message}</p>
              </div>

              <div className="ugp-card-contact">
                <p>{t("upcomingPrograms.label_contact")}</p>
                <p>{program.contact}</p>
              </div>

              <div className="ugp-card-blessing">
                {t("upcomingPrograms.blessing")}
              </div>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default UpcomingPrograms;