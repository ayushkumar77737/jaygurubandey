import React from "react";
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

  return (
    <div className="bhajan-container">
      <h1 className="bhajan-title">Bhajan Moments</h1>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <iframe
              src={video.embedUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
            <a href={video.linkUrl} target="_blank" rel="noopener noreferrer">
              Listen {video.title}
            </a>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="bhajan-buttons">
        <a
          href="https://drive.google.com/file/d/1OGK0CvhcMuOLFovRhHJUB8y6ew8VmnRX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Satguru Chalisa <span className="arrow">→</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1cC-yBNHHyyvnal3NNsQdmc1iQcaOiAp6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Satguru Arti <span className="arrow">→</span>
        </a>

        {/* New Bhajan Sangrah Button */}
        <a
          href="https://drive.google.com/file/d/your-bhajan-sangrah-link/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Bhajan Sangrah<span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default Bhajan;
