import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./DailySchedule.css";

function DailySchedule() {
  const { t } = useTranslation();   // ✅ NEW

  const morningSchedule = [
    { title: t("dailySchedule.m1"), time: t("dailySchedule.t_m1") },
    { title: t("dailySchedule.m2"), time: t("dailySchedule.t_m2") },
    { title: t("dailySchedule.m3"), time: t("dailySchedule.t_m3") },
    { title: t("dailySchedule.m4"), time: t("dailySchedule.t_m4") },
    { title: t("dailySchedule.m5"), time: t("dailySchedule.t_m5") },
    { title: t("dailySchedule.m6"), time: t("dailySchedule.t_m6") },
  ];

  const afternoonSchedule = [
    { title: t("dailySchedule.a1"), time: t("dailySchedule.t_a1") },
    { title: t("dailySchedule.a2"), time: t("dailySchedule.t_a2") },
    { title: t("dailySchedule.a3"), time: t("dailySchedule.t_a3") },
    { title: t("dailySchedule.a4"), time: t("dailySchedule.t_a4") },
    { title: t("dailySchedule.a5"), time: t("dailySchedule.t_a5") },
    { title: t("dailySchedule.a6"), time: t("dailySchedule.t_a6") },
  ];

  const eveningSchedule = [
    { title: t("dailySchedule.e1"), time: t("dailySchedule.t_e1") },
    { title: t("dailySchedule.e2"), time: t("dailySchedule.t_e2") },
    { title: t("dailySchedule.e3"), time: t("dailySchedule.t_e3") },
    { title: t("dailySchedule.e4"), time: t("dailySchedule.t_e4") },
    { title: t("dailySchedule.e5"), time: t("dailySchedule.t_e5") },
  ];

  const sessions = [
    { key: "morning", icon: "🌅", label: t("dailySchedule.morning_label"), items: morningSchedule, mod: "ds__section--morning" },
    { key: "afternoon", icon: "🌤️", label: t("dailySchedule.afternoon_label"), items: afternoonSchedule, mod: "ds__section--afternoon" },
    { key: "evening", icon: "🌙", label: t("dailySchedule.evening_label"), items: eveningSchedule, mod: "ds__section--evening" },
  ];

  return (
    <div className="ds__page">
      <div className="ds__orb ds__orb--1" />
      <div className="ds__orb ds__orb--2" />
      <div className="ds__orb ds__orb--3" />

      {/* Header */}
      <div className="ds__header">
        <div className="ds__header-icon">🕰️</div>
        <h1 className="ds__main-title">{t("dailySchedule.title")}</h1>
        <div className="ds__title-rule" />
        <p className="ds__header-sub">{t("dailySchedule.sub")}</p>
      </div>

      {/* Schedule Sections */}
      <div className="ds__container">
        {sessions.map((session, si) => (
          <div className={`ds__section ${session.mod}`} key={session.key} style={{ animationDelay: `${si * 0.15}s` }}>
            <div className="ds__section-header">
              <span className="ds__section-icon">{session.icon}</span>
              <h2 className="ds__section-title">{session.label}</h2>
            </div>
            <div className="ds__divider" />
            <ul className="ds__list">
              {session.items.map((item, i) => (
                <li className="ds__item" key={i} style={{ animationDelay: `${si * 0.15 + i * 0.05 + 0.1}s` }}>
                  <div className="ds__item-dot" />
                  <span className="ds__item-text">{item.title}</span>
                  <span className="ds__item-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailySchedule;