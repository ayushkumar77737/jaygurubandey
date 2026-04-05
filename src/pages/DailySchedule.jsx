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

  const sessions = [
    {
      key: "morning",
      icon: "🌅",
      label: "Morning Schedule",
      items: morningSchedule,
      mod: "ds__section--morning",
    },
    {
      key: "afternoon",
      icon: "🌤️",
      label: "Afternoon Schedule",
      items: afternoonSchedule,
      mod: "ds__section--afternoon",
    },
    {
      key: "evening",
      icon: "🌙",
      label: "Evening Schedule",
      items: eveningSchedule,
      mod: "ds__section--evening",
    },
  ];

  return (
    <div className="ds__page">
      {/* Decorative orbs */}
      <div className="ds__orb ds__orb--1" />
      <div className="ds__orb ds__orb--2" />
      <div className="ds__orb ds__orb--3" />

      {/* Header */}
      <div className="ds__header">
        <div className="ds__header-icon">🕰️</div>
        <h1 className="ds__main-title">Daily Schedule</h1>
        <div className="ds__title-rule" />
        <p className="ds__header-sub">A day aligned with devotion &amp; discipline</p>
      </div>

      {/* Schedule Sections */}
      <div className="ds__container">
        {sessions.map((session, si) => (
          <div
            className={`ds__section ${session.mod}`}
            key={session.key}
            style={{ animationDelay: `${si * 0.15}s` }}
          >
            {/* Section header */}
            <div className="ds__section-header">
              <span className="ds__section-icon">{session.icon}</span>
              <h2 className="ds__section-title">{session.label}</h2>
            </div>

            <div className="ds__divider" />

            {/* Items */}
            <ul className="ds__list">
              {session.items.map((item, i) => (
                <li
                  className="ds__item"
                  key={i}
                  style={{ animationDelay: `${si * 0.15 + i * 0.05 + 0.1}s` }}
                >
                  <div className="ds__item-dot" />
                  <span className="ds__item-text">{item.title}</span>
                  <span className="ds__item-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailySchedule;