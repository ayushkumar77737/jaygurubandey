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
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";


const Hero = () => {
  // About section images only
  const aboutImages = [photo7, photo8, photo6];
  const [aboutIndex, setAboutIndex] = useState(0);
  const navigate = useNavigate();
  const images = [bio, hero1, hero2, photo1, photo6, photo7, photo8];
  const [currentIndex, setCurrentIndex] = useState(0);

  const alreadyShown = sessionStorage.getItem("hasShownLoader");
  const [loading, setLoading] = useState(!alreadyShown);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasShownLoader", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alreadyShown]);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const fullText = `Param Sant Swami Jai Gurubande Ji Maharaj
Let’s Move Towards God And Understand Sanatan Dharma.
It’s a spiritual and philosophical message encouraging people to seek divine connection and explore the essence of Sanatan Dharma.`;

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

  const textLines = displayedText.split("\n");

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
        </div>
      </div>
      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />
      <section className="about-section">
        {/* Heading */}
        <h2 className="about-heading">About Guruji</h2>

        {/* Content Container */}
        <div className="about-container">
          {/* Left Image */}
          <div className="about-image">
            <img
              src={aboutImages[aboutIndex]}
              alt="Guruji"
              key={aboutIndex}
            />

          </div>

          {/* Right Content */}
          <div className="about-content">
            <p>
              Guruji is a spiritual guide devoted to spreading wisdom, positivity,
              and inner peace. Through teachings rooted in ancient traditions and
              practical life values, Guruji inspires individuals to lead a
              balanced, meaningful, and conscious life.
            </p>

            <p>
              With compassion and clarity, Guruji emphasizes self-discipline,
              devotion, and service to humanity. Thousands of followers have found
              direction, strength, and purpose through Guruji’s guidance.
            </p>
            <div className="about-btn-wrapper">
    <button
      className="about-btn"
      onClick={() => navigate("/about")}
    >
      Read More About Guruji
    </button>
  </div>
          </div>
        </div>
      </section>
      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      {/* ===== SOCIAL LINKS SECTION START ===== */}
      <section className="social-section">
        <h2 className="section-heading">Important Links</h2>
        <div className="social-grid">

          {/* YouTube */}
          <div className="social-box">
            <div className="social-title">
              <FaYoutube className="social-icon youtube" />
              <span>YouTube Channels</span>
            </div>

            <ul>
              <li>
                <a
                  href="https://youtube.com/@jaigurubande?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Gurubande
                </a>
              </li>
              <li>
                <a
                  href="youtube.com/@jaygurubande1?si=7f0-bxVAZFTx7r-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Gurubande 3377
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram */}
          <div className="social-box">
            <div className="social-title">
              <FaInstagram className="social-icon instagram" />
              <span>Instagram</span>
            </div>

            <ul>
              <li>
                <a
                  href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Gurubande Official
                </a>
              </li>
            </ul>
          </div>

          {/* Facebook */}
          <div className="social-box">
            <div className="social-title">
              <FaFacebook className="social-icon facebook" />
              <span>Facebook</span>
            </div>

            <ul>
              <li>
                <a
                  href="https://www.facebook.com/share/g/1AZvFisxcs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Gurubande
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp */}
          <div className="social-box">
            <div className="social-title">
              <FaWhatsapp className="social-icon whatsapp" />
              <span>WhatsApp</span>
            </div>

            <ul>
              <li>
                <a
                  href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Gurubande
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>
      {/* ===== SOCIAL LINKS SECTION END ===== */}

      <ScrollingText />
    </div>
  );
};

export default Hero;
