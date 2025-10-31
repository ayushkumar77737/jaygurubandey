import React from "react";
import "./DailySchedule.css";

function DailySchedule() {
  const morningSchedule = [
    { title: "Daily Morning Satsang by Pujya Maharaj Ji", time: "4:15 AM - 5:45 AM" },
    { title: "Mangla Aarti of Shri Ji", time: "5:45 AM - 6:30 AM" },
    { title: "Radha Sudhanidhi Path (Mon, Fri)", time: "6:30 AM - 8:15 AM" },
    { title: "Sewak Vaani Path (Tue)", time: "6:30 AM - 8:15 AM" },
    { title: "Hit Chaurasi Path (Wed, Thu, Sat, Sun)", time: "6:30 AM - 8:15 AM" },
    { title: "Daily Ekantik Vartalaap", time: "7:00 AM - 8:00 AM" },
  ];

  const afternoonSchedule = [
    { title: "Dhup Aarti", time: "4:00 PM - 4:15 PM" },
    { title: "Daily Evening Vaanipath", time: "4:15 PM - 5:15 PM" },
    { title: "Vyahula Mahotsav (Sunday)", time: "4:15 PM - 5:45 PM" },
    { title: "Satsang (Mon, Thu)", time: "5:15 PM - 5:45 PM" },
    { title: "Bhakt Charitra (Tue, Wed, Fri, Sat)", time: "5:15 PM - 5:45 PM" },
    { title: "Sandhya Aarti", time: "5:45 PM - 6:00 PM" },
  ];

  const eveningSchedule = [
    { title: "Night Satsang by Pujya Maharaj Ji", time: "8:00 PM - 9:00 PM" },
    { title: "Rasik Path", time: "9:00 PM - 9:30 PM" },
    { title: "Bhajan Kirtan", time: "9:30 PM - 10:00 PM" },
    { title: "Shayan Aarti", time: "10:00 PM - 10:15 PM" },
    { title: "Ekantik Varta", time: "10:15 PM - 10:30 PM" },
  ];

  return (
    <div className="schedule-page">
      <h1 className="main-title">Daily Schedule</h1>

      <div className="schedule-container">
        {/* Morning */}
        <div className="schedule-section">
          <h2 className="schedule-title">Morning Schedule</h2>
          <ul className="schedule-list">
            {morningSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Afternoon */}
        <div className="schedule-section">
          <h2 className="schedule-title">Afternoon Schedule</h2>
          <ul className="schedule-list">
            {afternoonSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Evening */}
        <div className="schedule-section">
          <h2 className="schedule-title">Evening Schedule</h2>
          <ul className="schedule-list">
            {eveningSchedule.map((item, i) => (
              <li key={i} className="schedule-item">
                <span className="schedule-text">{item.title}</span>
                <span className="schedule-time">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DailySchedule;
