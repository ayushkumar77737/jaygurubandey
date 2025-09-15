import React, { useEffect, useRef } from "react";
import "./Satsang.css";

const Satsang = () => {
  const iframesRef = useRef([]);

  const videos = [
    { id: 1, title: "Satsang Video 1", embedUrl: "https://www.youtube.com/embed/su7VYdVdn-M?enablejsapi=1" },
    { id: 2, title: "Satsang Video 2", embedUrl: "https://www.youtube.com/embed/0gbUwz9uc78?enablejsapi=1" },
    { id: 3, title: "Satsang Video 3", embedUrl: "https://www.youtube.com/embed/X5LPFy50VdY?enablejsapi=1" },
    { id: 4, title: "Satsang Video 4", embedUrl: "https://www.youtube.com/embed/InNsbUsqhns?enablejsapi=1" },
    { id: 5, title: "Satsang Video 5", embedUrl: "https://www.youtube.com/embed/_RfgvDG0oHA?enablejsapi=1" },
    { id: 6, title: "Satsang Video 6", embedUrl: "https://www.youtube.com/embed/MqJaPpO7yek?enablejsapi=1" },
    { id: 7, title: "Satsang Video 7", embedUrl: "https://www.youtube.com/embed/ukHXW8T_8z4?enablejsapi=1" },
    { id: 8, title: "Satsang Video 8", embedUrl: "https://www.youtube.com/embed/gxKxXbX4NiY?enablejsapi=1" },
    { id: 9, title: "Satsang Video 9", embedUrl: "https://www.youtube.com/embed/Bm03O_ViuMY?enablejsapi=1" },
    { id: 10, title: "Satsang Video 10", embedUrl: "https://www.youtube.com/embed/WalaJzM6pfY?enablejsapi=1" },
  ];

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === "string" && event.data.includes("playVideo")) {
        // stop all other videos
        iframesRef.current.forEach((iframe) => {
          if (iframe && iframe.contentWindow !== event.source) {
            iframe.contentWindow.postMessage(
              JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
              "*"
            );
          }
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="satsang-container">
      <h1 className="satsang-title">Amrit Wadi</h1>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={video.id} className="video-card">
            <iframe
              ref={(el) => (iframesRef.current[index] = el)}
              src={video.embedUrl}
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="satsang-buttons">
        <a href="https://drive.google.com/file/d/your-anmol-rakhi-link/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
          Anmol Rakhi <span className="arrow">→</span>
        </a>
        <a href="https://drive.google.com/file/d/your-hari-pagh-link/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
          Hari Pagh <span className="arrow">→</span>
        </a>
        <a href="https://drive.google.com/file/d/your-anmol-wadi-link/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
          Anmol Wadi <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Satsang;
