import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./DailyTeachings.css";

const DailyTeachings = () => {
  const { t } = useTranslation();   // ✅ NEW

  // ✅ teachings inside component to use t()
  const teachings = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    question: t(`dailyTeachings.q${i + 1}`),
    answer: t(`dailyTeachings.a${i + 1}`),
  }));

  const today = new Date().getDate();
  const index = (today - 1) % 30;
  const teaching = teachings[index];

  return (
    <div className="dt__page">
      <div className="dt__orb dt__orb--1" />
      <div className="dt__orb dt__orb--2" />
      <div className="dt__orb dt__orb--3" />

      <div className="dt__content">

        {/* Header */}
        <div className="dt__header">
          <div className="dt__header-icon">🪔</div>
          <h1 className="dt__page-title">{t("dailyTeachings.title")}</h1>
          <div className="dt__title-rule" />
          <p className="dt__page-tag">{t("dailyTeachings.tag")}</p>
        </div>

        {/* Main Teaching Card */}
        <div className="dt__card">
          <div className="dt__card-top">
            <span className="dt__day-badge">{t("dailyTeachings.day")} {teaching.day}</span>
            <div className="dt__card-deco" />
          </div>
          <h2 className="dt__question">{teaching.question}</h2>
          <div className="dt__question-rule" />
          <p className="dt__answer">{teaching.answer}</p>
        </div>

        {/* Guruji's Message */}
        <div className="dt__message-box">
          <div className="dt__message-icon">✨</div>
          <h3 className="dt__message-title">{t("dailyTeachings.msg_title")}</h3>
          <p className="dt__message-text">{t("dailyTeachings.msg_text")}</p>
        </div>

      </div>
    </div>
  );
};

export default DailyTeachings;