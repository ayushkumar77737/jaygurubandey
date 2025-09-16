import React, { useState } from "react";
import "./program.css";
import gurujiImage from "../assets/guruji.jpg";

const Program = () => {
  // Program data with year property
  const data = [
    {
      id: 1,
      year: 2024,
      title: "Completed Satsang",
      description: `Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara Program 🌹

🙏 Organizer: Shri Om Prakash Yadav & Family
📞 Contact Numbers: 8448337202, 7589076439

👉 We warmly invite all Satsang devotees to kindly attend this program with your family and receive the divine darshan and blessings of Satguru Sahib Ji.`,
      image: gurujiImage,
      time: "🕔 Time: From 5:00 PM onwards",
      date: "📅 Date: 15th June 2025, Sunday",
      location: "📍 Venue: Vishunpur Kolapatti, Post - Abu Sahidpur, Azamgarh",
    },
    {
      id: 2,
      year: 2025,
      title: "Travel Information",
      description: `Jai Gurubande Swara Yoga Sadhana

Notice: Arrival at Varanasi

We hereby inform you that Satguru Sahib will arrive at Babatpur Airport, Varanasi today after the International Satsang Program.

Date: 15th September 2025, Monday

Darshan of Satguru Sahib: 5:30 PM

Venue: Babatpur Airport, Varanasi

👏👏 Saheb belongs to all 👏👏`,
      image: gurujiImage,
      time: "🕠 Darshan of Satguru Sahib: 5:30 PM",
      date: "📅 Date: 15th September 2025, Monday",
      location: "📍 Venue: Babatpur Airport, Varanasi",
    },
    {
      id: 3,
      year: 2025,
      title: "Ashram Event",
      description: `🙏🙏 Jai Gurubande Swara Yoga Sadhana 🙏🙏

🌹 Regular Satsang Program Notification 🌹

Date: 01 September 2025
Day: Monday
Time: From 12:00 PM onwards
Venue: Jai Gurubande Ashram, Chitouna, Jalhupur, Varanasi

👉 We kindly request all Satsang devotees to attend this program with family and receive the divine darshan and blessings of Satguru Sahib Ji.

Contact: 7080224214, 7080224215, 7080224216

🙏🙏 Saheb belongs to everyone 🙏🙏`,
      image: gurujiImage,
      time: "🕛 Time: From 12:00 PM onwards",
      date: "📅 Date: 01 September 2025, Monday",
      location: "📍 Venue: Jai Gurubande Ashram, Chitouna, Jalhupur, Varanasi",
    },
    {
      id: 4,
      year: 2025,
      title: "Upcoming Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara Program 🌹

📅 Date: 17th September 2025  
📖 Day: Wednesday  
🕖 Time: From 7:00 PM onwards  

📍 Venue: Village Silhata, Post Saraybharti, District Ballia  

🙏 Organizer: Shri Kalpnath Yadav Ji  
📞 Contact Number: 9756302073  

👉 We warmly invite all Satsang devotees to kindly attend this program with your family and receive the divine darshan and blessings of Satguru Sahib Ji.  

🙏🙏 Saheb belongs to everyone 🙏🙏`,
      image: gurujiImage,
      time: "🕖 Time: From 7:00 PM onwards",
      date: "📅 Date: 17th September 2025, Wednesday",
      location: "📍 Venue: Village Silhata, Post Saraybharti, District Ballia",
    },
  ];

  // State to store selected year
  const [selectedYear, setSelectedYear] = useState("");

  // Get unique years for dropdown
  const years = [...new Set(data.map((item) => item.year))];

  // Filter data based on selected year
  const filteredData = selectedYear
    ? data.filter((item) => item.year === parseInt(selectedYear))
    : [];

  return (
    <div className="program-container">
      {/* Year Selection Dropdown */}
      <div className="year-select">
        <label htmlFor="year">Select Year: </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">-- Select Year --</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Program Cards */}
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div className="program-card" key={item.id}>
            <div className="program-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h2 className="program-title">{item.title}</h2>
            <p
              className="program-description"
              style={{ whiteSpace: "pre-line" }}
            >
              {item.description}
            </p>
            <p className="program-time">{item.time}</p>
            <p className="program-date">{item.date}</p>
            <p className="program-location">{item.location}</p>
          </div>
        ))
      ) : (
        selectedYear && (
          <p style={{ color: "#fff", marginTop: "20px" }}>
            No programs for this year.
          </p>
        )
      )}
    </div>
  );
};

export default Program;
