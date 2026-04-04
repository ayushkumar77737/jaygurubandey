import React, { useState } from "react";
import "./LatestBhajan.css";

const bhajans = [
  {
    id: 1,
    title: "Shri Ram Naam",
    embed: "https://www.youtube.com/embed/SXWtAGqBaNE",
  },
  {
    id: 2,
    title: "Krishna Leela",
    embed: "https://www.youtube.com/embed/QvsZ4SVZhE8",
  },
  {
    id: 3,
    title: "Hanuman Chalisa",
    embed: "https://www.youtube.com/embed/DXhUMvBtc6o",
  },
  {
    id: 4,
    title: "Shiv Bhakti",
    embed: "https://www.youtube.com/embed/F8CcmJ77jYk",
  },
  {
    id: 5,
    title: "Devi Stuti",
    embed: "https://www.youtube.com/embed/uSnPVCL2CzI",
  },
  {
    id: 6,
    title: "Guru Vandana",
    embed: "https://www.youtube.com/embed/zB9IL7md6iI",
  },
  {
    id: 7,
    title: "Ram Bhajan",
    embed: "https://www.youtube.com/embed/tKc0pbP0aSc",
  },
  {
    id: 8,
    title: "Krishna Bhajan",
    embed: "https://www.youtube.com/embed/MjVr70JW2gA",
  },
];

const PER_PAGE = 6;

const LatestBhajan = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bhajans.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentBhajans = bhajans.slice(startIndex, startIndex + PER_PAGE);

  return (
    <section className="lb__section">
      {/* Decorative blobs */}
      <div className="lb__blob lb__blob--a" />
      <div className="lb__blob lb__blob--b" />

      {/* Header */}
      <div className="lb__header">
        <div className="lb__header-icon">🎵</div>
        <h1 className="lb__title">
          Latest <span className="lb__title-accent">Bhajans</span>
        </h1>
        <p className="lb__subtitle">
          Soulful melodies filled with devotion &amp; divine music
        </p>
        <div className="lb__divider" />
      </div>

      {/* Grid */}
      <div className="lb__grid">
        {currentBhajans.map((bhajan, index) => (
          <div
            className="lb__card"
            key={bhajan.id}
            style={{ animationDelay: `${index * 0.075}s` }}
          >
            <div className="lb__video-wrap">
              <iframe
                src={bhajan.embed}
                title={bhajan.title}
                frameBorder="0"
                allowFullScreen
                className="lb__iframe"
              />
              <div className="lb__video-overlay" />
            </div>

            <div className="lb__card-body">
              <span className="lb__card-tag">Bhajan</span>
              <h3 className="lb__card-title">{bhajan.title}</h3>
              <a
                href={bhajan.embed.replace("embed/", "watch?v=")}
                target="_blank"
                rel="noreferrer"
                className="lb__listen-btn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="lb__pagination">
        <button
          className="lb__pg-btn"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>

        <div className="lb__pg-info">
          <span className="lb__pg-current">{currentPage}</span>
          <span className="lb__pg-slash">/</span>
          <span className="lb__pg-total">{totalPages}</span>
        </div>

        <button
          className="lb__pg-btn"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default LatestBhajan;