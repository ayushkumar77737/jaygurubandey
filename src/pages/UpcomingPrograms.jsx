import React from "react";
import "./UpcomingPrograms.css";

const UpcomingPrograms = () => {
  const programs = [
    {
      title: "🙏 Jai Gurubande Swar Yog Sadhna 🙏",
      subtitle: "🌹 Regular Satsang Program 🌹",
      date: "December 25, 2025",
      day: "Thursday",
      time: "From 12:30 PM onwards",
      location: "Jai Gurubande Ashram, Chhitona, Jalhupur, Varanasi",
      message:
        "👉 All spiritual seekers and Satsang lovers are cordially invited to attend the program with their families. Come and receive the divine vision (Darshan) and blessings of Satguru Saheb Ji.",
      contact: "📞 7080224214 | 📞 7080224215 | 📞 7080224216",
    },
    {
      title: "🙏 Jai Gurubande Swar Yog Sadhna 🙏",
      subtitle: "🌸 Special Monthly Satsang 🌸",
      date: "January 12, 2026",
      day: "Monday",
      time: "From 10:00 AM onwards",
      location: "Jai Gurubande Ashram, Chhitona, Jalhupur, Varanasi",
      message:
        "👉 Devotees are warmly invited to join this special monthly satsang for spiritual upliftment, divine blessings, and inner peace.",
      contact: "📞 7080224214 | 📞 7080224215",
    },
    {
      title: "🙏 Jai Gurubande Swar Yog Sadhna 🙏",
      subtitle: "🌼 Guru Purnima Satsang 🌼",
      date: "July 21, 2026",
      day: "Tuesday",
      time: "From 9:00 AM onwards",
      location: "Jai Gurubande Ashram, Chhitona, Jalhupur, Varanasi",
      message:
        "👉 On the auspicious occasion of Guru Purnima, devotees are invited to receive darshan and blessings of Satguru Saheb Ji.",
      contact: "📞 7080224216 | 📞 7080224215",
    },
  ];

  return (
    <section className="ugp-page">

      {/* ===== Page Header ===== */}
      <header className="ugp-header">
        <h1>
          Upcoming Programs
          <span className="ugp-calendar-icon"> 📅</span>
        </h1>

        <p className="ugp-header-sub">Programs yet to happen · Most Important</p>

        <div className="ugp-lotus-divider">
          <span className="ugp-lotus-icon">🪷</span>
        </div>
      </header>

      {/* ===== Program Cards Grid ===== */}
      <div className="ugp-grid">
        {programs.map((program, index) => (
          <article className="ugp-card" key={index}>

            {/* Shimmer top bar */}
            <div className="ugp-card-topbar" />

            <div className="ugp-card-body">

              {/* Titles */}
              <h2 className="ugp-card-title">{program.title}</h2>
              <h3 className="ugp-card-subtitle">{program.subtitle}</h3>

              {/* Info block */}
              <div className="ugp-card-info">
                <p>
                  <span className="ugp-info-icon">🗓️</span>
                  <strong>Date:</strong> {program.date}
                </p>
                <p>
                  <span className="ugp-info-icon">📆</span>
                  <strong>Day:</strong> {program.day}
                </p>
                <p>
                  <span className="ugp-info-icon">⏰</span>
                  <strong>Time:</strong> {program.time}
                </p>
                <p>
                  <span className="ugp-info-icon">📍</span>
                  <strong>Venue:</strong> {program.location}
                </p>
              </div>

              {/* Message */}
              <div className="ugp-card-message">
                <p>{program.message}</p>
              </div>

              {/* Contact */}
              <div className="ugp-card-contact">
                <p>Contact Details:</p>
                <p>{program.contact}</p>
              </div>

              {/* Blessing */}
              <div className="ugp-card-blessing">
                🙏 Saheb Sabka (Blessings to all) 🙏
              </div>

            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default UpcomingPrograms;