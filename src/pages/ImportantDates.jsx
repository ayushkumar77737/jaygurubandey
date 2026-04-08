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
    name: "Nagwa Chaukia Ashram, Ghazipur",
    schedule: "Every month on dates 4 and 19",
    contact: "📞 7080224203, 9839858776",
  },
  {
    icon: "📅",
    name: "Silhata Saryamshati Ashram, Ballia",
    schedule: "Every month on date 5",
    contact: "📞 7800954121, 6388001542",
  },
  {
    icon: "📅",
    name: "Seedhagar (Ballia Road) Ashram, Gorakhpur",
    schedule: "Every month on date 22",
    contact: "📞 9935908011, 9161062141",
  },
  {
    icon: "📅",
    name: "Sidhagar Ghat Ashram, Ghazipur",
    schedule: "Every month on date 23",
    contact: "📞 9793900455, 8808305735",
  },
  {
    icon: "📅",
    name: "Manipur Ahiraura Ashram, Mirzapur",
    schedule: "Every month on date 03",
    contact: "📞 7651881816, 8009743258",
  },
  {
    icon: "📅",
    name: "Parsouli (Pakdi Kala) Ashram, Azamgarh",
    schedule: "Schedule not specified",
    contact: "📞 9396469997, 9984411125",
  },
  {
    icon: "📅",
    name: "Village Nagale, Post Kaman, Taluka Bardoli, District Palghar, Maharashtra Ashram",
    schedule: "Every month from dates 6 to 10",
    contact: "📞 7977739032, 9172164213",
  },
  {
    icon: "📅",
    name: "Shivpur, Mijhanurad, Varanasi",
    schedule: "Every month on date 27",
    contact: "📞 8738868292, 7800649332",
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