import React, { useState } from "react";
import "./LatestAmritvani.css";

const videos = [
  {
    id: 1,
    title: "Latest Satsang – Vijayawada",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 2,
    title: "Latest Satsang – Varanasi",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
  {
    id: 3,
    title: "Latest Satsang – Goa",
    embed: "https://www.youtube.com/embed/X5LPFy50VdY",
  },
  {
    id: 4,
    title: "Latest Satsang – Delhi",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 5,
    title: "Latest Satsang – Mumbai",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
  {
    id: 6,
    title: "Latest Satsang – Jaipur",
    embed: "https://www.youtube.com/embed/X5LPFy50VdY",
  },
  {
    id: 7,
    title: "Latest Satsang – Chennai",
    embed: "https://www.youtube.com/embed/su7VYdVdn-M",
  },
  {
    id: 8,
    title: "Latest Satsang – Kolkata",
    embed: "https://www.youtube.com/embed/InNsbUsqhns",
  },
];

const PER_PAGE = 6;

const LatestAmritvani = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(videos.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + PER_PAGE);

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  return (
    <section className="latest-amritvani">
      <h1 className="latest-title">
        Latest <span>Amritvani</span> 🆕
      </h1>
      <p className="latest-subtitle">
        Most recent satsang videos & divine discourses
      </p>

      <div className="latest-grid">
        {currentVideos.map((video) => (
          <div className="latest-card" key={video.id}>
            <div className="latest-video">
              <iframe
                src={video.embed}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <h3>{video.title}</h3>

            <a
              href={video.embed.replace("embed/", "watch?v=")}
              target="_blank"
              rel="noreferrer"
              className="latest-btn"
            >
              Watch Satsang
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="latest-pagination">
        <button onClick={goPrev} disabled={currentPage === 1}>
          ⬅ Prev
        </button>

        <span>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>

        <button onClick={goNext} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default LatestAmritvani;
