import React, { useState, useEffect } from "react";
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

  const filteredImages =
    selectedMonth && selectedYear
      ? images.filter((img) => {
        const [day, month, year] = img.date.split(" ");
        return month === selectedMonth && year === selectedYear;
      })
      : [];

  const cardsVisible = !!(selectedMonth && selectedYear && filteredImages.length > 0);

  /**
   * WHY we control scroll only on html/body and NOT on .st2-page:
   *
   * Browsers have a rule: if you set overflow-x:hidden on an element,
   * overflow-y:visible is silently upgraded to overflow-y:auto on that
   * same element — creating an unwanted second scrollbar.
   *
   * Solution: .st2-page has NO overflow CSS at all.
   * html + body are the single scroll container, toggled here.
   *
   *  - No cards  → html/body overflow:hidden  (zero scrollbars)
   *  - Cards show → html/body overflow-x:hidden + overflow-y:auto (ONE scrollbar)
   */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const gradient =
      "radial-gradient(ellipse 70% 50% at 10% 0%, rgba(179,0,89,0.07) 0%, transparent 60%), " +
      "radial-gradient(ellipse 60% 50% at 90% 100%, rgba(255,64,129,0.07) 0%, transparent 60%)";

    // Paint html/body so the footer gap never shows a different colour
    html.style.minHeight = "100%";
    html.style.background = "#fdf8f9";
    body.style.minHeight = "100vh";
    body.style.background = "#fdf8f9";
    body.style.backgroundImage = gradient;

    // Scroll control — body is the ONE scroll container
    if (cardsVisible) {
      html.style.overflowX = "hidden";
      html.style.overflowY = "auto";
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";
    } else {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    }

    return () => {
      html.style.overflow = "";
      html.style.minHeight = "";
      html.style.background = "";
      body.style.overflow = "";
      body.style.minHeight = "";
      body.style.background = "";
      body.style.backgroundImage = "";
    };
  }, [cardsVisible]);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setSelectedYear("");
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
    <div className="st2-page">
      {/* Decorative orbs */}
      <div className="st2-orb st2-orb--top-left" />
      <div className="st2-orb st2-orb--bottom-right" />

      <div className="st2-header">
        <span className="st2-eyebrow">✦ Sacred Gallery</span>
        <h2 className="st2-title">SoulTwist Moments</h2>
        <div className="st2-divider">
          <span className="st2-divider__line" />
          <span className="st2-divider__icon">✿</span>
          <span className="st2-divider__line" />
        </div>
      </div>

      {/* Filters */}
      <div className="st2-filters">
        <div className="st2-select-wrap">
          <span className="st2-select-label">Month</span>
          <select
            className="st2-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="" disabled>Select Month</option>
            {monthOptions.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
          <span className="st2-select-arrow">&#8964;</span>
        </div>

        <div className="st2-select-wrap">
          <span className="st2-select-label">Year</span>
          <select
            className={`st2-select ${!selectedMonth ? "st2-select--disabled" : ""}`}
            value={selectedYear}
            onChange={handleYearChange}
            disabled={!selectedMonth}
          >
            <option value="" disabled>Select Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <span className="st2-select-arrow">&#8964;</span>
        </div>
      </div>

      {/* Gallery / State */}
      {!selectedMonth || !selectedYear ? (
        <div className="st2-empty">
          <p className="st2-empty__text">
            Select a month &amp; year to reveal the moments
          </p>
        </div>
      ) : filteredImages.length > 0 ? (
        <div className="st2-gallery">
          {filteredImages.map((img, index) => (
            <div
              className="st2-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="st2-card__badge">
                {img.date.split(" ")[1]} {img.date.split(" ")[2]}
              </div>
              <div className="st2-card__img-wrap">
                <img src={img.src} alt={img.alt} className="st2-card__img" />
                <div className="st2-card__overlay" />
              </div>
              <div className="st2-card__body">
                <p className="st2-card__date">
                  <span className="st2-card__date-icon">📅</span>
                  {img.date}
                </p>
                <a
                  href={img.src}
                  download={`${img.alt}.jpg`}
                  className="st2-card__btn"
                >
                  <span className="st2-card__btn-icon">↓</span> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="st2-empty">
          <span className="st2-empty__icon">🌸</span>
          <p className="st2-empty__text">No moments found for this period</p>
        </div>
      )}
    </div>
  );
};

export default SoulTwist;