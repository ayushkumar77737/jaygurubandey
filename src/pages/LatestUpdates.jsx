import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./LatestUpdates.css";
import guruji1 from "../assets/guruji.webp";
import photo16 from "../assets/photo16.webp";
import photo19 from "../assets/photo19.webp";

const updateImages = [guruji1, photo16, photo19];

const LatestUpdates = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [currentImage, setCurrentImage] = useState(0);
  const [fading, setFading] = useState(false);

  // ✅ updates array moved inside component to use t()
  const updates = [
    { id: 1, title: t("latestUpdates.u1_title"), date: t("latestUpdates.u1_date"), description: t("latestUpdates.u1_desc"), icon: "📖" },
    { id: 2, title: t("latestUpdates.u2_title"), date: t("latestUpdates.u2_date"), description: t("latestUpdates.u2_desc"), icon: "🌐" },
    { id: 3, title: t("latestUpdates.u3_title"), date: t("latestUpdates.u3_date"), description: t("latestUpdates.u3_desc"), icon: "🪔" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % updateImages.length);
        setFading(false);
      }, 350);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lu__page">
      <div className="lu__orb lu__orb--1" />
      <div className="lu__orb lu__orb--2" />

      {/* Header */}
      <div className="lu__header">
        <span className="lu__header-badge">{t("latestUpdates.badge")}</span>
        <h1 className="lu__title">{t("latestUpdates.title")}</h1>
        <div className="lu__title-line" />
        <p className="lu__title-sub">{t("latestUpdates.sub")}</p>
      </div>

      {/* Layout */}
      <div className="lu__layout">

        {/* Left: Image */}
        <div className="lu__left">
          <div className="lu__image-wrap">
            <div className="lu__image-halo" />
            <img
              src={updateImages[currentImage]}
              alt="Updates Banner"
              className={`lu__image ${fading ? "lu__image--fade" : ""}`}
            />
            <div className="lu__image-overlay">
              <span className="lu__image-label">{t("latestUpdates.image_label")}</span>
            </div>
          </div>
          <div className="lu__dots">
            {updateImages.map((_, i) => (
              <button
                key={i}
                className={`lu__dot ${i === currentImage ? "lu__dot--active" : ""}`}
                onClick={() => setCurrentImage(i)}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Update cards */}
        <div className="lu__right">
          {updates.map((update, index) => (
            <div className="lu__card" key={update.id} style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
              <div className="lu__card-icon">{update.icon}</div>
              <div className="lu__card-body">
                <div className="lu__card-top">
                  <h2 className="lu__card-title">{update.title}</h2>
                  <span className="lu__card-date">{update.date}</span>
                </div>
                <div className="lu__card-rule" />
                <p className="lu__card-desc">{update.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LatestUpdates;