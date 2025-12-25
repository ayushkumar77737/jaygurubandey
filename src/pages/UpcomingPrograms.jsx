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
    <section className="up-page">
      {/* ===== Page Header ===== */}
      <div className="up-header">
        <h1>Upcoming Programs 📅</h1>
        <p>Programs yet to happen (Most Important)</p>
      </div>

      {/* ===== Program Cards Grid ===== */}
      <div className="program-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h2 className="program-title">{program.title}</h2>
            <h3 className="program-subtitle">{program.subtitle}</h3>

            <div className="program-info">
              <p><strong>Date:</strong> {program.date}</p>
              <p><strong>Day:</strong> {program.day}</p>
              <p><strong>Time:</strong> {program.time}</p>
              <p><strong>Location:</strong> {program.location}</p>
            </div>

            <div className="program-message">
              <p>{program.message}</p>
            </div>

            <div className="program-contact">
              <p><strong>Contact Details:</strong></p>
              <p>{program.contact}</p>
            </div>

            <div className="program-blessing">
              🙏 Saheb Sabka (Blessings to all) 🙏
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingPrograms;
