import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Blog.css";
import blog1a from "../assets/photo4.jpg";
import blog1b from "../assets/photo25.jpg";
import blog2a from "../assets/photo3.jpg";
import blog2b from "../assets/photo27.jpg";
import blog2c from "../assets/photo28.jpg";
import blog2d from "../assets/photo29.jpg";
import blog3a from "../assets/photo5.jpg";
import blog3b from "../assets/photo26.jpg";
import blog3c from "../assets/photo30.jpg";

const Blog = () => {
  const { t } = useTranslation();   // ✅ NEW
  const location = useLocation();
  const savedPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [currentImages, setCurrentImages] = useState({});

  // ✅ posts inside component to use t()
  const posts = [
    { id: 1, images: [blog1a, blog1b], title: t("blog.p1_title"), date: t("blog.p1_date"), author: t("blog.p1_author"), description: [t("blog.p1_d1"), t("blog.p1_d2")] },
    { id: 2, images: [blog2a, blog2b, blog2c, blog2d], title: t("blog.p2_title"), date: t("blog.p2_date"), author: t("blog.p2_author"), description: [t("blog.p2_d1"), t("blog.p2_d2")] },
    { id: 3, images: [blog3a, blog3b, blog3c], title: t("blog.p3_title"), date: t("blog.p3_date"), author: t("blog.p3_author"), description: [t("blog.p3_d1"), t("blog.p3_d2")] },
    { id: 4, images: [blog1a, blog1b], title: t("blog.p4_title"), date: t("blog.p4_date"), author: t("blog.p4_author"), description: [t("blog.p4_d1"), t("blog.p4_d2")] },
    { id: 5, images: [blog2a, blog2b, blog2c, blog2d], title: t("blog.p5_title"), date: t("blog.p5_date"), author: t("blog.p5_author"), description: [t("blog.p5_d1"), t("blog.p5_d2")] },
    { id: 6, images: [blog3a, blog3b, blog3c], title: t("blog.p6_title"), date: t("blog.p6_date"), author: t("blog.p6_author"), description: [t("blog.p6_d1"), t("blog.p6_d2")] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const updated = { ...prev };
        posts.forEach((post) => {
          updated[post.id] = ((prev[post.id] || 0) + 1) % post.images.length;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [posts.length]);

  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => { if (currentPage > 1) { setCurrentPage(currentPage - 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  const handleNext = () => { if (currentPage < totalPages) { setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };

  return (
    <div className="sb-page">
      <div className="sb-bg-decoration" aria-hidden="true">
        <span className="sb-petal sb-petal--1">✿</span>
        <span className="sb-petal sb-petal--2">❁</span>
        <span className="sb-petal sb-petal--3">✿</span>
        <span className="sb-petal sb-petal--4">❁</span>
      </div>

      <header className="sb-header">
        <div className="sb-header__ornament">
          <span className="sb-ornament-line"></span>
          <span className="sb-ornament-icon">🪷</span>
          <span className="sb-ornament-line"></span>
        </div>
        <h2 className="sb-header__title">{t("blog.header_title")}</h2>
        <p className="sb-header__subtitle">{t("blog.header_subtitle")}</p>
        <div className="sb-header__ornament sb-header__ornament--bottom">
          <span className="sb-ornament-line"></span>
          <span className="sb-ornament-dot"></span>
          <span className="sb-ornament-line"></span>
        </div>
      </header>

      <div className="sb-grid">
        {currentPosts.map((post, i) => (
          <article key={post.id} className="sb-card" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="sb-card__image-wrap">
              <img src={post.images[currentImages[post.id] || 0]} alt={post.title} className="sb-card__image" />
              <div className="sb-card__image-overlay"></div>
              <div className="sb-card__image-dots">
                {post.images.map((_, idx) => (
                  <span key={idx} className={`sb-dot ${(currentImages[post.id] || 0) === idx ? "sb-dot--active" : ""}`} />
                ))}
              </div>
              <span className="sb-card__category">{t("blog.category")}</span>
            </div>
            <div className="sb-card__body">
              <div className="sb-card__meta">
                <span className="sb-card__date">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  {post.date}
                </span>
                <span className="sb-card__author">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  {post.author}
                </span>
              </div>
              <h3 className="sb-card__title">{post.title}</h3>
              <div className="sb-card__divider"></div>
              <p className="sb-card__excerpt">{post.description[0].slice(0, 110)}…</p>
              <Link to={`/blog/${post.id}`} state={{ currentPage }} className="sb-card__btn">
                {t("blog.know_more")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="sb-pagination">
        <button className="sb-pagination__btn" onClick={handlePrev} disabled={currentPage === 1}>{t("blog.prev")}</button>
        <div className="sb-pagination__info">
          <span className="sb-pagination__current">{currentPage}</span>
          <span className="sb-pagination__sep">/</span>
          <span className="sb-pagination__total">{totalPages}</span>
        </div>
        <button className="sb-pagination__btn" onClick={handleNext} disabled={currentPage === totalPages}>{t("blog.next")}</button>
      </div>

      <div className="sb-bottom-nav">
        <Link to="/devotes-bhajan" className="sb-bottom-nav__link"><span className="sb-bottom-nav__icon">🎶</span><span>{t("blog.nav_bhajan")}</span></Link>
        <Link to="/testimonies" className="sb-bottom-nav__link"><span className="sb-bottom-nav__icon">🔱</span><span>{t("blog.nav_testimonies")}</span></Link>
        <Link to="/dailysatsang" className="sb-bottom-nav__link"><span className="sb-bottom-nav__icon">🔅</span><span>{t("blog.nav_satsang")}</span></Link>
      </div>
    </div>
  );
};

export default Blog;