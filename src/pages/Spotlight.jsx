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
    { image: articleImage1, title: "Guruji's Teachings Featured in The Spiritual Times", date: "October 28, 2025", desc: "This article beautifully covers Guruji's spiritual journey...", download: articleImage1 },
    { image: articleImage2, title: "Guruji's Wisdom Shines in The Divine Herald", date: "October 15, 2025", desc: "A deep exploration of Guruji's spiritual philosophy...", download: articleImage2 },
    { image: articleImage3, title: "Guruji's Message of Love Reaches New Heights", date: "September 30, 2025", desc: "The article highlights Guruji's efforts in spreading divine love...", download: articleImage3 },
    { image: articleImage4, title: "The Path of Devotion: Guruji's Inspiring Story", date: "September 18, 2025", desc: "A touching story describing Guruji's divine journey...", download: articleImage4 },
    { image: articleImage5, title: "Guruji's Message of Universal Oneness", date: "September 10, 2025", desc: "An inspiring feature about Guruji's teachings on harmony...", download: articleImage5 },
    { image: articleImage6, title: "Guruji's Vision for Global Peace", date: "September 3, 2025", desc: "This article highlights Guruji's continuous efforts...", download: articleImage6 },
    { image: articleImage7, title: "The Power of Devotion: Guruji's Life Lessons", date: "August 25, 2025", desc: "Guruji shares how devotion and compassion...", download: articleImage7 },
    { image: articleImage8, title: "Guruji's Light: A Beacon of Hope", date: "August 15, 2025", desc: "An inspiring story about Guruji's divine presence...", download: articleImage8 },
    { image: articleImage9, title: "Divine Teachings: Guruji's Path of Purity", date: "August 1, 2025", desc: "This piece explores Guruji's call for purity...", download: articleImage9 },
    { image: articleImage10, title: "Guruji's Journey Beyond Boundaries", date: "July 20, 2025", desc: "A reflection on Guruji's journey from humble beginnings...", download: articleImage10 },
    { image: articleImage11, title: "The Healing Power of Guruji's Blessings", date: "July 10, 2025", desc: "Heartfelt testimonials from devotees...", download: articleImage11 },
    { image: articleImage12, title: "Guruji's Guidance in Modern Life", date: "June 28, 2025", desc: "A thoughtful feature on how Guruji's teachings help...", download: articleImage12 },
    { image: articleImage13, title: "Path to Enlightenment: Guruji's Message to Youth", date: "June 15, 2025", desc: "Guruji encourages young minds to embrace spirituality...", download: articleImage13 },
    { image: articleImage14, title: "Guruji's Teachings Touch Millions", date: "June 2, 2025", desc: "A powerful article showcasing the impact...", download: articleImage14 },
    { image: articleImage15, title: "The Divine Path: Guruji's Wisdom for All", date: "May 20, 2025", desc: "Guruji's timeless message reminds humanity...", download: articleImage15 },
    { image: articleImage16, title: "Guruji's Compassion Transforms Lives", date: "May 8, 2025", desc: "Real-life stories of transformation inspired by Guruji...", download: articleImage16 },
    { image: articleImage17, title: "Spiritual Awakening: Guruji's Global Movement", date: "April 25, 2025", desc: "An overview of Guruji's global outreach...", download: articleImage17 },
    { image: articleImage18, title: "Guruji's Message of Eternal Love", date: "April 10, 2025", desc: "Guruji's final message emphasizes divine love...", download: articleImage18 },
  ];

  // ====== Interviews Data ======
  const interviews = [
    {
      videoId: "bWdtyhYGKJU",
      title: "Healing Lives Through Spirituality and Ayurveda at Jai Gurubande Ashram",
      date: "October 10, 2025",
      desc: "In this inspiring interview, Guruji shares how spirituality and Ayurveda work together to heal the mind and body..."
    },
    {
      videoId: "lrVNRF51aGg",
      title: "Do Gods Exist? What Swami Jai Gurubande Ji Maharaj Says and What Science Believes",
      date: "January 14, 2026",
      desc: "Guruji shares deep insights on the existence of God, the role of faith, and how science views divinity..."
    },
    {
      videoId: "rOLmh1EgSco",
      title: "Today, Swami Jai Gurubande Ji Maharaj spoke profoundly about religion, society, and humanity.",
      date: "February 23, 2026",
      desc: "Guruji shares profound insights on religion, social responsibility, and the values of humanity..."
    },
    {
      videoId: "gDSFlu7J--M",
      title: "Nectar-like spiritual discourse by Jai Gurubande Ji Maharaj on the auspicious occasion of Holi.",
      date: "March 04, 2026",
      desc: "On the sacred occasion of Holi, Jai Gurubande Ji Maharaj showers divine nectar through his spiritual words, inspiring devotees with wisdom, devotion, and the message of love and righteousness."
    }
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  const interviewsPerPage = 4;
  const totalInterviewPages = Math.ceil(interviews.length / interviewsPerPage);
  const indexOfLastInterview = currentPage * interviewsPerPage;
  const indexOfFirstInterview = indexOfLastInterview - interviewsPerPage;
  const currentInterviews = interviews.slice(indexOfFirstInterview, indexOfLastInterview);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="sp-page">

      {/* Ambient background glows */}
      <div className="sp-bg" aria-hidden="true">
        <span className="sp-bg__glow sp-bg__glow--1" />
        <span className="sp-bg__glow sp-bg__glow--2" />
        <span className="sp-bg__glow sp-bg__glow--3" />
      </div>

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="sp-header">
        <div className="sp-header__ornament">
          <span className="sp-orn-line" />
          <span className="sp-orn-icon">📰</span>
          <span className="sp-orn-line" />
        </div>
        <h1 className="sp-header__title">Spotlight</h1>
        <div className="sp-header__rule" />
        <p className="sp-header__subtitle">
          Featured newspaper articles and interviews highlighting Guruji's divine work and message.
        </p>

        {/* Dropdown */}
        <div className="sp-dropdown-wrap">
          <div className="sp-dropdown-box">
            <select
              value={selectedType}
              onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }}
              className="sp-dropdown"
            >
              <option value="" disabled hidden>— Select Type —</option>
              <option value="article">Articles</option>
              <option value="interview">Interviews</option>
            </select>
            <span className="sp-dropdown-arrow">▾</span>
          </div>
        </div>
      </div>

      {/* ── Prompt ──────────────────────────────────────────── */}
      {selectedType === "" && (
        <p className="sp-prompt">
          Please select an option from the dropdown above to view Guruji's articles or interviews.
        </p>
      )}

      {/* ── Articles ────────────────────────────────────────── */}
      {selectedType === "article" && (
        <>
          <div className="sp-grid sp-grid--animate" key={`article-${currentPage}`}>
            {currentArticles.map((item, index) => (
              <div
                className="sp-card sp-card--animate"
                key={index}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="sp-card__img-wrap">
                  <img src={item.image} alt={item.title} className="sp-card__img" />
                  <div className="sp-card__img-overlay" />
                  <span className="sp-card__badge">Article</span>
                </div>
                <div className="sp-card__body">
                  <h2 className="sp-card__title">{item.title}</h2>
                  <div className="sp-card__rule" />
                  <span className="sp-card__date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {item.date}
                  </span>
                  <p className="sp-card__desc">{item.desc}</p>
                  <a href={item.download} download className="sp-card__btn">
                    Download Full Article
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="sp-pagination">
            <button
              className="sp-pagination__btn sp-pagination__btn--prev"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >← Prev</button>
            <div className="sp-pagination__info">
              <span className="sp-pagination__cur">{currentPage}</span>
              <span className="sp-pagination__sep">/</span>
              <span className="sp-pagination__tot">{totalPages}</span>
            </div>
            <button
              className="sp-pagination__btn sp-pagination__btn--next"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >Next →</button>
          </div>
        </>
      )}

      {/* ── Interviews ──────────────────────────────────────── */}
      {selectedType === "interview" && (
        <>
          <div className="sp-grid sp-grid--animate" key={`interview-${currentPage}`}>
            {currentInterviews.map((item, index) => (
              <div
                className="sp-card sp-card--animate"
                key={index}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="sp-video-wrap">
                  <iframe
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <span className="sp-card__badge sp-card__badge--video">Interview</span>
                </div>
                <div className="sp-card__body">
                  <h2 className="sp-card__title">{item.title}</h2>
                  <div className="sp-card__rule" />
                  <span className="sp-card__date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {item.date}
                  </span>
                  <p className="sp-card__desc">{item.desc}</p>
                  <a
                    href={`https://youtu.be/${item.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-card__btn"
                  >
                    Watch Full Interview
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="sp-pagination">
            <button
              className="sp-pagination__btn sp-pagination__btn--prev"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >← Prev</button>
            <div className="sp-pagination__info">
              <span className="sp-pagination__cur">{currentPage}</span>
              <span className="sp-pagination__sep">/</span>
              <span className="sp-pagination__tot">{totalInterviewPages}</span>
            </div>
            <button
              className="sp-pagination__btn sp-pagination__btn--next"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalInterviewPages}
            >Next →</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Spotlight;