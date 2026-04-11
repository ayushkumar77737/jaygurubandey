import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Gallery.css";
import photo6 from "../assets/photo6.webp";
import photo7 from "../assets/photo7.webp";
import photo8 from "../assets/photo8.webp";
import photo2 from "../assets/photo2.webp";
import photo9 from "../assets/photo9.webp";
import photo10 from "../assets/photo10.webp";
import photo11 from "../assets/photo11.webp";
import photo12 from "../assets/photo12.webp";
import photo13 from "../assets/photo13.webp";
import photo14 from "../assets/photo14.webp";
import photo15 from "../assets/photo15.webp";
import photo16 from "../assets/photo16.webp";
import photo17 from "../assets/photo17.webp";
import photo18 from "../assets/photo18.webp";
import photo19 from "../assets/photo19.webp";
import photo20 from "../assets/photo20.webp";
import photo21 from "../assets/photo21.webp";
import photo22 from "../assets/photo22.webp";
import photo23 from "../assets/photo23.webp";

// ✅ photo alt text is generic so kept outside — only UI text uses t()
const photos = [
  { id: 1, src: photo23 }, { id: 2, src: photo2 }, { id: 3, src: photo9 },
  { id: 4, src: photo6 }, { id: 5, src: photo7 }, { id: 6, src: photo8 },
  { id: 7, src: photo10 }, { id: 8, src: photo11 }, { id: 9, src: photo12 },
  { id: 10, src: photo13 }, { id: 11, src: photo14 }, { id: 12, src: photo15 },
  { id: 13, src: photo16 }, { id: 14, src: photo17 }, { id: 15, src: photo18 },
  { id: 16, src: photo19 }, { id: 17, src: photo20 }, { id: 18, src: photo21 },
  { id: 19, src: photo22 },
];

const Gallery = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  const indexOfLast = currentPage * photosPerPage;
  const indexOfFirst = indexOfLast - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="phgal-container">

      {/* Background blobs */}
      <div className="phgal-bg" aria-hidden="true">
        <div className="phgal-blob phgal-blob-1" />
        <div className="phgal-blob phgal-blob-2" />
        <div className="phgal-blob phgal-blob-3" />
        <div className="phgal-noise" />
      </div>

      {/* Header */}
      <header className="phgal-header">
        <p className="phgal-eyebrow">{t("gallery.eyebrow")}</p>
        <h2 className="phgal-title">
          <span className="phgal-title-word">{t("gallery.title_1")}</span>
          <span className="phgal-title-word phgal-title-accent">{t("gallery.title_2")}</span>
        </h2>
        <div className="phgal-title-bar" />
      </header>

      {/* Grid */}
      <div className="phgal-grid" key={currentPage}>
        {currentPhotos.map((photo, index) => (
          <div key={photo.id} className="phgal-item" style={{ animationDelay: `${index * 0.07}s` }}>
            <span className="phgal-corner phgal-corner-tl" aria-hidden="true" />
            <span className="phgal-corner phgal-corner-br" aria-hidden="true" />
            <div className="phgal-img-wrap">
              <img src={photo.src} alt={`Photo ${photo.id}`} className="phgal-photo" />
              <div className="phgal-overlay">
                <a href={photo.src} download className="phgal-download-btn">
                  <span className="phgal-dl-icon">↓</span>
                  {t("gallery.download")}
                </a>
              </div>
            </div>
            <div className="phgal-item-footer">
              <span className="phgal-photo-label">{`Photo ${photo.id}`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="phgal-pagination">
        <button className="phgal-page-btn" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          {t("gallery.prev")}
        </button>
        <div className="phgal-page-info">
          <span className="phgal-page-current">{currentPage}</span>
          <span className="phgal-page-sep">/</span>
          <span className="phgal-page-total">{totalPages}</span>
        </div>
        <button className="phgal-page-btn" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          {t("gallery.next")}
        </button>
      </div>

    </div>
  );
};

export default Gallery;