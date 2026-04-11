import React, { useState } from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./DivineMoments.css";
import gurujiNewYear from "../assets/guruji.webp";
import satsangImage from "../assets/vision.webp";

const MONTH_ORDER = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

const DivineMoments = () => {
    const { t } = useTranslation();   // ✅ NEW
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");

    // ✅ MOMENTS inside component to use t()
    const MOMENTS = [
        { id: 1, title: t("divineMoments.m1_title"), date: "01", month: "January", year: "2025", type: t("divineMoments.type_darshan"), description: t("divineMoments.m1_desc"), image: gurujiNewYear },
        { id: 2, title: t("divineMoments.m2_title"), date: "15", month: "March", year: "2025", type: t("divineMoments.type_satsang"), description: t("divineMoments.m2_desc"), image: satsangImage },
        { id: 3, title: t("divineMoments.m3_title"), date: "24", month: "July", year: "2024", type: t("divineMoments.type_bhajan"), description: t("divineMoments.m3_desc"), image: satsangImage },
    ];

    // ✅ translated month names for display
    const monthDisplayMap = {
        January: t("divineMoments.m1_month"),
        March: t("divineMoments.m2_month"),
        July: t("divineMoments.m3_month"),
    };

    const years = [...new Set(MOMENTS.map((m) => m.year))].sort().reverse();

    const monthsForYear = selectedYear
        ? [...new Set(MOMENTS.filter((m) => m.year === selectedYear).map((m) => m.month))]
            .sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b))
        : [];

    const filteredMoments = MOMENTS.filter((m) => {
        if (!selectedYear || !selectedMonth) return false;
        return m.year === selectedYear && m.month === selectedMonth;
    });

    const handleYearChange = (e) => { setSelectedYear(e.target.value); setSelectedMonth(""); };
    const handleMonthChange = (e) => setSelectedMonth(e.target.value);

    return (
        <div className="divm-page">

            {/* Background */}
            <div className="divm-bg" aria-hidden="true">
                <div className="divm-bg-orb divm-bg-orb-1" />
                <div className="divm-bg-orb divm-bg-orb-2" />
                <div className="divm-bg-orb divm-bg-orb-3" />
                <div className="divm-bg-stars" />
                <div className="divm-bg-ring divm-bg-ring-1" />
                <div className="divm-bg-ring divm-bg-ring-2" />
            </div>

            <div className="divm-inner">

                {/* Header */}
                <div className="divm-header">
                    <div className="divm-title-wrap">
                        <span className="divm-title-ornament" aria-hidden="true">✦</span>
                        <h1 className="divm-title">{t("divineMoments.title")}</h1>
                        <span className="divm-title-ornament" aria-hidden="true">✦</span>
                    </div>
                    <p className="divm-subtitle">{t("divineMoments.subtitle")}</p>

                    <div className="divm-filters">
                        {/* Year */}
                        <div className="divm-select-group">
                            <label htmlFor="divm-year">{t("divineMoments.label_year")}</label>
                            <select id="divm-year" value={selectedYear} onChange={handleYearChange}>
                                <option value="">{t("divineMoments.select_year")}</option>
                                {years.map((y) => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>

                        {/* Month */}
                        <div className="divm-select-group">
                            <label htmlFor="divm-month">{t("divineMoments.label_month")}</label>
                            <select id="divm-month" value={selectedMonth || ""} onChange={handleMonthChange} disabled={!selectedYear}>
                                <option value="" disabled hidden>{t("divineMoments.select_month")}</option>
                                {monthsForYear.map((m) => (
                                    <option key={m} value={m}>{monthDisplayMap[m] || m}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                {!selectedYear && (
                    <div className="divm-info-message"
                        dangerouslySetInnerHTML={{ __html: t("divineMoments.msg_select_year") }}
                    />
                )}
                {selectedYear && !selectedMonth && (
                    <div className="divm-info-message"
                        dangerouslySetInnerHTML={{ __html: t("divineMoments.msg_select_month", { year: selectedYear }) }}
                    />
                )}
                {selectedYear && selectedMonth && filteredMoments.length === 0 && (
                    <div className="divm-info-message"
                        dangerouslySetInnerHTML={{ __html: t("divineMoments.msg_no_data", { month: monthDisplayMap[selectedMonth] || selectedMonth, year: selectedYear }) }}
                    />
                )}

                {/* Moments List */}
                <div className="divm-list">
                    {filteredMoments.map((moment) => (
                        <div className="divm-card" key={moment.id}>
                            <div className="divm-image-wrapper">
                                {moment.image ? (
                                    <img src={moment.image} alt={moment.title} className="divm-image" />
                                ) : (
                                    <div className="divm-no-image">
                                        <span className="divm-no-image-icon">📷</span>
                                        <span>{t("divineMoments.no_image")}</span>
                                    </div>
                                )}
                                <div className="divm-image-overlay" aria-hidden="true" />
                            </div>
                            <div className="divm-arrow">➜</div>
                            <div className="divm-content">
                                <div className="divm-meta">
                                    <span className="divm-date">{moment.date} {monthDisplayMap[moment.month] || moment.month} {moment.year}</span>
                                    <span className="divm-type">{moment.type}</span>
                                </div>
                                <h3 className="divm-card-title">{moment.title}</h3>
                                <p className="divm-description">{moment.description}</p>
                            </div>
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