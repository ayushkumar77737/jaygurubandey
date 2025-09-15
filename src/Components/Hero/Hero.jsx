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

  // ✅ Remember if hero animation has already run
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("heroAnimated")) {
      setHasAnimated(true);
    } else {
      sessionStorage.setItem("heroAnimated", "true");
    }
  }, []);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const fullText = `Param Sant Swami Jai Gurubande Ji Maharaj\nLet’s move towards God and Understand Sanatan Dharma.\nIt’s a spiritual and philosophical message encouraging people to seek divine connection and explore the essence of Sanatan Dharma.`;

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typing effect
  useEffect(() => {
    if (hasAnimated) {
      setDisplayedText(fullText); // immediately show full text if already animated
      return;
    }

    const typingSpeed = 50;
    const timeout = setTimeout(() => {
      if (charIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, fullText, hasAnimated]);

  const handleChatClick = () => navigate("/chat");

  // Announcement popup
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const handleAnnouncementClick = () => {
    setShowAnnouncement(true);
    setTimeout(() => setShowAnnouncement(false), 4000);
  };

  const textLines = displayedText.split("\n");

  return (
    <div>
      <div className="hero container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${img})`,
            }}
          ></div>
        ))}

        <div className={`hero-text ${!hasAnimated ? "animate-once" : ""}`}>
          {textLines[0] && <h2>{textLines[0]}<span className="cursor"></span></h2>}
          {textLines[1] && <h1>{textLines[1]}<span className="cursor"></span></h1>}
          {textLines[2] && <p>{textLines[2]}<span className="cursor"></span></p>}

          <button className="btn" onClick={handleChatClick}>
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
