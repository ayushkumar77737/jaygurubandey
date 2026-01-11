import React, { useState } from "react";
import "./SoulTwist.css";
import img1 from "../assets/guruji.webp";
import img2 from "../assets/guruji.webp";
import img3 from "../assets/guruji.webp";
import img4 from "../assets/guruji.webp";

const SoulTwist = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const images = [
    { src: img1, alt: "SoulTwist 1", date: "20 Oct 2025" },
    { src: img2, alt: "SoulTwist 2", date: "22 Oct 2025" },
    { src: img3, alt: "SoulTwist 3", date: "24 Oct 2025" },
    { src: img4, alt: "SoulTwist 4", date: "20 Oct 2024" },
  ];

  // Only filter when both month and year are selected
  const filteredImages =
    selectedMonth && selectedYear
      ? images.filter((img) => {
          const [day, month, year] = img.date.split(" ");
          return month === selectedMonth && year === selectedYear;
        })
      : [];

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedYear(""); // Reset year when month changes (optional)
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const monthOptions = [
    { value: "Jan", label: "January" },
    { value: "Feb", label: "February" },
    { value: "Mar", label: "March" },
    { value: "Apr", label: "April" },
    { value: "May", label: "May" },
    { value: "Jun", label: "June" },
    { value: "Jul", label: "July" },
    { value: "Aug", label: "August" },
    { value: "Sep", label: "September" },
    { value: "Oct", label: "October" },
    { value: "Nov", label: "November" },
    { value: "Dec", label: "December" },
  ];

  const yearOptions = ["2023", "2024", "2025"];

  return (
    <div className="soul-page">
      <h2 className="soul-title">SoulTwist Moments</h2>
      <div className="soul-line"></div>

      {/* Dropdown Filters */}
      <div className="soul-filters">
        <select value={selectedMonth} onChange={handleMonthChange}>
          <option value="" disabled>
            Select Month
          </option>
          {monthOptions.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>

        <select value={selectedYear} onChange={handleYearChange} disabled={!selectedMonth}>
          <option value="" disabled>
            Select Year
          </option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery or Prompt */}
      {!selectedMonth || !selectedYear ? (
        <p className="no-images">Please select both month and year to view images.</p>
      ) : filteredImages.length > 0 ? (
        <div className="soul-gallery">
          {filteredImages.map((img, index) => (
            <div className="soul-card" key={index}>
              <div className="soul-image-container">
                <img src={img.src} alt={img.alt} className="soul-image" />
              </div>
              <div className="soul-date">
                <p>
                  <strong>Date:</strong> {img.date}
                </p>
              </div>
              <div className="soul-download">
                <a href={img.src} download={`${img.alt}.jpg`} className="download-button">
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-images">No images found for this selection.</p>
      )}
    </div>
  );
};

export default SoulTwist;
