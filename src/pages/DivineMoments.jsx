import React, { useState } from "react";
import "./DivineMoments.css";

// 👉 Import your real images here
import gurujiNewYear from "../assets/guruji.jpg";
import satsangImage from "../assets/vision.jpg";

const MOMENTS = [
    {
        id: 1,
        title: "New Year Darshan with Guruji",
        date: "01",
        month: "January",
        year: "2025",
        type: "Darshan",
        description:
            "Blessed New Year morning darshan with Guruji. Devotees gathered early and received prasad.",
        image: gurujiNewYear,
    },
    {
        id: 2,
        title: "Special Satsang on Guru Kripa",
        date: "15",
        month: "March",
        year: "2025",
        type: "Satsang",
        description:
            "Evening satsang on the theme of Guru's grace, with kirtans and experiences shared by devotees.",
        image: satsangImage,
    },
    {
        id: 3,
        title: "Purnima Bhajan Sandhya",
        date: "24",
        month: "July",
        year: "2024",
        type: "Bhajan",
        description:
            "Full moon bhajan evening with deep meditation and soulful kirtans.",
        image: satsangImage,
    },
];

const MONTH_ORDER = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const DivineMoments = () => {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");

    const years = [...new Set(MOMENTS.map((m) => m.year))].sort().reverse();

    const monthsForYear = selectedYear
        ? [
            ...new Set(
                MOMENTS.filter((m) => m.year === selectedYear).map((m) => m.month)
            ),
        ].sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b))
        : [];

    // 👉 Now we require BOTH year and month
    const filteredMoments = MOMENTS.filter((m) => {
        if (!selectedYear || !selectedMonth) return false;
        return m.year === selectedYear && m.month === selectedMonth;
    });

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setSelectedMonth(""); // reset month when year changes
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="dm-page">
            <div className="dm-inner">
                {/* ===== FILTER HEADER ===== */}
                <div className="dm-header">
                    <h1 className="dm-title">
                        ✨ Divine Moments ✨
                    </h1>
                    <p className="dm-subtitle">
                        Choose the year and month to relive precious memories with Guruji.
                    </p>

                    <div className="dm-filters">
                        {/* Year dropdown */}
                        <div className="dm-select-group">
                            <label htmlFor="dm-year">Year</label>
                            <select
                                id="dm-year"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Month dropdown – enabled only after year is selected */}
                        <div className="dm-select-group">
                            <label htmlFor="dm-month">Month</label>
                            <select
                                id="dm-month"
                                value={selectedMonth || ""}
                                onChange={handleMonthChange}
                                disabled={!selectedYear}
                            >
                                {/* Placeholder: visible initially, NOT in dropdown */}
                                <option value="" disabled hidden>
                                    Select Month
                                </option>

                                {monthsForYear.map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                </div>

                {/* ===== INFO / MESSAGES ===== */}
                {!selectedYear && (
                    <div className="dm-info-message">
                        Please select a <strong>year</strong> first, then choose{" "}
                        <strong>month</strong>.
                    </div>
                )}

                {selectedYear && !selectedMonth && (
                    <div className="dm-info-message">
                        Year selected: <strong>{selectedYear}</strong>. Now please select a{" "}
                        <strong>month</strong>.
                    </div>
                )}

                {selectedYear && selectedMonth && filteredMoments.length === 0 && (
                    <div className="dm-info-message">
                        No divine moments have been added yet for{" "}
                        <strong>
                            {selectedMonth} {selectedYear}
                        </strong>
                        .
                    </div>
                )}

                {/* ===== LIST OF MOMENTS ===== */}
                <div className="dm-list">
                    {filteredMoments.map((moment) => (
                        <div className="dm-card" key={moment.id}>
                            {/* LEFT: IMAGE / PLACEHOLDER */}
                            <div className="dm-image-wrapper">
                                {moment.image ? (
                                    <img
                                        src={moment.image}
                                        alt={moment.title}
                                        className="dm-image"
                                    />
                                ) : (
                                    <div className="dm-no-image">
                                        <span className="dm-no-image-icon">📷</span>
                                        <span>Image not uploaded</span>
                                    </div>
                                )}
                            </div>

                            {/* ARROW */}
                            <div className="dm-arrow">➜</div>

                            {/* RIGHT: DESCRIPTION */}
                            <div className="dm-content">
                                <div className="dm-meta">
                                    <span className="dm-date">
                                        {moment.date} {moment.month} {moment.year}
                                    </span>
                                    <span className="dm-type">{moment.type}</span>
                                </div>

                                <h3 className="dm-card-title">{moment.title}</h3>
                                <p className="dm-description">{moment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DivineMoments;
