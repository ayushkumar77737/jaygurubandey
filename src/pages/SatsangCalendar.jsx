import React, { useState } from "react";
import "./SatsangCalendar.css";

const calendarData = [
  {
    day: 1,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: true,
  },
  {
    day: 2,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: true,
  },
  {
    day: 3,
    location: "Manikpur Ashram",
    subLocation: "Mirzapur",
    highlight: true,
  },
  {
    day: 4,
    location: "Nagwa Ashram",
    subLocation: "Ghazipur",
    highlight: false,
  },
  {
    day: 5,
    location: "Silhata Ashram",
    subLocation: "Ballia",
    highlight: true,
  },
  { day: 6, location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  { day: 7, location: "Nagle Ashram", subLocation: "Maharashtra", highlight: true },
  { day: 8, location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  { day: 9, location: "Nagle Ashram", subLocation: "Maharashtra", highlight: true },
  { day: 10, location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  { day: 11, location: null, subLocation: null, highlight: false },
  { day: 12, location: null, subLocation: null, highlight: false },
  { day: 13, location: null, subLocation: null, highlight: false },
  { day: 14, location: null, subLocation: null, highlight: false },
  {
    day: 15,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: true,
  },
  {
    day: 16,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: false,
  },
  { day: 17, location: null, subLocation: null, highlight: false },
  { day: 18, location: null, subLocation: null, highlight: false },
  {
    day: 19,
    location: "Nagwa Ashram",
    subLocation: "Ghazipur",
    highlight: true,
  },
  { day: 20, location: null, subLocation: null, highlight: false },
  { day: 21, location: null, subLocation: null, highlight: false },
  {
    day: 22,
    location: "Sidhegaur Ashram",
    subLocation: "Gorakhpur",
    highlight: false,
  },
  {
    day: 23,
    location: "Sidhagar Ashram",
    subLocation: "Ghazipur",
    highlight: true,
  },
  { day: 24, location: null, subLocation: null, highlight: false },
  {
    day: 25,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: true,
  },
  {
    day: 26,
    location: "Chhitauna Dham",
    subLocation: "Varanasi",
    highlight: false,
  },
  {
    day: 27,
    location: "Shivrampur, Mirzamurad",
    subLocation: "Varanasi",
    highlight: true,
  },
  { day: 28, location: null, subLocation: null, highlight: false },
  { day: 29, location: null, subLocation: null, highlight: false },
  { day: 30, location: null, subLocation: null, highlight: false },
  { day: 31, location: null, subLocation: null, highlight: false },
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function SatsangCalendar() {
  const [activeDay, setActiveDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);

  const handlePrev = () => setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
  const handleNext = () => setCurrentMonth((m) => (m === 11 ? 0 : m + 1));

  const activeEvent = calendarData.find((d) => d.day === activeDay);

  return (
    <div className="sc-wrapper">
      {/* Header */}
      <div className="sc-header">
        <div className="sc-lotus sc-lotus-left">✿</div>
        <div className="sc-header-text">
          <h1 className="sc-title">Jai Gurubande Swar Yog Sadhana</h1>
          <p className="sc-subtitle">Regular Satsang Program · As Per Calendar</p>
        </div>
        <div className="sc-lotus sc-lotus-right">✿</div>
      </div>

      {/* Month Nav */}
      <div className="sc-month-nav">
        <button className="sc-nav-btn" onClick={handlePrev}>&#8592;</button>
        <span className="sc-month-label">{months[currentMonth]}</span>
        <button className="sc-nav-btn" onClick={handleNext}>&#8594;</button>
      </div>

      {/* Weekday Labels */}
      <div className="sc-weekdays">
        {weekDays.map((d) => (
          <div key={d} className="sc-weekday">{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="sc-grid">
        {calendarData.map(({ day, location, subLocation, highlight }) => (
          <div
            key={day}
            className={`sc-cell ${highlight ? "sc-cell--highlight" : ""} ${location ? "sc-cell--has-event" : ""} ${activeDay === day ? "sc-cell--active" : ""}`}
            onClick={() => setActiveDay(activeDay === day ? null : day)}
          >
            <span className="sc-day-num">{day}</span>
            {location && (
              <div className="sc-event">
                <span className="sc-event-loc">{location}</span>
                {subLocation && (
                  <span className="sc-event-sub">{subLocation}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      {activeDay && activeEvent?.location && (
        <div className="sc-detail-panel">
          <div className="sc-detail-icon">☸</div>
          <div className="sc-detail-info">
            <h3 className="sc-detail-day">Day {activeDay} — Satsang Event</h3>
            <p className="sc-detail-place">{activeEvent.location}</p>
            {activeEvent.subLocation && (
              <p className="sc-detail-sub">{activeEvent.subLocation}</p>
            )}
          </div>
          <button className="sc-detail-close" onClick={() => setActiveDay(null)}>✕</button>
        </div>
      )}

      {/* Footer */}
      <div className="sc-footer">
        <span className="sc-footer-dot sc-footer-dot--highlight"></span>
        <span className="sc-footer-label">Highlighted event</span>
        <span className="sc-footer-dot sc-footer-dot--regular"></span>
        <span className="sc-footer-label">Regular event</span>
        <span className="sc-footer-tagline">॥ Saheb Sabka ॥</span>
      </div>
    </div>
  );
}