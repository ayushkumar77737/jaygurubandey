import React, { useState } from "react";
import "./Satsang.css";

const Satsang = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Satsang Video 1",
      embedUrl: "https://www.youtube.com/embed/su7VYdVdn-M",
      linkUrl: "https://www.youtube.com/live/su7VYdVdn-M?si=Hf4L8v5t1X3GjmLv",
    },
    {
      id: 2,
      title: "Satsang Video 2",
      embedUrl: "https://www.youtube.com/embed/0gbUwz9uc78",
      linkUrl: "https://www.youtube.com/live/0gbUwz9uc78?si=gbyM2-962bcKQtPK",
    },
    {
      id: 3,
      title: "Satsang Video 3",
      embedUrl: "https://www.youtube.com/embed/X5LPFy50VdY",
      linkUrl: "https://www.youtube.com/live/X5LPFy50VdY?si=C-Rozj2xmj_YDsH7",
    },
    // ... rest of videos
  ];

  // Function to extract videoId from embedUrl
  const getVideoId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1].split("?")[0]; // e.g. su7VYdVdn-M
  };

  return (
    <div className="satsang-container">
      <h1 className="satsang-title">Amrit Wadi</h1>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video) => {
          const videoId = getVideoId(video.embedUrl);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

          return (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video.id)}
            >
              {activeVideo === video.id ? (
                <iframe
                  src={`${video.embedUrl}?autoplay=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="thumbnail">
                  <img
                    src={thumbnailUrl}
                    alt={video.title}
                    className="thumbnail-img"
                  />
                  <button className="play-btn">▶ Play</button>
                </div>
              )}
              <a
                href={video.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch {video.title}
              </a>
            </div>
          );
        })}
      </div>

      {/* Buttons Section */}
      <div className="satsang-buttons">
        <a
          href="https://drive.google.com/file/d/your-anmol-rakhi-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Anmol Rakhi <span className="arrow">→</span>
        </a>

        <a
          href="https://drive.google.com/file/d/your-hari-pagh-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Hari Pagh <span className="arrow">→</span>
        </a>
        <a
          href="https://drive.google.com/file/d/your-anmol-wadi-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Anmol Wadi <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Satsang;
