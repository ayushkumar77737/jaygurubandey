import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Satsang.css";

const Satsang = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  // ✅ videos inside component to use t()
  const videos = [
    { id: 1, title: t("satsang.v1"), embedUrl: "https://www.youtube.com/embed/su7VYdVdn-M", linkUrl: "https://www.youtube.com/live/su7VYdVdn-M?si=Hf4L8v5t1X3GjmLv" },
    { id: 2, title: t("satsang.v2"), embedUrl: "https://www.youtube.com/embed/0gbUwz9uc78", linkUrl: "https://www.youtube.com/live/0gbUwz9uc78?si=gbyM2-962bcKQtPK" },
    { id: 3, title: t("satsang.v3"), embedUrl: "https://www.youtube.com/embed/X5LPFy50VdY", linkUrl: "https://www.youtube.com/live/X5LPFy50VdY?si=C-Rozj2xmj_YDsH7" },
    { id: 4, title: t("satsang.v4"), embedUrl: "https://www.youtube.com/embed/InNsbUsqhns", linkUrl: "https://www.youtube.com/live/InNsbUsqhns?si=fUgfjkVIgswBWght" },
    { id: 5, title: t("satsang.v5"), embedUrl: "https://www.youtube.com/embed/_RfgvDG0oHA", linkUrl: "https://www.youtube.com/live/_RfgvDG0oHA?si=alZWuIwh1oyfc9mM" },
    { id: 6, title: t("satsang.v6"), embedUrl: "https://www.youtube.com/embed/MqJaPpO7yek?si=PQ0satWzucqIpi_8", linkUrl: "https://www.youtube.com/live/MqJaPpO7yek?si=PQ0satWzucqIpi_8" },
    { id: 7, title: t("satsang.v7"), embedUrl: "https://www.youtube.com/embed/ukHXW8T_8z4", linkUrl: "https://youtu.be/ukHXW8T_8z4" },
    { id: 8, title: t("satsang.v8"), embedUrl: "https://www.youtube.com/embed/gxKxXbX4NiY?si=gfn67CoV2aSXk696", linkUrl: "https://www.youtube.com/live/gxKxXbX4NiY?si=gfn67CoV2aSXk696" },
    { id: 9, title: t("satsang.v9"), embedUrl: "https://www.youtube.com/embed/Bm03O_ViuMY?si=3-gt6Ok8-4-GOjWA", linkUrl: "https://www.youtube.com/watch?v=Bm03O_ViuMY&si=3-gt6Ok8-4-GOjWA" },
    { id: 10, title: t("satsang.v10"), embedUrl: "https://www.youtube.com/embed/WalaJzM6pfY", linkUrl: "https://www.youtube.com/watch?v=WalaJzM6pfY" },
  ];

  const indexOfLast = currentPage * videosPerPage;
  const indexOfFirst = indexOfLast - videosPerPage;
  const currentVideos = videos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="ss__page">
      <div className="ss__orb ss__orb--1" />
      <div className="ss__orb ss__orb--2" />
      <div className="ss__orb ss__orb--3" />

      {/* Header */}
      <div className="ss__header">
        <div className="ss__header-icon">🔔</div>
        <h1 className="ss__title">{t("satsang.title")}</h1>
        <p className="ss__subtitle">{t("satsang.subtitle")}</p>
        <div className="ss__title-rule" />
      </div>

      {/* Video Grid */}
      <div className="ss__grid">
        {currentVideos.map((video, index) => (
          <div key={video.id} className="ss__card" style={{ animationDelay: `${index * 0.07}s` }}>
            <div className="ss__frame-wrap">
              <iframe src={video.embedUrl} title={video.title} allowFullScreen className="ss__iframe" />
              <div className="ss__frame-glow" />
            </div>
            <div className="ss__card-footer">
              <span className="ss__card-label">{video.title}</span>
              <a href={video.linkUrl} target="_blank" rel="noopener noreferrer" className="ss__watch-btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                {t("satsang.watch")}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="ss__pagination">
        <button className="ss__pg-btn" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          {t("satsang.prev")}
        </button>
        <div className="ss__pg-badge">
          <span className="ss__pg-current">{currentPage}</span>
          <span className="ss__pg-sep">/</span>
          <span className="ss__pg-total">{totalPages}</span>
        </div>
        <button className="ss__pg-btn" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          {t("satsang.next")}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="ss__actions">
        <a href="https://drive.google.com/file/d/1qWtxGPsRd5WpH1NjkgmVRiHvP2kKWNOJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ss__action-btn">
          <span className="ss__action-icon">📿</span>
          <span>{t("satsang.anmol_rakhi")}</span>
          <span className="ss__action-arrow">→</span>
        </a>
        <a href="https://drive.google.com/file/d/your-hari-pagh-link/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ss__action-btn">
          <span className="ss__action-icon">🪷</span>
          <span>{t("satsang.hari_pagh")}</span>
          <span className="ss__action-arrow">→</span>
        </a>
        <a href="https://drive.google.com/file/d/your-anmol-wadi-link/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ss__action-btn">
          <span className="ss__action-icon">📖</span>
          <span>{t("satsang.anmol_wadi")}</span>
          <span className="ss__action-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Satsang;