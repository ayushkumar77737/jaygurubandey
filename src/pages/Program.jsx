import React, { useState } from "react";
import "./program.css";
import gurujiImage from "../assets/guruji.webp";

const Program = () => {
  const data = [
    {
      id: 1,
      year: 2025,
      status: "Completed",
      type: "Satsang",
      title: "Completed Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺\n\n🌹 Satsang & Bhandara 🌹\n\nOrganizers: Shri Om Prakash Yadav & Family\nContact: 8448337202, 7589076439\n\n👉 We warmly invite all Satsang devotees to attend and receive the divine darshan and blessings of Satguru Sahib Ji.`,
      image: gurujiImage,
      time: "🕔 Time: From 5:00 PM onwards",
      date: "📅 Date: 15th June 2025, Sunday",
      location: "📍 Venue: Vishunpur Kolapatti, Post - Abu Sahidpur, Azamgarh",
    },
    {
      id: 2,
      year: 2025,
      status: "Upcoming",
      type: "Satsang",
      title: "Upcoming Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺\n\n🌹 Satsang & Bhandara 🌹\n\nDate: 17th September 2025\nTime: From 7:00 PM onwards\nVenue: Village Silhata, Post Saraybharti, District Ballia\n\nOrganizers: Shri Kalpnath Yadav Ji\nContact: 9756302073\n\n👉 All devotees are requested to attend and receive blessings.`,
      image: gurujiImage,
      time: "🕖 Time: From 7:00 PM onwards",
      date: "📅 Date: 17th September 2025, Wednesday",
      location: "📍 Venue: Village Silhata, Post Saraybharti, District Ballia",
    },
    {
      id: 3,
      year: 2025,
      status: "Completed",
      type: "Travel Information",
      title: "Completed Travel Information",
      description: `Jai Gurubande Swara Yoga Sadhana\n\nSatguru Sahib arrived at Babatpur Airport, Varanasi after the International Satsang Program.\n\nDarshan Time: 5:30 PM\nVenue: Babatpur Airport, Varanasi`,
      image: gurujiImage,
      time: "🕠 Darshan of Satguru Sahib: 5:30 PM",
      date: "📅 Date: 15th September 2025, Monday",
      location: "📍 Venue: Babatpur Airport, Varanasi",
    },
    {
      id: 4,
      year: 2025,
      status: "Upcoming",
      type: "Travel Information",
      title: "Upcoming Travel Information",
      description: `Notice: Satguru Sahib will arrive at Babatpur Airport, Varanasi.\n\nDarshan Time: 5:30 PM\nVenue: Babatpur Airport, Varanasi`,
      image: gurujiImage,
      time: "🕠 Darshan of Satguru Sahib: 5:30 PM",
      date: "📅 Date: 15th September 2025, Monday",
      location: "📍 Venue: Babatpur Airport, Varanasi",
    },
    {
      id: 5,
      year: 2025,
      status: "Completed",
      type: "Ashram Event",
      title: "Completed Ashram Event",
      description: `🙏 Jai Gurubande Swara Yoga Sadhana 🙏\n\nDate: 01 September 2025\nTime: From 12:00 PM onwards\nVenue: Jai Gurubande Ashram, Chitouna, Jalhupur, Varanasi\n\nContact: 7080224214, 7080224215, 7080224216\n\n👉 All devotees attended and received blessings.`,
      image: gurujiImage,
      time: "🕛 Time: From 12:00 PM onwards",
      date: "📅 Date: 01 September 2025, Monday",
      location: "📍 Venue: Jai Gurubande Ashram, Chitouna, Jalhupur, Varanasi",
    },
    {
      id: 6,
      year: 2025,
      status: "Upcoming",
      type: "Ashram Event",
      title: "Upcoming Ashram Event",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺\n\nDate: 17th September 2025\nTime: From 12:00 PM onwards\nVenue: Auto Tech Maruti Workshop, Nadesar Ghausabad, Varanasi\n\nOrganizers: Shri Mahendra Mistri, Shri Pradeep Yadav, Shri Manoj Kumar\nContact: 6393271872, 9451890721\n\n👉 All devotees are invited to attend on the occasion of Vishwakarma Puja and receive blessings.`,
      image: gurujiImage,
      time: "🕛 Time: From 12:00 PM onwards",
      date: "📅 Date: 17th September 2025, Wednesday",
      location: "📍 Venue: Auto Tech Maruti Workshop, Nadesar Ghausabad, Varanasi",
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState("");

  const programOptions = data.map(
    (item) => `${item.year} ${item.status} ${item.type}`
  );

  const filteredData = selectedProgram
    ? data.filter(
        (item) =>
          `${item.year} ${item.status} ${item.type}` === selectedProgram
      )
    : [];

  const isUpcoming = (item) => item.status === "Upcoming";

  return (
    <div className="pg-page">

      {/* Starfield layers */}
      <div className="pg-stars" aria-hidden="true">
        <span className="pg-stars__layer pg-stars__layer--1" />
        <span className="pg-stars__layer pg-stars__layer--2" />
        <span className="pg-stars__layer pg-stars__layer--3" />
      </div>

      {/* Nebula glows */}
      <div className="pg-nebula" aria-hidden="true">
        <span className="pg-nebula__orb pg-nebula__orb--1" />
        <span className="pg-nebula__orb pg-nebula__orb--2" />
        <span className="pg-nebula__orb pg-nebula__orb--3" />
      </div>

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="pg-header">
        <div className="pg-header__ornament">
          <span className="pg-orn-line" />
          <span className="pg-orn-icon">🪷</span>
          <span className="pg-orn-line" />
        </div>
        <h1 className="pg-header__title">Divine Programs</h1>
        <p className="pg-header__subtitle">
          Select a program below to explore upcoming & completed sacred events, satsangs, and ashram gatherings.
        </p>
      </div>

      {/* ── Dropdown ────────────────────────────────────────── */}
      <div className="pg-dropdown-wrap">
        <label className="pg-dropdown-label" htmlFor="pg-program-select">
          Select Program
        </label>
        <div className="pg-dropdown-box">
          <select
            id="pg-program-select"
            className="pg-dropdown"
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
          >
            <option value="" hidden>— Choose a Program —</option>
            {programOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <span className="pg-dropdown-arrow">▾</span>
        </div>
      </div>

      {/* ── Cards ───────────────────────────────────────────── */}
      <div className="pg-cards">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className={`pg-card ${isUpcoming(item) ? "pg-card--upcoming" : "pg-card--completed"}`} key={item.id}>

              {/* Rotating neon border */}
              <div className="pg-card__border" aria-hidden="true" />

              {/* Status ribbon */}
              <span className={`pg-card__ribbon ${isUpcoming(item) ? "pg-card__ribbon--upcoming" : "pg-card__ribbon--completed"}`}>
                {item.status}
              </span>

              {/* Avatar */}
              <div className="pg-card__avatar-wrap">
                <div className="pg-card__avatar-ring" />
                <div className="pg-card__avatar">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              {/* Title */}
              <h2 className="pg-card__title">{item.title}</h2>

              {/* Divider */}
              <div className="pg-card__divider" />

              {/* Description */}
              <p className="pg-card__desc" style={{ whiteSpace: "pre-line" }}>
                {item.description}
              </p>

              {/* Info pills */}
              <div className="pg-card__info">
                <div className="pg-card__info-pill">
                  <span className="pg-card__info-icon">🕔</span>
                  <span>{item.time.replace(/^🕔|🕖|🕠|🕛\s*/u, "")}</span>
                </div>
                <div className="pg-card__info-pill">
                  <span className="pg-card__info-icon">📅</span>
                  <span>{item.date.replace(/^📅\s*Date:\s*/u, "")}</span>
                </div>
                <div className="pg-card__info-pill pg-card__info-pill--wide">
                  <span className="pg-card__info-icon">📍</span>
                  <span>{item.location.replace(/^📍\s*Venue:\s*/u, "")}</span>
                </div>
              </div>

            </div>
          ))
        ) : (
          selectedProgram && (
            <p className="pg-empty">No programs found for this selection.</p>
          )
        )}
      </div>

    </div>
  );
};

export default Program;