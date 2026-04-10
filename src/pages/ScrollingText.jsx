import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./ScrollingText.css";

const ScrollingText = () => {
  const { t } = useTranslation();   // ✅ NEW
  const text = t("scrolling.text");

  const content = (
    <>
      {text} &nbsp;&nbsp;&nbsp;
      {text} &nbsp;&nbsp;&nbsp;
      {text} &nbsp;&nbsp;&nbsp;
      {text} &nbsp;&nbsp;&nbsp;
      {text} &nbsp;&nbsp;&nbsp;
    </>
  );

  return (
    <div className="sctxt__container">
      <div className="sctxt__glow-strip" />
      <div className="sctxt__track">
        <div className="sctxt__belt">
          <span className="sctxt__segment">{content}</span>
          <span className="sctxt__segment" aria-hidden="true">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;