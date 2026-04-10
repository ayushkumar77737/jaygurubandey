import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./LatestAmritvani.css";

const PER_PAGE = 6;

const LatestAmritvani = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ videos inside component to use t()
  const videos = [
    { id: 1, title: t("latestAmritvani.v1"), embed: "https://www.youtube.com/embed/su7VYdVdn-M" },
    { id: 2, title: t("latestAmritvani.v2"), embed: "https://www.youtube.com/embed/InNsbUsqhns" },
    { id: 3, title: t("latestAmritvani.v3"), embed: "https://www.youtube.com/embed/X5LPFy50VdY" },
    { id: 4, title: t("latestAmritvani.v4"), embed: "https://www.youtube.com/embed/su7VYdVdn-M" },
    { id: 5, title: t("latestAmritvani.v5"), embed: "https://www.youtube.com/embed/InNsbUsqhns" },
    { id: 6, title: t("latestAmritvani.v6"), embed: "https://www.youtube.com/embed/X5LPFy50VdY" },
    { id: 7, title: t("latestAmritvani.v7"), embed: "https://www.youtube.com/embed/su7VYdVdn-M" },
    { id: 8, title: t("latestAmritvani.v8"), embed: "https://www.youtube.com/embed/InNsbUsqhns" },
  ];

  const totalPages = Math.ceil(videos.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + PER_PAGE);

  const goPrev = () => { if (currentPage > 1) setCurrentPage((p) => p - 1); };
  const goNext = () => { if (currentPage < totalPages) setCurrentPage((p) => p + 1); };

  return (
    <section className="la__section">
      <div className="la__blob la__blob--1" />
      <div className="la__blob la__blob--2" />
      <div className="la__blob la__blob--3" />

      {/* Header */}
      <div className="la__header">
        <div className="la__header-icon">🔔</div>
        <h1 className="la__title">
          {t("latestAmritvani.title")} <span className="la__title-accent">{t("latestAmritvani.title_accent")}</span>
        </h1>
        <p className="la__subtitle">{t("latestAmritvani.subtitle")}</p>
        <div className="la__divider" />
      </div>

      {/* Grid */}
      <div className="la__grid">
        {currentVideos.map((video, index) => (
          <div className="la__card" key={video.id} style={{ animationDelay: `${index * 0.075}s` }}>
            <div className="la__video-wrap">
              <iframe src={video.embed} title={video.title} frameBorder="0" allowFullScreen className="la__iframe" />
              <div className="la__video-overlay" />
            </div>
            <div className="la__card-body">
              <span className="la__card-tag">{t("latestAmritvani.tag")}</span>
              <h3 className="la__card-title">{video.title}</h3>
              <a href={video.embed.replace("embed/", "watch?v=")} target="_blank" rel="noreferrer" className="la__watch-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                {t("latestAmritvani.watch")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="la__pagination">
        <button className="la__pg-btn" onClick={goPrev} disabled={currentPage === 1}>
          {t("latestAmritvani.prev")}
        </button>
        <div className="la__pg-badge">
          <span className="la__pg-current">{currentPage}</span>
          <span className="la__pg-sep">/</span>
          <span className="la__pg-total">{totalPages}</span>
        </div>
        <button className="la__pg-btn" onClick={goNext} disabled={currentPage === totalPages}>
          {t("latestAmritvani.next")}
        </button>
      </div>
    </section>
  );
};

export default LatestAmritvani;