import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./SatguruArti.css";
import guruImage from "../assets/photo24.webp";

const SatguruArti = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  // ✅ helper — renders \n as <br/> and \n\n as double break
  const renderLines = (key) =>
    t(key).split("\n").map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}{i < arr.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="sa__page">
      <div className="sa__orb sa__orb--1" />
      <div className="sa__orb sa__orb--2" />
      <div className="sa__orb sa__orb--3" />

      {/* Header */}
      <div className="sa__header">
        <div className="sa__header-flame">🪔</div>
        <h1 className="sa__title">{t("satguruArti.title")}</h1>
        <div className="sa__title-rule" />
        <p className="sa__header-tag">{t("satguruArti.tag")}</p>
      </div>

      {/* Content */}
      <div className="sa__content">

        {/* Left: Image */}
        <div className="sa__image-box">
          <div className="sa__image-halo" />
          <img src={guruImage} alt="Satguru" className="sa__image" />
          <span className="sa__image-label">{t("satguruArti.label")}</span>
        </div>

        {/* Right: Text */}
        <div className="sa__text-box">
          <div className="sa__pg-pill">{t("satguruArti.pill", { page })}</div>

          {page === 1 && (
            <div className="sa__verse" key="arti-1">
              <p className="sa__verse-num">{t("satguruArti.a1_num")}</p>
              <p className="sa__verse-lines">{renderLines("satguruArti.a1")}</p>
            </div>
          )}

          {page === 2 && (
            <div className="sa__verse" key="arti-2">
              <p className="sa__verse-num">{t("satguruArti.a2_num")}</p>
              <p className="sa__verse-lines">{renderLines("satguruArti.a2")}</p>
            </div>
          )}

          {page === 3 && (
            <div className="sa__verse" key="arti-3">
              <p className="sa__verse-num">{t("satguruArti.a3_num")}</p>
              <p className="sa__verse-lines">{renderLines("satguruArti.a3")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="sa__pagination">
        <button className="sa__pg-btn" onClick={handlePrev} disabled={page === 1}>
          {t("satguruArti.prev")}
        </button>
        <div className="sa__pg-dots">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`sa__pg-dot ${page === n ? "sa__pg-dot--active" : ""}`}
              onClick={() => setPage(n)}
              aria-label={`Go to Aarti ${n}`}
            />
          ))}
        </div>
        <button className="sa__pg-btn" onClick={handleNext} disabled={page === 3}>
          {t("satguruArti.next")}
        </button>
      </div>

      {/* Footer */}
      <div className="sa__footer">
        <div className="sa__footer-rule" />
        <p className="sa__footer-text">{t("satguruArti.footer")}</p>
      </div>
    </div>
  );
};

export default SatguruArti;