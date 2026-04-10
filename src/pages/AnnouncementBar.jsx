import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const { t } = useTranslation();   // ✅ NEW
  const text = t("announce.text");

  return (
    <div className="annbar__container">
      <span className="annbar__icon">📢</span>
      <div className="annbar__track">
        <div className="annbar__text">
          {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;