import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./SatguruChalisa.css";
import guruImage from "../assets/photo24.webp";

const SatguruChalisa = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  // helper — renders \n as <br/>
  const renderLines = (key) =>
    t(key).split("\n").map((line, i, arr) => (
      <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
    ));

  return (
    <div className="sc__page">
      <div className="sc__bg-orb sc__bg-orb--1" />
      <div className="sc__bg-orb sc__bg-orb--2" />
      <div className="sc__bg-orb sc__bg-orb--3" />

      {/* Header */}
      <div className="sc__header">
        <div className="sc__header-deco">🙏</div>
        <h1 className="sc__title">{t("satguruChalisa.title")}</h1>
        <div className="sc__title-underline" />
        <p className="sc__header-tag">{t("satguruChalisa.tag")}</p>
      </div>

      {/* Main Content */}
      <div className="sc__content">

        {/* Left: Image */}
        <div className="sc__image-box">
          <div className="sc__image-ring" />
          <img src={guruImage} alt="Satguru" className="sc__image" />
          <div className="sc__image-caption">{t("satguruChalisa.caption")}</div>
        </div>

        {/* Right: Text */}
        <div className="sc__text-box">
          <div className="sc__page-badge">{t("satguruChalisa.page_badge", { page })}</div>

          {page === 1 && (
            <div className="sc__verse" key="page-1">
              <p className="sc__verse-heading">{t("satguruChalisa.doha_heading")}</p>
              <p className="sc__verse-lines">{renderLines("satguruChalisa.doha")}</p>
              <div className="sc__verse-divider" />
              <p className="sc__verse-heading">{t("satguruChalisa.chalisa_heading")}</p>
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p1_v1")}</p>
              <div className="sc__verse-divider" />
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p1_v2")}</p>
            </div>
          )}

          {page === 2 && (
            <div className="sc__verse" key="page-2">
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p2_v1")}</p>
              <div className="sc__verse-divider" />
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p2_v2")}</p>
              <div className="sc__verse-divider" />
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p2_v3")}</p>
              <div className="sc__verse-divider" />
              <p className="sc__verse-lines">{renderLines("satguruChalisa.p2_v4")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="sc__pagination">
        <button className="sc__pg-btn" onClick={handlePrev} disabled={page === 1}>
          {t("satguruChalisa.prev")}
        </button>
        <div className="sc__pg-track">
          <span className={`sc__pg-dot ${page === 1 ? "sc__pg-dot--active" : ""}`} />
          <span className={`sc__pg-dot ${page === 2 ? "sc__pg-dot--active" : ""}`} />
        </div>
        <button className="sc__pg-btn" onClick={handleNext} disabled={page === 2}>
          {t("satguruChalisa.next")}
        </button>
      </div>

      {/* Footer */}
      <div className="sc__footer">
        <div className="sc__footer-rule" />
        <p className="sc__footer-text">{t("satguruChalisa.footer")}</p>
      </div>
    </div>
  );
};

export default SatguruChalisa;