import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Spotlight.css";
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
  const { t } = useTranslation();   // ✅ NEW
  const [selectedType, setSelectedType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  // ✅ inside component to use t()
  const articles = [
    { image: articleImage1, title: t("spotlight.a1_title"), date: t("spotlight.a1_date"), desc: t("spotlight.a1_desc"), download: articleImage1 },
    { image: articleImage2, title: t("spotlight.a2_title"), date: t("spotlight.a2_date"), desc: t("spotlight.a2_desc"), download: articleImage2 },
    { image: articleImage3, title: t("spotlight.a3_title"), date: t("spotlight.a3_date"), desc: t("spotlight.a3_desc"), download: articleImage3 },
    { image: articleImage4, title: t("spotlight.a4_title"), date: t("spotlight.a4_date"), desc: t("spotlight.a4_desc"), download: articleImage4 },
    { image: articleImage5, title: t("spotlight.a5_title"), date: t("spotlight.a5_date"), desc: t("spotlight.a5_desc"), download: articleImage5 },
    { image: articleImage6, title: t("spotlight.a6_title"), date: t("spotlight.a6_date"), desc: t("spotlight.a6_desc"), download: articleImage6 },
    { image: articleImage7, title: t("spotlight.a7_title"), date: t("spotlight.a7_date"), desc: t("spotlight.a7_desc"), download: articleImage7 },
    { image: articleImage8, title: t("spotlight.a8_title"), date: t("spotlight.a8_date"), desc: t("spotlight.a8_desc"), download: articleImage8 },
    { image: articleImage9, title: t("spotlight.a9_title"), date: t("spotlight.a9_date"), desc: t("spotlight.a9_desc"), download: articleImage9 },
    { image: articleImage10, title: t("spotlight.a10_title"), date: t("spotlight.a10_date"), desc: t("spotlight.a10_desc"), download: articleImage10 },
    { image: articleImage11, title: t("spotlight.a11_title"), date: t("spotlight.a11_date"), desc: t("spotlight.a11_desc"), download: articleImage11 },
    { image: articleImage12, title: t("spotlight.a12_title"), date: t("spotlight.a12_date"), desc: t("spotlight.a12_desc"), download: articleImage12 },
    { image: articleImage13, title: t("spotlight.a13_title"), date: t("spotlight.a13_date"), desc: t("spotlight.a13_desc"), download: articleImage13 },
    { image: articleImage14, title: t("spotlight.a14_title"), date: t("spotlight.a14_date"), desc: t("spotlight.a14_desc"), download: articleImage14 },
    { image: articleImage15, title: t("spotlight.a15_title"), date: t("spotlight.a15_date"), desc: t("spotlight.a15_desc"), download: articleImage15 },
    { image: articleImage16, title: t("spotlight.a16_title"), date: t("spotlight.a16_date"), desc: t("spotlight.a16_desc"), download: articleImage16 },
    { image: articleImage17, title: t("spotlight.a17_title"), date: t("spotlight.a17_date"), desc: t("spotlight.a17_desc"), download: articleImage17 },
    { image: articleImage18, title: t("spotlight.a18_title"), date: t("spotlight.a18_date"), desc: t("spotlight.a18_desc"), download: articleImage18 },
  ];

  const interviews = [
    { videoId: "bWdtyhYGKJU", title: t("spotlight.i1_title"), date: t("spotlight.i1_date"), desc: t("spotlight.i1_desc") },
    { videoId: "lrVNRF51aGg", title: t("spotlight.i2_title"), date: t("spotlight.i2_date"), desc: t("spotlight.i2_desc") },
    { videoId: "rOLmh1EgSco", title: t("spotlight.i3_title"), date: t("spotlight.i3_date"), desc: t("spotlight.i3_desc") },
    { videoId: "gDSFlu7J--M", title: t("spotlight.i4_title"), date: t("spotlight.i4_date"), desc: t("spotlight.i4_desc") },
  ];

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);

  const interviewsPerPage = 4;
  const totalInterviewPages = Math.ceil(interviews.length / interviewsPerPage);
  const indexOfLastI = currentPage * interviewsPerPage;
  const indexOfFirstI = indexOfLastI - interviewsPerPage;
  const currentInterviews = interviews.slice(indexOfFirstI, indexOfLastI);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentPage]);

  return (
    <div className="sp-page">
      <div className="sp-bg" aria-hidden="true">
        <span className="sp-bg__glow sp-bg__glow--1" />
        <span className="sp-bg__glow sp-bg__glow--2" />
        <span className="sp-bg__glow sp-bg__glow--3" />
      </div>

      {/* Header */}
      <div className="sp-header">
        <div className="sp-header__ornament">
          <span className="sp-orn-line" /><span className="sp-orn-icon">📰</span><span className="sp-orn-line" />
        </div>
        <h1 className="sp-header__title">{t("spotlight.title")}</h1>
        <div className="sp-header__rule" />
        <p className="sp-header__subtitle">{t("spotlight.subtitle")}</p>
        <div className="sp-dropdown-wrap">
          <div className="sp-dropdown-box">
            <select value={selectedType} onChange={(e) => { setSelectedType(e.target.value); setCurrentPage(1); }} className="sp-dropdown">
              <option value="" disabled hidden>{t("spotlight.select_placeholder")}</option>
              <option value="article">{t("spotlight.opt_articles")}</option>
              <option value="interview">{t("spotlight.opt_interviews")}</option>
            </select>
            <span className="sp-dropdown-arrow">▾</span>
          </div>
        </div>
      </div>

      {/* Prompt */}
      {selectedType === "" && <p className="sp-prompt">{t("spotlight.prompt")}</p>}

      {/* Articles */}
      {selectedType === "article" && (
        <>
          <div className="sp-grid sp-grid--animate" key={`article-${currentPage}`}>
            {currentArticles.map((item, index) => (
              <div className="sp-card sp-card--animate" key={index} style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="sp-card__img-wrap">
                  <img src={item.image} alt={item.title} className="sp-card__img" />
                  <div className="sp-card__img-overlay" />
                  <span className="sp-card__badge">{t("spotlight.badge_article")}</span>
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
                    {t("spotlight.download_btn")}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-pagination">
            <button className="sp-pagination__btn sp-pagination__btn--prev" onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>{t("spotlight.prev")}</button>
            <div className="sp-pagination__info">
              <span className="sp-pagination__cur">{currentPage}</span><span className="sp-pagination__sep">/</span><span className="sp-pagination__tot">{totalPages}</span>
            </div>
            <button className="sp-pagination__btn sp-pagination__btn--next" onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>{t("spotlight.next")}</button>
          </div>
        </>
      )}

      {/* Interviews */}
      {selectedType === "interview" && (
        <>
          <div className="sp-grid sp-grid--animate" key={`interview-${currentPage}`}>
            {currentInterviews.map((item, index) => (
              <div className="sp-card sp-card--animate" key={index} style={{ animationDelay: `${index * 0.12}s` }}>
                <div className="sp-video-wrap">
                  <iframe loading="lazy" src={`https://www.youtube.com/embed/${item.videoId}`} title={item.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <span className="sp-card__badge sp-card__badge--video">{t("spotlight.badge_interview")}</span>
                </div>
                <div className="sp-card__body">
                  <h2 className="sp-card__title">{item.title}</h2>
                  <div className="sp-card__rule" />
                  <span className="sp-card__date">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {item.date}
                  </span>
                  <p className="sp-card__desc">{item.desc}</p>
                  <a href={`https://youtu.be/${item.videoId}`} target="_blank" rel="noopener noreferrer" className="sp-card__btn">
                    {t("spotlight.watch_btn")}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-pagination">
            <button className="sp-pagination__btn sp-pagination__btn--prev" onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>{t("spotlight.prev")}</button>
            <div className="sp-pagination__info">
              <span className="sp-pagination__cur">{currentPage}</span><span className="sp-pagination__sep">/</span><span className="sp-pagination__tot">{totalInterviewPages}</span>
            </div>
            <button className="sp-pagination__btn sp-pagination__btn--next" onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalInterviewPages}>{t("spotlight.next")}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Spotlight;