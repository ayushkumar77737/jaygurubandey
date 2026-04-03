import React, { useState } from "react";
import "./DivineMoments.css";

// 👉 Import your real images here
import gurujiNewYear from "../assets/guruji.webp";
import satsangImage from "../assets/vision.webp";

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
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
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

    const filteredMoments = MOMENTS.filter((m) => {
        if (!selectedYear || !selectedMonth) return false;
        return m.year === selectedYear && m.month === selectedMonth;
    });

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setSelectedMonth("");
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="divm-page">

            {/* ===== DECORATIVE BG ===== */}
            <div className="divm-bg" aria-hidden="true">
                <div className="divm-bg-orb divm-bg-orb-1" />
                <div className="divm-bg-orb divm-bg-orb-2" />
                <div className="divm-bg-orb divm-bg-orb-3" />
                <div className="divm-bg-stars" />
                <div className="divm-bg-ring divm-bg-ring-1" />
                <div className="divm-bg-ring divm-bg-ring-2" />
            </div>

            <div className="divm-inner">

                {/* ===== FILTER HEADER ===== */}
                <div className="divm-header">
                    <div className="divm-title-wrap">
                        <span className="divm-title-ornament" aria-hidden="true">✦</span>
                        <h1 className="divm-title">Divine Moments</h1>
                        <span className="divm-title-ornament" aria-hidden="true">✦</span>
                    </div>
                    <p className="divm-subtitle">
                        Choose the year and month to relive precious memories with Guruji.
                    </p>

                    <div className="divm-filters">
                        {/* Year dropdown */}
                        <div className="divm-select-group">
                            <label htmlFor="divm-year">Year</label>
                            <select
                                id="divm-year"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>

                        {/* Month dropdown */}
                        <div className="divm-select-group">
                            <label htmlFor="divm-month">Month</label>
                            <select
                                id="divm-month"
                                value={selectedMonth || ""}
                                onChange={handleMonthChange}
                                disabled={!selectedYear}
                            >
                                <option value="" disabled hidden>Select Month</option>
                                {monthsForYear.map((m) => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* ===== INFO / MESSAGES ===== */}
                {!selectedYear && (
                    <div className="divm-info-message">
                        Please select a <strong>year</strong> first, then choose <strong>month</strong>.
                    </div>
                )}

                {selectedYear && !selectedMonth && (
                    <div className="divm-info-message">
                        Year selected: <strong>{selectedYear}</strong>. Now please select a <strong>month</strong>.
                    </div>
                )}

                {selectedYear && selectedMonth && filteredMoments.length === 0 && (
                    <div className="divm-info-message">
                        No divine moments have been added yet for{" "}
                        <strong>{selectedMonth} {selectedYear}</strong>.
                    </div>
                )}

                {/* ===== LIST OF MOMENTS ===== */}
                <div className="divm-list">
                    {filteredMoments.map((moment) => (
                        <div className="divm-card" key={moment.id}>

                            {/* LEFT: IMAGE */}
                            <div className="divm-image-wrapper">
                                {moment.image ? (
                                    <img
                                        src={moment.image}
                                        alt={moment.title}
                                        className="divm-image"
                                    />
                                ) : (
                                    <div className="divm-no-image">
                                        <span className="divm-no-image-icon">📷</span>
                                        <span>Image not uploaded</span>
                                    </div>
                                )}
                                <div className="divm-image-overlay" aria-hidden="true" />
                            </div>

                            {/* ARROW */}
                            <div className="divm-arrow">➜</div>

                            {/* RIGHT: DESCRIPTION */}
                            <div className="divm-content">
                                <div className="divm-meta">
                                    <span className="divm-date">
                                        {moment.date} {moment.month} {moment.year}
                                    </span>
                                    <span className="divm-type">{moment.type}</span>
                                </div>
                                <h3 className="divm-card-title">{moment.title}</h3>
                                <p className="divm-description">{moment.description}</p>
                            </div>

                            {/* corner accents */}
                            <span className="divm-card-corner divm-card-corner-tl" aria-hidden="true" />
                            <span className="divm-card-corner divm-card-corner-br" aria-hidden="true" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default DivineMoments;