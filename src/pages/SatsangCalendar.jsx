import React, { useState } from "react";
import "./SatsangCalendar.css";

// Events stored by "MM-DD" so they work for ANY year
const satsangEvents = {
  "04-01": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: true },
  "04-02": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: true },
  "04-03": { location: "Manikpur Ashram", subLocation: "Mirzapur", highlight: true },
  "04-04": { location: "Nagwa Ashram", subLocation: "Ghazipur", highlight: false },
  "04-05": { location: "Silhata Ashram", subLocation: "Ballia", highlight: true },
  "04-06": { location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  "04-07": { location: "Nagle Ashram", subLocation: "Maharashtra", highlight: true },
  "04-08": { location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  "04-09": { location: "Nagle Ashram", subLocation: "Maharashtra", highlight: true },
  "04-10": { location: "Nagle Ashram", subLocation: "Maharashtra", highlight: false },
  "04-15": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: true },
  "04-16": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: false },
  "04-19": { location: "Nagwa Ashram", subLocation: "Ghazipur", highlight: true },
  "04-22": { location: "Sidhegaur Ashram", subLocation: "Gorakhpur", highlight: false },
  "04-23": { location: "Sidhagar Ashram", subLocation: "Ghazipur", highlight: true },
  "04-25": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: true },
  "04-26": { location: "Chhitauna Dham", subLocation: "Varanasi", highlight: false },
  "04-27": { location: "Shivrampur, Mirzamurad", subLocation: "Varanasi", highlight: true },
};

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function getMonthDayKey(month, day) {
  // month is 0-indexed here
  return `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function SatsangCalendar() {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [activeKey, setActiveKey] = useState(null);

  const handlePrev = () => {
    setActiveKey(null);
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
    else setCurrentMonth(m => m - 1);
  };
  const handleNext = () => {
    setActiveKey(null);
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
    else setCurrentMonth(m => m + 1);
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const isToday = (day) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const activeEvent = activeKey ? satsangEvents[activeKey] : null;

  return (
    <div className="sc-wrapper">

      {/* Header */}
      <div className="sc-header">
        <div className="sc-lotus">✿</div>
        <div className="sc-header-text">
          <h1 className="sc-title">Jai Gurubande Swar Yog Sadhana</h1>
          <p className="sc-subtitle">Regular Satsang Program · As Per Calendar</p>
        </div>
        <div className="sc-lotus">✿</div>
      </div>

      {/* Month + Year Navigation */}
      <div className="sc-month-nav">
        <button className="sc-nav-btn" onClick={handlePrev}>&#8592;</button>
        <div className="sc-month-year">
          <span className="sc-month-label">{MONTHS[currentMonth]}</span>
          <span className="sc-year-label">{currentYear}</span>
        </div>
        <button className="sc-nav-btn" onClick={handleNext}>&#8594;</button>
      </div>

      {/* Calendar Grid */}
      <div className="sc-grid">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const mdKey = getMonthDayKey(currentMonth, day);
          const event = satsangEvents[mdKey];

          return (
            <div
              key={day}
              className={[
                "sc-cell",
                event?.highlight ? "sc-cell--highlight" : "",
                event ? "sc-cell--has-event" : "",
                isToday(day) ? "sc-cell--today" : "",
                activeKey === mdKey ? "sc-cell--active" : "",
              ].join(" ").trim()}
              onClick={() => event && setActiveKey(activeKey === mdKey ? null : mdKey)}
            >
              <span className={`sc-day-num ${isToday(day) ? "sc-day-num--today" : ""}`}>
                {day}
              </span>
              {event && (
                <div className="sc-event">
                  <span className="sc-event-loc">{event.location}</span>
                  <span className="sc-event-sub">{event.subLocation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Panel */}
      {activeKey && activeEvent && (
        <div className="sc-detail-panel">
          <div className="sc-detail-icon">☸</div>
          <div className="sc-detail-info">
            <h3 className="sc-detail-day">
              {MONTHS[currentMonth]} {activeKey.split("-")[1]}, {currentYear}
            </h3>
            <p className="sc-detail-place">{activeEvent.location}</p>
            <p className="sc-detail-sub">{activeEvent.subLocation}</p>
          </div>
          <button className="sc-detail-close" onClick={() => setActiveKey(null)}>✕</button>
        </div>
      )}

      {/* Footer */}
      <div className="sc-footer">
        <span className="sc-footer-dot sc-footer-dot--highlight" />
        <span className="sc-footer-label">Highlighted</span>
        <span className="sc-footer-dot sc-footer-dot--regular" />
        <span className="sc-footer-label">Regular</span>
        <span className="sc-footer-dot sc-footer-dot--today" />
        <span className="sc-footer-label">Today</span>
        <span className="sc-footer-tagline">॥ Saheb Sabka ॥</span>
      </div>

    </div>
  );
}