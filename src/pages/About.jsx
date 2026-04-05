import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./About.css";
import guruji from "../assets/guruji.webp";
import vision from "../assets/vision.webp";
import daily from "../assets/journey.webp";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const sectionsPerPage = 3;

  const sections = [
    {
      id: 1,
      key: "journey",
      photo: guruji,
      title: "Guruji's Journey",
      text: [
        "Guruji's life is a sacred journey of devotion, wisdom, and service to humanity...",
        "Through years of meditation, study of scriptures, and divine experiences, Guruji blossomed into a beacon of spiritual knowledge...",
        "Today, countless seekers look to him for guidance. His life reminds us that true greatness lies not in wealth or recognition, but in humility, compassion, and surrender to the Divine will."
      ],
    },
    {
      id: 2,
      key: "vision",
      photo: vision,
      title: "Ashram's Vision & Values",
      text: [
        "The Ashram is not merely a place; it is a living sanctuary where seekers find peace, purpose, and spiritual nourishment...",
        "Rooted deeply in the timeless wisdom of the Vedanta, the Ashram reminds every soul that the Divine exists equally in all beings...",
        "Above all, the Ashram's values inspire seekers to live with integrity, compassion, and gratitude, transforming daily life into a spiritual journey."
      ],
    },
    {
      id: 3,
      key: "daily",
      photo: daily,
      title: "Daily Life at the Ashram",
      text: [
        "The rhythm of the Ashram flows in harmony with nature and the Divine. Each day begins before sunrise...",
        "The mornings are often filled with study of scriptures, discourses, and selfless service...",
        "Evenings in the Ashram are illuminated by satsangs, bhajans, and meditation..."
      ],
    },
    {
      id: 4,
      key: "teachings",
      photo: guruji,
      title: "Teachings of Guruji",
      text: [
        "Guruji's teachings are timeless treasures of wisdom, guiding seekers toward self-realization and compassion...",
        "His discourses often highlight the importance of balancing worldly duties with spiritual practices...",
        "These teachings continue to inspire countless souls, guiding them to find strength in challenges, peace in silence, and purpose in service."
      ],
    },
    {
      id: 5,
      key: "seva",
      photo: vision,
      title: "Community & Seva",
      text: [
        "Seva, or selfless service, is the heartbeat of the Ashram...",
        "Beyond the Ashram walls, seva extends to society through food distribution, health camps, and education programs...",
        "Guruji often says, 'The hands that serve are holier than the lips that pray.'"
      ],
    },
    {
      id: 6,
      key: "festivals",
      photo: daily,
      title: "Festivals & Celebrations",
      text: [
        "The Ashram is filled with colors of joy during spiritual festivals — celebrated with prayers, music, and community feasts...",
        "Festivals here are not just about rituals; they are opportunities to experience the Divine in togetherness...",
        "These celebrations remind us that spirituality is not a solitary journey but a shared path..."
      ],
    },
  ];

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="ab__page">
      {/* Decorative orbs */}
      <div className="ab__orb ab__orb--1" />
      <div className="ab__orb ab__orb--2" />

      {/* Intro */}
      <section className="ab__intro">
        <div className="ab__intro-deco">🙏</div>
        <h1 className="ab__intro-heading">In the Light of Guruji's Grace</h1>
        <div className="ab__intro-rule" />
        <p className="ab__intro-subtext">"This ashram is not just a place — it is a presence."</p>
      </section>

      {/* Section Cards */}
      {currentSections.map((sec, idx) => (
        <section
          key={sec.id}
          className="ab__section"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          <div className="ab__section-photo">
            <div className="ab__photo-ring" />
            <img src={sec.photo} alt={sec.title} className="ab__photo-img" />
          </div>

          <div className="ab__section-text">
            <span className="ab__section-tag">Sacred Story</span>
            <h2 className="ab__section-title">{sec.title}</h2>
            <div className="ab__section-rule" />
            <p className="ab__section-para">{sec.text[0]}</p>
            <button
              className="ab__know-btn"
              onClick={() =>
                navigate(`/about/${sec.id}`, { state: { section: sec, currentPage } })
              }
            >
              Know More
              <span className="ab__btn-arrow">→</span>
            </button>
          </div>
        </section>
      ))}

      {/* Pagination */}
      <div className="ab__pagination">
        <button
          className="ab__pg-btn"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>
        <div className="ab__pg-badge">
          <span className="ab__pg-current">{currentPage}</span>
          <span className="ab__pg-sep">/</span>
          <span className="ab__pg-total">{totalPages}</span>
        </div>
        <button
          className="ab__pg-btn"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="ab__nav-actions">
        <button className="ab__nav-btn" onClick={() => navigate("/intlcenters")}>
          <span>🌏</span> Spiritual Network
        </button>
        <button className="ab__nav-btn" onClick={() => navigate("/spotlight")}>
          <span>🔦</span> Spotlight
        </button>
        <button className="ab__nav-btn" onClick={() => navigate("/dailyschedule")}>
          <span>📅</span> Daily Schedule
        </button>
      </div>
    </div>
  );
};

export default About;