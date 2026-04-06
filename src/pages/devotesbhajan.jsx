import React, { useState } from "react";
import "./devotesbhajan.css";

const bhajanData = {
  "Ankit Ji": [
    { id: 1, title: "Ankit Ji Bhajan 1", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 2, title: "Ankit Ji Bhajan 2", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 3, title: "Ankit Ji Bhajan 3", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 4, title: "Ankit Ji Bhajan 4", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 5, title: "Ankit Ji Bhajan 5", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 6, title: "Ankit Ji Bhajan 6", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 7, title: "Ankit Ji Bhajan 7", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 8, title: "Ankit Ji Bhajan 8", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 9, title: "Ankit Ji Bhajan 9", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 10, title: "Ankit Ji Bhajan 10", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 11, title: "Ankit Ji Bhajan 11", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
  ],
  "Rohit Ji": [
    { id: 1, title: "Rohit Ji Bhajan 1", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 2, title: "Rohit Ji Bhajan 2", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 3, title: "Rohit Ji Bhajan 3", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 4, title: "Rohit Ji Bhajan 4", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
  ],
  "Pooja Ji": [
    { id: 1, title: "Pooja Ji Bhajan 1", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 2, title: "Pooja Ji Bhajan 2", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 3, title: "Pooja Ji Bhajan 3", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
    { id: 4, title: "Pooja Ji Bhajan 4", embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q" },
  ],
};

const singers = Object.keys(bhajanData);

const DevotesBhajan = () => {
  const [selectedSinger, setSelectedSinger] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 6;
  const videos = selectedSinger ? bhajanData[selectedSinger] : [];
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  const handleSingerSelect = (singer) => {
    setSelectedSinger(singer);
    setCurrentPage(1);
  };

  return (
    <div className="dvbhajan__page">

      {/* Background orbs */}
      <div className="dvbhajan__orb dvbhajan__orb--1" />
      <div className="dvbhajan__orb dvbhajan__orb--2" />
      <div className="dvbhajan__orb dvbhajan__orb--3" />

      {/* ===== Hero ===== */}
      <header className="dvbhajan__hero">
        <div className="dvbhajan__hero-badge">Devotee Offerings</div>
        <h1 className="dvbhajan__hero-title">
          <span className="dvbhajan__pray">🙏</span>
          Guruji Devotees Bhajan Seva
          <span className="dvbhajan__pray">🙏</span>
        </h1>
        <p className="dvbhajan__hero-sub">
          Soulful bhajans sung with love and devotion by Guruji's disciples
        </p>
        <div className="dvbhajan__hero-divider">
          <span className="dvbhajan__div-line" />
          <span className="dvbhajan__div-symbol">✦</span>
          <span className="dvbhajan__div-line" />
        </div>
      </header>

      {/* ===== Singer Dropdown ===== */}
      <div className="dvbhajan__singer-wrap">
        <p className="dvbhajan__singer-label">Select a Devotee Singer</p>
        <div className="dvbhajan__select-wrap">
          <select
            className="dvbhajan__select"
            value={selectedSinger}
            onChange={(e) => handleSingerSelect(e.target.value)}
          >
            <option value="" disabled hidden>— Choose a Singer —</option>
            {singers.map((singer) => (
              <option key={singer} value={singer}>{singer}</option>
            ))}
          </select>
          <span className="dvbhajan__select-arrow">▾</span>
        </div>
      </div>

      {/* ===== Video Grid ===== */}
      <div className="dvbhajan__grid-wrap">
        {!selectedSinger ? (
          <div className="dvbhajan__empty">
            <div className="dvbhajan__empty-icon">🎵</div>
            <p className="dvbhajan__empty-title">Choose a Singer Above</p>
            <p className="dvbhajan__empty-sub">
              Select a devotee singer to listen to their heartfelt bhajans 🙏
            </p>
          </div>
        ) : (
          <>
            <div className="dvbhajan__grid-header">
              <span className="dvbhajan__grid-singer">{selectedSinger}</span>
              <span className="dvbhajan__grid-count">
                {videos.length} Bhajan{videos.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="dvbhajan__grid">
              {currentVideos.map((video, i) => (
                <div
                  key={video.id}
                  className="dvbhajan__card"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="dvbhajan__card-frame-wrap">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      allowFullScreen
                      className="dvbhajan__iframe"
                    />
                  </div>
                  <div className="dvbhajan__card-info">
                    <span className="dvbhajan__card-badge">Bhajan</span>
                    <p className="dvbhajan__card-title">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ===== Pagination ===== */}
      {selectedSinger && totalPages > 1 && (
        <div className="dvbhajan__pagination">
          <button
            className="dvbhajan__pg-btn"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ← Prev
          </button>

          <div className="dvbhajan__pg-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`dvbhajan__pg-dot ${currentPage === i + 1 ? "dvbhajan__pg-dot--active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              />
            ))}
          </div>

          <span className="dvbhajan__pg-info">
            {currentPage} / {totalPages}
          </span>

          <button
            className="dvbhajan__pg-btn"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}

      {/* ===== Footer ===== */}
      <div className="dvbhajan__footer">
        <span className="dvbhajan__pray">🙏</span>
        <span>Jai Gurubande</span>
        <span className="dvbhajan__pray">🙏</span>
      </div>
    </div>
  );
};

export default DevotesBhajan;