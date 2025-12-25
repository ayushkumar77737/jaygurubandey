import React, { useState } from "react";
import "./LatestBhajan.css";

const bhajans = [
  {
    id: 1,
    title: "Latest Bhajan – Shri Ram Naam",
    embed: "https://www.youtube.com/embed/SXWtAGqBaNE",
  },
  {
    id: 2,
    title: "Latest Bhajan – Krishna Leela",
    embed: "https://www.youtube.com/embed/QvsZ4SVZhE8",
  },
  {
    id: 3,
    title: "Latest Bhajan – Hanuman Chalisa",
    embed: "https://www.youtube.com/embed/DXhUMvBtc6o",
  },
  {
    id: 4,
    title: "Latest Bhajan – Shiv Bhakti",
    embed: "https://www.youtube.com/embed/F8CcmJ77jYk",
  },
  {
    id: 5,
    title: "Latest Bhajan – Devi Stuti",
    embed: "https://www.youtube.com/embed/uSnPVCL2CzI",
  },
  {
    id: 6,
    title: "Latest Bhajan – Guru Vandana",
    embed: "https://www.youtube.com/embed/zB9IL7md6iI",
  },
  {
    id: 7,
    title: "Latest Bhajan – Ram Bhajan",
    embed: "https://www.youtube.com/embed/tKc0pbP0aSc",
  },
  {
    id: 8,
    title: "Latest Bhajan – Krishna Bhajan",
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
    <section className="latest-bhajan">
      <h1 className="bhajan-title">
        Latest <span>Bhajans</span> 🎵
      </h1>
      <p className="bhajan-subtitle">
        Soulful bhajans filled with devotion & divine music
      </p>

      <div className="bhajan-grid">
        {currentBhajans.map((bhajan) => (
          <div className="bhajan-card" key={bhajan.id}>
            <div className="bhajan-video">
              <iframe
                src={bhajan.embed}
                title={bhajan.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <h3>{bhajan.title}</h3>

            <a
              href={bhajan.embed.replace("embed/", "watch?v=")}
              target="_blank"
              rel="noreferrer"
              className="bhajan-btn"
            >
              Listen Bhajan
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bhajan-pagination">
        <button
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>

        <span>
          Page <strong>{currentPage}</strong> of{" "}
          <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default LatestBhajan;
