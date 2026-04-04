import React from "react";
import "./SpecialEvents.css";

// ✅ Import images from assets
import guruPurnima from "../assets/photo25.jpg";
import satsangSamaroh from "../assets/photo28.jpg";
import mahaShivratri from "../assets/photo29.jpg";

const events = [
  {
    title: "Guru Purnima Mahotsav",
    type: "Grand Festival",
    date: "July 21, 2025",
    location: "Jai Gurubande Ashram, Varanasi",
    image: guruPurnima,
    description:
      "Guru Purnima Mahotsav is a sacred occasion dedicated to the eternal Guru. Thousands of devotees gather to receive divine blessings.",
    highlights: [
      "Special Guru Vandana",
      "Divine Satsang",
      "Bhajan & Kirtan",
      "Mahaprasad Seva",
    ],
  },
  {
    title: "Annual Satsang Samaroh",
    type: "Annual Celebration",
    date: "October 12, 2025",
    location: "Main Ashram Ground",
    image: satsangSamaroh,
    description:
      "The Annual Satsang Samaroh unites devotees from across the country for spiritual discourse, cultural programs, and collective meditation.",
    highlights: [
      "Spiritual Discourses",
      "Devotee Experiences",
      "Cultural Programs",
      "Community Seva",
    ],
  },
  {
    title: "Maha Shivratri Celebration",
    type: "Night-long Festival",
    date: "March 8, 2026",
    location: "Jai Gurubande Ashram",
    image: mahaShivratri,
    description:
      "Maha Shivratri is observed with night-long bhajan, meditation, and deep spiritual silence in remembrance of Lord Shiva.",
    highlights: [
      "Night-long Bhajan",
      "Meditation Sessions",
      "Rudra Abhishek",
      "Spiritual Silence",
    ],
  },
];

const SpecialEvents = () => {
  return (
    <section className="sev-page">

      {/* ===== HERO ===== */}
      <div className="sev-hero">
        <div className="sev-hero-eyebrow">
          🕉️ Sacred Gatherings
        </div>

        <h1>
          Special Events
          <span className="sev-hero-icon"> ✨</span>
        </h1>

        <p>
          Major festivals, grand celebrations, and spiritually
          transformative occasions
        </p>

        <div className="sev-hero-divider">
          <span className="sev-hero-divider-icon">🪷</span>
        </div>
      </div>

      {/* ===== EVENTS GRID ===== */}
      <div className="sev-grid">
        {events.map((event, index) => (
          <div
            className="sev-card"
            key={index}
            style={{ "--i": index }}
          >
            {/* IMAGE */}
            <div className="sev-img-wrap">
              <img src={event.image} alt={event.title} />
              <div className="sev-img-overlay" />
              <span className="sev-badge">{event.type}</span>
            </div>

            {/* CONTENT */}
            <div className="sev-body">
              <h2>{event.title}</h2>

              <div className="sev-meta">
                <p className="sev-meta-date">📅 {event.date}</p>
                <p className="sev-meta-loc">📍 {event.location}</p>
              </div>

              <p className="sev-desc">{event.description}</p>

              <div className="sev-highlights-title">
                ✨ Highlights
              </div>

              <ul className="sev-highlights-list">
                {event.highlights.map((item, i) => (
                  <li key={i}>
                    <span>🕉</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SpecialEvents;