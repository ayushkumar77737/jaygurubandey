import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./LatestBhajan.css";

const PER_PAGE = 6;

const LatestBhajan = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ bhajans inside component to use t()
  const bhajans = [
    { id: 1, title: t("latestBhajan.v1"), embed: "https://www.youtube.com/embed/SXWtAGqBaNE" },
    { id: 2, title: t("latestBhajan.v2"), embed: "https://www.youtube.com/embed/QvsZ4SVZhE8" },
    { id: 3, title: t("latestBhajan.v3"), embed: "https://www.youtube.com/embed/DXhUMvBtc6o" },
    { id: 4, title: t("latestBhajan.v4"), embed: "https://www.youtube.com/embed/F8CcmJ77jYk" },
    { id: 5, title: t("latestBhajan.v5"), embed: "https://www.youtube.com/embed/uSnPVCL2CzI" },
    { id: 6, title: t("latestBhajan.v6"), embed: "https://www.youtube.com/embed/zB9IL7md6iI" },
    { id: 7, title: t("latestBhajan.v7"), embed: "https://www.youtube.com/embed/tKc0pbP0aSc" },
    { id: 8, title: t("latestBhajan.v8"), embed: "https://www.youtube.com/embed/MjVr70JW2gA" },
  ];

  const totalPages = Math.ceil(bhajans.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentBhajans = bhajans.slice(startIndex, startIndex + PER_PAGE);

  return (
    <section className="lb__section">
      <div className="lb__blob lb__blob--a" />
      <div className="lb__blob lb__blob--b" />

      {/* Header */}
      <div className="lb__header">
        <div className="lb__header-icon">🎵</div>
        <h1 className="lb__title">
          {t("latestBhajan.title")} <span className="lb__title-accent">{t("latestBhajan.title_accent")}</span>
        </h1>
        <p className="lb__subtitle">{t("latestBhajan.subtitle")}</p>
        <div className="lb__divider" />
      </div>

      {/* Grid */}
      <div className="lb__grid">
        {currentBhajans.map((bhajan, index) => (
          <div className="lb__card" key={bhajan.id} style={{ animationDelay: `${index * 0.075}s` }}>
            <div className="lb__video-wrap">
              <iframe src={bhajan.embed} title={bhajan.title} frameBorder="0" allowFullScreen className="lb__iframe" />
              <div className="lb__video-overlay" />
            </div>
            <div className="lb__card-body">
              <span className="lb__card-tag">{t("latestBhajan.tag")}</span>
              <h3 className="lb__card-title">{bhajan.title}</h3>
              <a href={bhajan.embed.replace("embed/", "watch?v=")} target="_blank" rel="noreferrer" className="lb__listen-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                {t("latestBhajan.listen")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="lb__pagination">
        <button className="lb__pg-btn" onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
          {t("latestBhajan.prev")}
        </button>
        <div className="lb__pg-info">
          <span className="lb__pg-current">{currentPage}</span>
          <span className="lb__pg-slash">/</span>
          <span className="lb__pg-total">{totalPages}</span>
        </div>
        <button className="lb__pg-btn" onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>
          {t("latestBhajan.next")}
        </button>
      </div>
    </section>
  );
};

export default LatestBhajan;