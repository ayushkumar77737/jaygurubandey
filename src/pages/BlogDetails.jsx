import { useParams, Link, useLocation } from "react-router-dom";
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

const BlogDetails = () => {
  const { t } = useTranslation();   // ✅ NEW
  const { id } = useParams();
  const location = useLocation();
  const { currentPage = 1 } = location.state || {};

  // ✅ posts built with t() so detail page also translates
  const posts = [
    { id: 1, images: [blog1a, blog1b], title: t("blog.p1_title"), date: t("blog.p1_date"), author: t("blog.p1_author"), description: [t("blog.p1_d1"), t("blog.p1_d2")] },
    { id: 2, images: [blog2a, blog2b, blog2c, blog2d], title: t("blog.p2_title"), date: t("blog.p2_date"), author: t("blog.p2_author"), description: [t("blog.p2_d1"), t("blog.p2_d2")] },
    { id: 3, images: [blog3a, blog3b, blog3c], title: t("blog.p3_title"), date: t("blog.p3_date"), author: t("blog.p3_author"), description: [t("blog.p3_d1"), t("blog.p3_d2")] },
    { id: 4, images: [blog1a, blog1b], title: t("blog.p4_title"), date: t("blog.p4_date"), author: t("blog.p4_author"), description: [t("blog.p4_d1"), t("blog.p4_d2")] },
    { id: 5, images: [blog2a, blog2b, blog2c, blog2d], title: t("blog.p5_title"), date: t("blog.p5_date"), author: t("blog.p5_author"), description: [t("blog.p5_d1"), t("blog.p5_d2")] },
    { id: 6, images: [blog3a, blog3b, blog3c], title: t("blog.p6_title"), date: t("blog.p6_date"), author: t("blog.p6_author"), description: [t("blog.p6_d1"), t("blog.p6_d2")] },
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2 className="sb-not-found">{t("blog.not_found")}</h2>;

  return (
    <div className="sb-details-page">
      <div className="sb-bg-decoration" aria-hidden="true">
        <span className="sb-petal sb-petal--1">✿</span>
        <span className="sb-petal sb-petal--3">✿</span>
      </div>

      <div className="sb-details-container">
        <div className="sb-details-ornament">
          <span className="sb-ornament-line"></span>
          <span className="sb-ornament-icon">🪷</span>
          <span className="sb-ornament-line"></span>
        </div>

        <h2 className="sb-details-title">{post.title}</h2>

        <div className="sb-details-meta">
          <span className="sb-details-meta__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            {post.date}
          </span>
          <span className="sb-details-meta__sep">•</span>
          <span className="sb-details-meta__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            {post.author}
          </span>
        </div>

        <div className="sb-details-gallery">
          {post.images.map((img, idx) => (
            <div key={idx} className="sb-details-gallery__item">
              <img src={img} alt={`${post.title} ${idx + 1}`} />
              <div className="sb-details-gallery__shine"></div>
            </div>
          ))}
        </div>

        <div className="sb-details-divider">
          <span className="sb-ornament-line"></span>
          <span className="sb-details-divider__icon">❁</span>
          <span className="sb-ornament-line"></span>
        </div>

        <div className="sb-details-desc">
          {post.description.map((para, index) => (
            <p key={index} className="sb-details-desc__para">{para}</p>
          ))}
        </div>

        <div className="sb-details-back">
          <Link to="/blog" state={{ currentPage }} className="sb-details-back__btn">
            {t("blog.back")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;