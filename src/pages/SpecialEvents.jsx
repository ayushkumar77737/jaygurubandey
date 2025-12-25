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
    <section className="special-events-page">
      {/* ===== HERO ===== */}
      <div className="special-events-hero">
        <h1>Special Events ✨</h1>
        <p>
          Major festivals, grand celebrations, and spiritually transformative
          occasions
        </p>
      </div>

      {/* ===== EVENTS ===== */}
      <div className="special-events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            {/* IMAGE */}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <span className="event-badge">{event.type}</span>
            </div>

            {/* CONTENT */}
            <div className="event-content">
              <h2>{event.title}</h2>
              <p className="event-date">📅 {event.date}</p>
              <p className="event-location">📍 {event.location}</p>

              <p className="event-desc">{event.description}</p>

              <div className="event-highlights">
                <h4>✨ Highlights</h4>
                <ul>
                  {event.highlights.map((item, i) => (
                    <li key={i}>🕉 {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialEvents;
