import React from "react";
import "./ImportantDates.css";
import satsangImg from "../assets/photo24.webp"; // ✅ Replace with your image

const dates = [
  {
    icon: "🔔",
    name: "Chitauna Dham, Varanasi (Headquarters)",
    schedule: "Every month on dates 1, 2, 15, 16, 25 and 26",
    contact: "📞 7080224214, 7080224215, 7080224216",
    isHQ: true,
  },
  {
    icon: "📅",
    name: "Jai Gurubande Jan Kalyan Ashram (Ballia)",
    schedule: "Every month on date 5",
    contact: "📞 8858437503, 6388001542",
  },
  {
    icon: "📅",
    name: "Nagawa Ashram (Ghazipur)",
    schedule: "Every month on dates 4 and 19",
    contact: "📞 7080224203",
  },
  {
    icon: "📅",
    name: "Mirzapur Ashram",
    schedule: "Every month on date 3",
    contact: "📞 7651881816",
  },
  {
    icon: "📅",
    name: "Shivramapur (At the residence of Shri Girja Prasad Yadav Ji)",
    schedule: "Every month on date 27",
    contact: "📞 8738868292",
  },
  {
    icon: "📅",
    name: "Sidhagar Ghat Ashram (Ghazipur)",
    schedule: "Every month on date 23",
    contact: "📞 8808305735, 9793900455",
  },
  {
    icon: "📅",
    name: "Gorakhpur Ashram",
    schedule: "Every month on dates 21 and 22",
    contact: "📞 9935908011",
  },
  {
    icon: "📅",
    name: "Jai Gurubande Ashram, Nagle (Mumbai)",
    schedule: "Every month from dates 6 to 10",
    contact: "📞 9819560938",
  },
];

const ImportantDates = () => {
  return (
    <div className="imd-page">

      {/* ===== HEADING ===== */}
      <div className="imd-heading-section">
        <span className="imd-eyebrow">🕉️ Sacred Schedule</span>
        <h2>Important Dates</h2>
        <div className="imd-heading-divider">
          <span className="imd-heading-divider-icon">🪷</span>
        </div>
      </div>

      {/* ===== IMAGE ===== */}
      <div className="imd-img-section">
        <div className="imd-img-frame">
          <img src={satsangImg} alt="Important Event" />
        </div>
      </div>

      {/* ===== DATES ===== */}
      <div className="imd-dates-section">
        <div className="imd-dates-box">
          {dates.map((item, index) => (
            <div
              className={`imd-date-row${item.isHQ ? " imd-hq" : ""}`}
              key={index}
            >
              <span className="imd-date-icon">{item.icon}</span>
              <div className="imd-date-text">
                <strong>{item.name}</strong>
                {" – "}
                {item.schedule}
                <span className="imd-date-contact">{item.contact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ImportantDates;