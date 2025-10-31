import React, { useState } from "react";
import "./Spotlight.css";

// ===== Import all article images =====
import articleImage1 from "../assets/article1.jpg";
import articleImage2 from "../assets/article2.jpg";
import articleImage3 from "../assets/article3.jpg";
import articleImage4 from "../assets/article4.jpg";

const Spotlight = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="spotlight-page">
      {/* ===== Header Section ===== */}
      <div className="spotlight-header">
        <h1>📰 Spotlight</h1>
        <div className="underline"></div>
        <p>
          Featured newspaper articles and interviews highlighting Guruji’s divine work and message.
        </p>

        {/* ===== Dropdown ===== */}
        <div className="dropdown-container">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="spotlight-dropdown"
          >
            <option value="" disabled hidden>
              -- Select Type --
            </option>
            <option value="article">Articles</option>
            <option value="interview">Interviews</option>
          </select>
        </div>
      </div>

      {/* ===== Prompt Message ===== */}
      {selectedType === "" && (
        <p className="select-message">
          Please select an option from the dropdown above to view Guruji’s articles or interviews.
        </p>
      )}

      {/* ===== Articles Section ===== */}
      {selectedType === "article" && (
        <div className="spotlight-grid">
          {/* ==== Article 1 ==== */}
          <div className="spotlight-card">
            <img src={articleImage1} alt="Guruji Newspaper Article" className="spotlight-img" />
            <div className="spotlight-content">
              <h2>Guruji’s Teachings Featured in The Spiritual Times</h2>
              <span className="spotlight-date">Published on: October 28, 2025</span>
              <p>
                This article beautifully covers Guruji’s spiritual journey, his mission
                of spreading love, devotion, and peace, and how his divine guidance
                continues to transform countless lives across the globe.
              </p>
              <a href={articleImage1} download="Guruji_Article_Image_1.jpg" className="read-btn">
                Download Full Article
              </a>
            </div>
          </div>

          {/* ==== Article 2 ==== */}
          <div className="spotlight-card">
            <img src={articleImage2} alt="Guruji Newspaper Article" className="spotlight-img" />
            <div className="spotlight-content">
              <h2>Guruji’s Wisdom Shines in The Divine Herald</h2>
              <span className="spotlight-date">Published on: October 15, 2025</span>
              <p>
                A deep exploration of Guruji’s spiritual philosophy, this article shares
                his teachings on inner peace, compassion, and self-realization that have
                touched the hearts of devotees worldwide.
              </p>
              <a href={articleImage2} download="Guruji_Article_Image_2.jpg" className="read-btn">
                Download Full Article
              </a>
            </div>
          </div>

          {/* ==== Article 3 ==== */}
          <div className="spotlight-card">
            <img src={articleImage3} alt="Guruji Newspaper Article" className="spotlight-img" />
            <div className="spotlight-content">
              <h2>Guruji’s Message of Love Reaches New Heights</h2>
              <span className="spotlight-date">Published on: September 30, 2025</span>
              <p>
                The article highlights Guruji’s efforts in spreading divine love through
                his global outreach and his teachings that unify people beyond religion and boundaries.
              </p>
              <a href={articleImage3} download="Guruji_Article_Image_3.jpg" className="read-btn">
                Download Full Article
              </a>
            </div>
          </div>

          {/* ==== Article 4 ==== */}
          <div className="spotlight-card">
            <img src={articleImage4} alt="Guruji Newspaper Article" className="spotlight-img" />
            <div className="spotlight-content">
              <h2>The Path of Devotion: Guruji’s Inspiring Story</h2>
              <span className="spotlight-date">Published on: September 18, 2025</span>
              <p>
                A touching story describing Guruji’s divine journey and how his guidance
                has brought transformation and light into the lives of many.
              </p>
              <a href={articleImage4} download="Guruji_Article_Image_4.jpg" className="read-btn">
                Download Full Article
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ===== Interviews Section ===== */}
      {selectedType === "interview" && (
        <div className="spotlight-grid">
          <div className="spotlight-card">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/bWdtyhYGKJU"
                title="Guruji Interview Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="spotlight-content">
              <h2>Exclusive Interview with Guruji on Divine Vision</h2>
              <span className="spotlight-date">Published on: October 10, 2025</span>
              <p>
                In this inspiring interview, Guruji shares insights on devotion,
                compassion, and the spiritual path, guiding devotees toward peace and
                self-realization.
              </p>
              <a
                href="https://youtu.be/bWdtyhYGKJU?si=xKJzkiFcR7CSXWEu"
                target="_blank"
                rel="noopener noreferrer"
                className="read-btn"
              >
                Watch Full Interview
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spotlight;
