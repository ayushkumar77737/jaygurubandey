import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Bhajan.css";

const Bhajan = () => {
  const videos = [
    {
      id: 1,
      title: "Bhajan Video 1",
      embedUrl: "https://www.youtube.com/embed/SXWtAGqBaNE",
      linkUrl: "https://youtu.be/SXWtAGqBaNE?si=V2aMf7Lnbktyw5wu",
    },
    {
      id: 2,
      title: "Bhajan Video 2",
      embedUrl: "https://www.youtube.com/embed/QvsZ4SVZhE8",
      linkUrl: "https://youtu.be/QvsZ4SVZhE8?si=sS_gOor_witPXIOy",
    },
    {
      id: 3,
      title: "Bhajan Video 3",
      embedUrl: "https://www.youtube.com/embed/DXhUMvBtc6o",
      linkUrl: "https://youtu.be/DXhUMvBtc6o?si=CDE3MPTg7HUyTHjo",
    },
    {
      id: 4,
      title: "Bhajan Video 4",
      embedUrl: "https://www.youtube.com/embed/F8CcmJ77jYk",
      linkUrl: "https://youtu.be/F8CcmJ77jYk?si=gUKxFgF3ej3QlIQI",
    },
    {
      id: 5,
      title: "Bhajan Video 5",
      embedUrl: "https://www.youtube.com/embed/uSnPVCL2CzI",
      linkUrl: "https://youtu.be/uSnPVCL2CzI?si=IWxKX50haeEvgYj6",
    },
    {
      id: 6,
      title: "Bhajan Video 6",
      embedUrl: "https://www.youtube.com/embed/zB9IL7md6iI",
      linkUrl: "https://youtu.be/zB9IL7md6iI",
    },
    {
      id: 7,
      title: "Bhajan Video 7",
      embedUrl: "https://www.youtube.com/embed/tKc0pbP0aSc",
      linkUrl: "https://youtu.be/tKc0pbP0aSc",
    },
    {
      id: 8,
      title: "Bhajan Video 8",
      embedUrl: "https://www.youtube.com/embed/MjVr70JW2gA",
      linkUrl: "https://youtu.be/MjVr70JW2gA",
    },
    {
      id: 9,
      title: "Bhajan Video 9",
      embedUrl: "https://www.youtube.com/embed/6B-qH5-5JP4",
      linkUrl: "https://www.youtube.com/watch?v=6B-qH5-5JP4",
    },
    {
      id: 10,
      title: "Bhajan Video 10",
      embedUrl: "https://www.youtube.com/embed/FLrbZNJwZ1U",
      linkUrl: "https://www.youtube.com/watch?v=FLrbZNJwZ1U",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 6;

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="bj__page">
      {/* Decorative background orbs */}
      <div className="bj__orb bj__orb--1" />
      <div className="bj__orb bj__orb--2" />
      <div className="bj__orb bj__orb--3" />

      {/* Header */}
      <header className="bj__header">
        <div className="bj__header-deco">🪔</div>
        <h1 className="bj__title">Bhajan Moments</h1>
        <p className="bj__subtitle">Sacred melodies for the soul</p>
        <div className="bj__title-rule" />
      </header>

      {/* Video Grid */}
      <div className="bj__grid">
        {currentVideos.map((video, index) => (
          <div
            key={video.id}
            className="bj__card"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            <div className="bj__card-frame-wrap">
              <iframe
                src={video.embedUrl}
                title={video.title}
                allowFullScreen
                className="bj__iframe"
              />
              <div className="bj__card-shimmer" />
            </div>
            <div className="bj__card-footer">
              <span className="bj__card-label">{video.title}</span>
              <a
                href={video.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bj__watch-btn"
              >
                <span>Watch</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bj__pagination">
        <button
          className="bj__page-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>

        <div className="bj__page-badge">
          <span className="bj__page-num">{currentPage}</span>
          <span className="bj__page-sep">/</span>
          <span className="bj__page-total">{totalPages}</span>
        </div>

        <button
          className="bj__page-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

      {/* Action Buttons */}
      <div className="bj__actions">
        <Link to="/satguru-chalisa" className="bj__action-btn">
          <span className="bj__action-icon">📿</span>
          <span>Satguru Chalisa</span>
          <span className="bj__action-arrow">→</span>
        </Link>

        <Link to="/satguru-arti" className="bj__action-btn">
          <span className="bj__action-icon">🪔</span>
          <span>Satguru Arti</span>
          <span className="bj__action-arrow">→</span>
        </Link>

        <a
          href="https://drive.google.com/file/d/your-bhajan-sangrah-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bj__action-btn"
        >
          <span className="bj__action-icon">📖</span>
          <span>Bhajan Sangrah</span>
          <span className="bj__action-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Bhajan;