import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "../../pages/ScrollingText";
import AnnouncementBar from "../../pages/AnnouncementBar";
import FlowerSprinkler from "../../pages/FlowerSprinkler";
import LoadingPage from "../../pages/LoadingPage";
import "./Hero.css";
import missionImg from "../../assets/photo9.jpg"; // your image
import visionImg from "../../assets/photo10.jpg";   // your image
import bio from "../../assets/bio.jpg";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.png";
import photo1 from "../../assets/photo1.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.webp";
import photo10 from "../../assets/photo10.jpg";
import photo19 from "../../assets/photo19.jpg";
import pic from "../../assets/pic.jpeg";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";
import {
  FaHandsHelping,
  FaCalendarAlt,
  FaUsers,
  FaGlobe
} from "react-icons/fa";


const Hero = () => {
  // About section images only
  const aboutImages = [photo7, photo8, photo6];
  const [aboutIndex, setAboutIndex] = useState(0);
  const navigate = useNavigate();
  const images = [bio, pic, hero1, hero2, photo1, photo6, photo7, photo8];
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
      <section className="mission-vision-section">
        <h2 className="mission-vision-heading">Mission & Vision</h2>

        <div className="mission-vision-container">
          {/* Mission */}
          <div className="mv-card">
            <img src={missionImg} alt="Mission" className="mv-icon" />
            <h3>Our Mission</h3>
            <p>
              To spread the eternal wisdom of Sanatan Dharma and guide individuals
              toward spiritual awareness, righteous living, and inner peace.
            </p>
          </div>

          <div className="mv-divider" />

          {/* Vision */}
          <div className="mv-card">
            <img src={visionImg} alt="Vision" className="mv-icon" />
            <h3>Our Vision</h3>
            <p>
              To build a spiritually awakened society where ancient Dharma values
              blend harmoniously with modern life for unity and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      <section className="latest-updates-section">
        <h2 className="latest-updates-heading">Latest Updates</h2>

        <div className="latest-updates-grid">
          <div className="update-card">
            <span className="update-badge important">IMPORTANT</span>

            <div className="update-image">
              <img src={photo8} alt="Spiritual Yatra" />
            </div>

            <h3>Upcoming Spiritual Yatra</h3>
            <p>
              Swami Ji will be visiting Varanasi and Hyderabad this month.
              Devotees are requested to stay connected for darshan updates.
            </p>
            <span className="update-date">18 Jan 2026</span>
          </div>

          <div className="update-card">
            <span className="update-badge new">NEW</span>

            <div className="update-image">
              <img src={photo10} alt="Live Satsang" />
            </div>

            <h3>Weekly Live Satsang</h3>
            <p>
              Join our live satsang every Sunday at 7:30 PM IST and receive
              divine guidance and blessings.
            </p>
            <span className="update-date">Every Sunday</span>
          </div>

          <div className="update-card">
            <span className="update-badge update">UPDATE</span>

            <div className="update-image">
              <img src={photo19} alt="Contributions" />
            </div>

            <h3>Contribution Options Enabled</h3>
            <p>
              UPI & QR-based contribution options are now available for
              devotees to support spiritual activities.
            </p>
            <span className="update-date">Recently Updated</span>
          </div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />
      <section className="activities-section">
        <h2 className="activities-heading">Key Activities / What We Do</h2>

        <div className="activities-grid">
          {/* Card 1 */}
          <div className="activity-card">
            <div className="activity-icon">
              <FaHandsHelping />
            </div>
            <h3>Seva / Activities</h3>
            <p>
              Daily and regular spiritual, social, and seva-based activities
              conducted with devotion and discipline.
            </p>
          </div>

          {/* Card 2 */}
          <div className="activity-card">
            <div className="activity-icon">
              <FaCalendarAlt />
            </div>
            <h3>Events</h3>
            <p>
              Special programs, celebrations, satsangs, yatras, and spiritual
              gatherings throughout the year.
            </p>
          </div>

          {/* Card 3 */}
          <div className="activity-card">
            <div className="activity-icon">
              <FaUsers />
            </div>
            <h3>Community Support</h3>
            <p>
              Guidance, unity, social responsibility, and support for individuals
              and families in need.
            </p>
          </div>

          {/* Card 4 */}
          <div className="activity-card">
            <div className="activity-icon">
              <FaGlobe />
            </div>
            <h3>Online Services</h3>
            <p>
              Website services, announcements, updates, and digital access to
              spiritual resources.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      <section className="quicklinks-section">
        <h2 className="section-heading">Quick Links & Updates</h2>

        <div className="quicklinks-grid">
          <div className="quicklinks-box">
            <h3 className="quicklinks-title">Important Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/ashram-vision">Ashram Vision</a></li>
              <li><a href="/committee-members">Committee Members</a></li>
              <li><a href="/ashram-life">Ashram Life</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="quicklinks-box">
            <h3 className="quicklinks-title">Latest Updates</h3>
            <ul>
              <li><a href="/latest-updates">Latest Updates</a></li>
              <li><a href="/dailyschedule">Daily Schedule</a></li>
              <li><a href="/live-now">Live Now</a></li>
              <li><a href="/upcoming-programs">Upcoming Programs</a></li>
              <li><a href="/special-events">Special Events</a></li>
            </ul>
          </div>

          <div className="quicklinks-box">
            <h3 className="quicklinks-title">Legal</h3>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
              <li><a href="/donation-policy">Donation Policy</a></li>
            </ul>
          </div>
        </div>
      </section>


      {/* ===== DECORATIVE DIVIDER ===== */}
      <div className="section-divider" />

      {/* ===== SOCIAL LINKS SECTION START ===== */}
      <section className="social-section">
        <h2 className="section-heading">Official Digital Platforms</h2>
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
