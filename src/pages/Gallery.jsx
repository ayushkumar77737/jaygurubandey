import React, { useState } from "react";
import "./Gallery.css";

// Import images
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

const photos = [
  { id: 1, src: photo23, alt: "Photo 23" },
  { id: 2, src: photo2, alt: "Photo 2" },
  { id: 3, src: photo9, alt: "Photo 9" },
  { id: 4, src: photo6, alt: "Photo 6" },
  { id: 5, src: photo7, alt: "Photo 7" },
  { id: 6, src: photo8, alt: "Photo 8" },
  { id: 7, src: photo10, alt: "Photo 10" },
  { id: 8, src: photo11, alt: "Photo 11" },
  { id: 9, src: photo12, alt: "Photo 12" },
  { id: 10, src: photo13, alt: "Photo 13" },
  { id: 11, src: photo14, alt: "Photo 14" },
  { id: 12, src: photo15, alt: "Photo 15" },
  { id: 13, src: photo16, alt: "Photo 16" },
  { id: 14, src: photo17, alt: "Photo 17" },
  { id: 15, src: photo18, alt: "Photo 18" },
  { id: 16, src: photo19, alt: "Photo 19" },
  { id: 17, src: photo20, alt: "Photo 20" },
  { id: 18, src: photo21, alt: "Photo 21" },
  { id: 19, src: photo22, alt: "Photo 22" },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="phgal-container">

      {/* Ambient background blobs */}
      <div className="phgal-bg" aria-hidden="true">
        <div className="phgal-blob phgal-blob-1" />
        <div className="phgal-blob phgal-blob-2" />
        <div className="phgal-blob phgal-blob-3" />
        <div className="phgal-noise" />
      </div>

      {/* Header */}
      <header className="phgal-header">
        <p className="phgal-eyebrow">Our Collection</p>
        <h2 className="phgal-title">
          <span className="phgal-title-word">Photo</span>
          <span className="phgal-title-word phgal-title-accent">Gallery</span>
        </h2>
        <div className="phgal-title-bar" />
      </header>

      {/* Grid */}
      <div className="phgal-grid" key={currentPage}>
        {currentPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="phgal-item"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            {/* Corner accents */}
            <span className="phgal-corner phgal-corner-tl" aria-hidden="true" />
            <span className="phgal-corner phgal-corner-br" aria-hidden="true" />

            <div className="phgal-img-wrap">
              <img src={photo.src} alt={photo.alt} className="phgal-photo" />
              <div className="phgal-overlay">
                <a href={photo.src} download className="phgal-download-btn">
                  <span className="phgal-dl-icon">↓</span>
                  Download
                </a>
              </div>
            </div>

            <div className="phgal-item-footer">
              <span className="phgal-photo-label">{photo.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="phgal-pagination">
        <button
          className="phgal-page-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <span className="phgal-arrow">←</span> Prev
        </button>

        <div className="phgal-page-info">
          <span className="phgal-page-current">{currentPage}</span>
          <span className="phgal-page-sep">/</span>
          <span className="phgal-page-total">{totalPages}</span>
        </div>

        <button
          className="phgal-page-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next <span className="phgal-arrow">→</span>
        </button>
      </div>

    </div>
  );
};

export default Gallery;