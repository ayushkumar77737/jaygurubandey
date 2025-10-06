import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../../pages/ScrollingText";
import AnnouncementBar from "../../pages/AnnouncementBar";
import FlowerSprinkler from "../../pages/FlowerSprinkler";
import LoadingPage from "../../pages/LoadingPage";
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

  // ✅ Check sessionStorage before rendering (prevents flash)
  const alreadyShown = sessionStorage.getItem("hasShownLoader");
  const [loading, setLoading] = useState(!alreadyShown);

  useEffect(() => {
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasShownLoader", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alreadyShown]);

  // ✅ Preload background images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // ✅ Typing text effect
  const fullText = `Param Sant Swami Jai Gurubande Ji Maharaj\nLet’s Move Towards God And Understand Sanatan Dharma.\nIt’s a spiritual and philosophical message encouraging people to seek divine connection and explore the essence of Sanatan Dharma.`;

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const typingSpeed = 50;
    const timeout = setTimeout(() => {
      if (charIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
        }, 2000);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  const handleChatClick = () => navigate("/chat");
  const handleAnnouncementClick = () => navigate("/important-dates");

  const textLines = displayedText.split("\n");

  // ✅ Show loading screen only when page first opens in this tab
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <AnnouncementBar />
      <div className="hero container">
        <FlowerSprinkler />

        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-bg ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${img})`,
            }}
          ></div>
        ))}

        <div className="hero-text">
          {textLines[0] && (
            <h2>
              {textLines[0]} <span className="cursor"></span>
            </h2>
          )}
          {textLines[1] && (
            <h1>
              {textLines[1]} <span className="cursor"></span>
            </h1>
          )}
          {textLines[2] && (
            <p>
              {textLines[2]} <span className="cursor"></span>
            </p>
          )}

          <button className="btn" onClick={handleChatClick}>
            Chat With Us <span className="arrow">→</span>
          </button>

          <button className="btn announcement-btn" onClick={handleAnnouncementClick}>
            Important Dates <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <ScrollingText />
    </div>
  );
};

export default Hero;
