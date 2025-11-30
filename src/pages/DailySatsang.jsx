import React, { useState } from "react";
import "./DailySatsang.css";
import guruAvatar from "../assets/guruji.jpg";

const MONTHS = [
    {
        id: "sep-2024",
        label: "Daily Satsang – September 2024",
        videos: [
            {
                id: "gxKxXbX4NiY",
                title: "We Belong to the Divine, Whether Good or Bad",
                date: "29 September 2024",
            },
            {
                id: "LYGQQH54SVQ",
                title: "How to Overcome the Fear of Death",
                date: "28 September 2024",
            },
            {
                id: "krYZEkcYrvY",
                title: "Adopt These Teachings and Transform Your Life",
                date: "27 September 2024",
            },
        ],
    },
    {
        id: "aug-2024",
        label: "Daily Satsang – August 2024",
        videos: [
            {
                id: "gxKxXbX4NiY",
                title: "The Glory of Chanting the Divine Name",
                date: "30 August 2024",
            },
            {
                id: "krYZEkcYrvY",
                title: "What Is True Love in Spirituality?",
                date: "28 August 2024",
            },
        ],
    },
    {
        id: "jul-2024",
        label: "Daily Satsang – July 2024",
        videos: [
            {
                id: "krYZEkcYrvY",
                title: "How Devotion Can Transform Your Life",
                date: "25 July 2024",
            },
        ],
    },
    {
        id: "jun-2024",
        label: "Daily Satsang – June 2024",
        videos: [],
    },
    {
        id: "may-2024",
        label: "Daily Satsang – May 2024",
        videos: [],
    },
];

const DailySatsang = () => {
    const [activeMonth, setActiveMonth] = useState(MONTHS[0].id);
    const currentMonth = MONTHS.find((m) => m.id === activeMonth);

    return (
        <div className="daily-satsang-page">

            {/* ===== Page Heading ===== */}
            <header className="daily-hero">
                <h1>Daily Satsang</h1>
                <div className="daily-hero-decor">
                    <span className="line" />
                    <span className="star">★</span>
                    <span className="line" />
                </div>
            </header>

            {/* ===== Channel Card ===== */}
            <section className="channel-card">
                <div className="channel-left">
                    <img src={guruAvatar} alt="Guruji" className="channel-avatar" />
                </div>

                <div className="channel-main">
                    <h2 className="channel-title">Jai Gurubande</h2>
                    <p className="channel-meta">
                        4.6K Subscribers • 212 Videos • 3.1K Views
                    </p>

                    <p className="channel-desc">
                        A devotional YouTube channel sharing Daily Satsang, divine pravachans, soulful bhajans, and Guruji’s wisdom-filled teachings.
                        These Daily Satsangs guide every spiritual seeker toward peace, clarity, inner strength, devotion, and positivity.
                    </p>

                    {/* Tabs */}
                    <div className="channel-tabs">
                        {MONTHS.map((month) => (
                            <button
                                key={month.id}
                                className={
                                    month.id === activeMonth
                                        ? "month-tab month-tab-active"
                                        : "month-tab"
                                }
                                onClick={() => setActiveMonth(month.id)}
                            >
                                {month.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* YouTube Button */}
                <div className="channel-right">
                    <a
                        href="https://youtube.com/@jaigurubande?feature=shared"
                        target="_blank"
                        rel="noreferrer"
                        className="yt-button"
                    >
                        <span className="yt-icon">▶</span>
                        <span>YouTube</span>
                        <span className="yt-count">4.6K</span>
                    </a>
                </div>
            </section>

            {/* ===== Video Section ===== */}
            <section className="daily-videos">
                {currentMonth?.videos?.length ? (
                    <div className="video-grid">
                        {currentMonth.videos.map((video) => (
                            <a
                                key={video.id}
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="video-card"
                            >
                                <div className="video-thumb-wrapper">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="video-thumb"
                                    />
                                    <div className="video-overlay">
                                        <span className="play-icon">▶</span>
                                    </div>
                                </div>

                                <div className="video-info">
                                    <h3>{video.title}</h3>
                                    <p className="video-date">{video.date}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="no-videos">
                        No satsang videos have been added for this month yet.
                        Please check again soon.
                    </div>
                )}
            </section>
        </div>
    );
};

export default DailySatsang;
