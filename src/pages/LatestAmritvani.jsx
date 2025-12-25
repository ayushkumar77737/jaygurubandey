import React from "react";
import "./LatestAmritvani.css";

const videos = [
  {
    id: 1,
    title: "Latest Satsang – Vijayawada",
    embed: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    id: 2,
    title: "Latest Satsang – Live Pravachan",
    embed: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Latest Satsang – Goa",
    embed: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const LatestAmritvani = () => {
  return (
    <section className="latest-amritvani">
      <h1 className="latest-title">
        Latest <span>Amritvani</span> 🆕
      </h1>
      <p className="latest-subtitle">
        Most recent satsang videos & divine discourses
      </p>

      <div className="latest-grid">
        {videos.map((video) => (
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
    </section>
  );
};

export default LatestAmritvani;
