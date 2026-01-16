import React, { useState, useEffect } from "react";
import "./Spotlight.css";

// ===== Import all article images =====
import articleImage1 from "../assets/article1.jpg";
import articleImage2 from "../assets/article2.jpg";
import articleImage3 from "../assets/article3.jpg";
import articleImage4 from "../assets/article4.jpg";
import articleImage5 from "../assets/article5.jpg";
import articleImage6 from "../assets/article6.jpg";
import articleImage7 from "../assets/article7.jpg";
import articleImage8 from "../assets/article8.jpg";
import articleImage9 from "../assets/article9.jpg";
import articleImage10 from "../assets/article10.jpg";
import articleImage11 from "../assets/article11.jpg";
import articleImage12 from "../assets/article12.jpg";
import articleImage13 from "../assets/article13.jpg";
import articleImage14 from "../assets/article14.jpg";
import articleImage15 from "../assets/article15.jpg";
import articleImage16 from "../assets/article16.jpg";
import articleImage17 from "../assets/article17.jpg";
import articleImage18 from "../assets/article18.jpg";

const Spotlight = () => {
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  // ====== Articles Data ======
  const articles = [
    { image: articleImage1, title: "Guruji’s Teachings Featured in The Spiritual Times", date: "October 28, 2025", desc: "This article beautifully covers Guruji’s spiritual journey...", download: articleImage1 },
    { image: articleImage2, title: "Guruji’s Wisdom Shines in The Divine Herald", date: "October 15, 2025", desc: "A deep exploration of Guruji’s spiritual philosophy...", download: articleImage2 },
    { image: articleImage3, title: "Guruji’s Message of Love Reaches New Heights", date: "September 30, 2025", desc: "The article highlights Guruji’s efforts in spreading divine love...", download: articleImage3 },
    { image: articleImage4, title: "The Path of Devotion: Guruji’s Inspiring Story", date: "September 18, 2025", desc: "A touching story describing Guruji’s divine journey...", download: articleImage4 },
    { image: articleImage5, title: "Guruji’s Message of Universal Oneness", date: "September 10, 2025", desc: "An inspiring feature about Guruji’s teachings on harmony...", download: articleImage5 },
    { image: articleImage6, title: "Guruji’s Vision for Global Peace", date: "September 3, 2025", desc: "This article highlights Guruji’s continuous efforts...", download: articleImage6 },
    { image: articleImage7, title: "The Power of Devotion: Guruji’s Life Lessons", date: "August 25, 2025", desc: "Guruji shares how devotion and compassion...", download: articleImage7 },
    { image: articleImage8, title: "Guruji’s Light: A Beacon of Hope", date: "August 15, 2025", desc: "An inspiring story about Guruji’s divine presence...", download: articleImage8 },
    { image: articleImage9, title: "Divine Teachings: Guruji’s Path of Purity", date: "August 1, 2025", desc: "This piece explores Guruji’s call for purity...", download: articleImage9 },
    { image: articleImage10, title: "Guruji’s Journey Beyond Boundaries", date: "July 20, 2025", desc: "A reflection on Guruji’s journey from humble beginnings...", download: articleImage10 },
    { image: articleImage11, title: "The Healing Power of Guruji’s Blessings", date: "July 10, 2025", desc: "Heartfelt testimonials from devotees...", download: articleImage11 },
    { image: articleImage12, title: "Guruji’s Guidance in Modern Life", date: "June 28, 2025", desc: "A thoughtful feature on how Guruji’s teachings help...", download: articleImage12 },
    { image: articleImage13, title: "Path to Enlightenment: Guruji’s Message to Youth", date: "June 15, 2025", desc: "Guruji encourages young minds to embrace spirituality...", download: articleImage13 },
    { image: articleImage14, title: "Guruji’s Teachings Touch Millions", date: "June 2, 2025", desc: "A powerful article showcasing the impact...", download: articleImage14 },
    { image: articleImage15, title: "The Divine Path: Guruji’s Wisdom for All", date: "May 20, 2025", desc: "Guruji’s timeless message reminds humanity...", download: articleImage15 },
    { image: articleImage16, title: "Guruji’s Compassion Transforms Lives", date: "May 8, 2025", desc: "Real-life stories of transformation inspired by Guruji...", download: articleImage16 },
    { image: articleImage17, title: "Spiritual Awakening: Guruji’s Global Movement", date: "April 25, 2025", desc: "An overview of Guruji’s global outreach...", download: articleImage17 },
    { image: articleImage18, title: "Guruji’s Message of Eternal Love", date: "April 10, 2025", desc: "Guruji’s final message emphasizes divine love...", download: articleImage18 },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="spotlight-page">
      {/* ===== Header Section ===== */}
      <div className="spotlight-header">
        <h1>📰 Spotlight</h1>
        <div className="underline"></div>
        <p>Featured newspaper articles and interviews highlighting Guruji’s divine work and message.</p>

        {/* ===== Dropdown ===== */}
        <div className="dropdown-container">
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setCurrentPage(1);
            }}
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
        <>
          <div className="spotlight-grid" key={`${selectedType}-${currentPage}`}>
            {currentArticles.map((item, index) => (
              <div
                className="spotlight-card animate-card"
                key={index}
                style={{ animationDelay: `${index * 0.12}s` }}
              >

                <img src={item.image} alt={item.title} className="spotlight-img" />
                <div className="spotlight-content">
                  <h2>{item.title}</h2>
                  <span className="spotlight-date">Published on: {item.date}</span>
                  <p>{item.desc}</p>
                  <a href={item.download} download className="read-btn">
                    Download Full Article
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Scoped Pagination ===== */}
          <div className="spotlight-pagination">
            <button
              className="spotlight-page-btn prev"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              ⬅ Prev
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="spotlight-page-btn next"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Next ➡
            </button>
          </div>
        </>
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
                In this inspiring interview, Guruji shares insights on devotion, compassion, and the spiritual path,
                guiding devotees toward peace and self-realization.
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
