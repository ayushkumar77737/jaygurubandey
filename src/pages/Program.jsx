import React, { useState } from "react";
import "./program.css";
import gurujiImage from "../assets/guruji.jpg";

const Program = () => {
  const data = [
    {
      id: 1,
      year: 2025,
      status: "Completed",
      type: "Satsang",
      title: "Completed Satsang",
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara 🌹

Organizers: Shri Om Prakash Yadav & Family  
Contact: 8448337202, 7589076439

👉 We warmly invite all Satsang devotees to attend and receive the divine darshan and blessings of Satguru Sahib Ji.`,
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
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

🌹 Satsang & Bhandara 🌹

Date: 17th September 2025  
Time: From 7:00 PM onwards  
Venue: Village Silhata, Post Saraybharti, District Ballia

Organizers: Shri Kalpnath Yadav Ji  
Contact: 9756302073

👉 All devotees are requested to attend and receive blessings.`,
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
      description: `Jai Gurubande Swara Yoga Sadhana

Satguru Sahib arrived at Babatpur Airport, Varanasi after the International Satsang Program.

Darshan Time: 5:30 PM  
Venue: Babatpur Airport, Varanasi`,
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
      description: `Notice: Satguru Sahib will arrive at Babatpur Airport, Varanasi.

Darshan Time: 5:30 PM  
Venue: Babatpur Airport, Varanasi`,
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
      description: `🙏 Jai Gurubande Swara Yoga Sadhana 🙏

Date: 01 September 2025  
Time: From 12:00 PM onwards  
Venue: Jai Gurubande Ashram, Chitouna, Jalhupur, Varanasi

Contact: 7080224214, 7080224215, 7080224216

👉 All devotees attended and received blessings.`,
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
      description: `🌺 Jai Gurubande Swara Yoga Sadhana 🌺

Date: 17th September 2025  
Time: From 12:00 PM onwards  
Venue: Auto Tech Maruti Workshop, Nadesar Ghausabad, Varanasi

Organizers: Shri Mahendra Mistri, Shri Pradeep Yadav, Shri Manoj Kumar  
Contact: 6393271872, 9451890721

👉 All devotees are invited to attend on the occasion of Vishwakarma Puja and receive blessings.`,
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

  return (
    <div className="program-container">
      {/* Program Dropdown */}
      <div className="dropdown-group">
        <label htmlFor="program">Select Program :</label>
        <select
          id="program"
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
        >
          <option value="">-- Select Program --</option>
          {programOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
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
        selectedProgram && (
          <p style={{ color: "#fff", marginTop: "20px" }}>
            No programs found for this selection.
          </p>
        )
      )}
    </div>
  );
};

export default Program;
