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
    {
      id: 4,
      title: "Satsang Video 4",
      embedUrl: "https://www.youtube.com/embed/InNsbUsqhns",
      linkUrl: "https://www.youtube.com/live/InNsbUsqhns?si=fUgfjkVIgswBWght",
    },
    {
      id: 5,
      title: "Satsang Video 5",
      embedUrl: "https://www.youtube.com/embed/_RfgvDG0oHA",
      linkUrl: "https://www.youtube.com/live/_RfgvDG0oHA?si=alZWuIwh1oyfc9mM",
    },
  ];

  return (
    <div className="satsang-container">
      <h1 className="satsang-title">Amrit Wadi</h1>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            {activeVideo === video.id ? (
              <iframe
                src={video.embedUrl + "?autoplay=1"}
                title={video.title}
                allowFullScreen
              ></iframe>
            ) : (
              <div className="thumbnail" onClick={() => setActiveVideo(video.id)}>
                <p>{video.title}</p>
                <button>▶ Play</button>
              </div>
            )}
            <a href={video.linkUrl} target="_blank" rel="noopener noreferrer">
              Watch {video.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Satsang;
