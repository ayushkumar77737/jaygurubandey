import React, { useState, useEffect } from "react";
import "./LatestUpdates.css";
import guruji1 from "../assets/guruji.webp";
import photo16 from "../assets/photo16.webp";
import photo19 from "../assets/photo19.webp";

const updates = [
  {
    id: 1,
    title: "New Book Release",
    date: "25 Oct 2025",
    description: "Our latest book is out now! Grab your copy today.",
    icon: "📖",
  },
  {
    id: 2,
    title: "Website Update",
    date: "20 Oct 2025",
    description: "New features added to the website for a smoother experience.",
    icon: "🌐",
  },
  {
    id: 3,
    title: "Event Announcement",
    date: "15 Oct 2025",
    description: "Join us for our upcoming event this month.",
    icon: "🪔",
  },
];

const updateImages = [guruji1, photo16, photo19];

const LatestUpdates = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fading, setFading] = useState(false);

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
      {/* Decorative orbs */}
      <div className="lu__orb lu__orb--1" />
      <div className="lu__orb lu__orb--2" />

      {/* Header */}
      <div className="lu__header">
        <span className="lu__header-badge">✨ What's New</span>
        <h1 className="lu__title">Latest Updates</h1>
        <div className="lu__title-line" />
        <p className="lu__title-sub">Stay connected with the divine journey</p>
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
              <span className="lu__image-label">📸 Live Updates</span>
            </div>
          </div>

          {/* Dot indicators */}
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
            <div
              className="lu__card"
              key={update.id}
              style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
            >
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