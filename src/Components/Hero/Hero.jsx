import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../../pages/ScrollingText";
import "./Hero.css";

import bio from "../../assets/bio.jpg";
import hero1 from "../../assets/hero1.jpg"; 
import hero2 from "../../assets/hero2.png";
import photo1 from "../../assets/photo1.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const images = [bio, hero1, hero2, photo1, photo6, photo7, photo8];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Track if hero has already been displayed
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("heroDisplayed")) {
      setHasAnimated(true);
    } else {
      sessionStorage.setItem("heroDisplayed", "true");
    }
  }, []);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Background slideshow (runs always)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const fullText = `Param Sant Swami Jai Gurubande Ji Maharaj
Let’s move towards God and Understand Sanatan Dharma.
It’s a spiritual and philosophical message encouraging people to seek divine connection and explore the essence of Sanatan Dharma.`;

  // Announcement popup
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const handleAnnouncementClick = () => {
    setShowAnnouncement(true);
    setTimeout(() => setShowAnnouncement(false), 4000);
  };

  const textLines = fullText.split("\n");

  return (
    <div>
      <div className="hero container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${img})`,
              transition: "none" // ⚡ remove fade delay
            }}
          ></div>
        ))}

        <div className="hero-text">
          {textLines[0] && <h2>{textLines[0]}</h2>}
          {textLines[1] && <h1>{textLines[1]}</h1>}
          {textLines[2] && <p>{textLines[2]}</p>}

          <button className="btn" onClick={() => navigate("/chat")}>
            Chat With Us <span className="arrow">→</span>
          </button>

          <button className="btn announcement-btn" onClick={handleAnnouncementClick}>
            Important Announcement <span className="arrow">🔔</span>
          </button>
        </div>
      </div>

      <ScrollingText />

      {showAnnouncement && (
        <div className="announcement-popup">
          📢 Important Announcement: <strong>Tomorrow is a special satsang at 7 PM.</strong>
        </div>
      )}
    </div>
  );
};

export default Hero;
