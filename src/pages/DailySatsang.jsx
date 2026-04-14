import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./DailySatsang.css";
import guruAvatar from "../assets/guruji.webp";

const DailySatsang = () => {
    const { t } = useTranslation();

    const MONTHS = t("dailySatsang.months", { returnObjects: true });

    const [activeMonth, setActiveMonth] = useState(MONTHS[0].id);
    const currentMonth = MONTHS.find((m) => m.id === activeMonth);

    return (
        <div className="dsatsang__page">

            {/* ===== Decorative Background Orbs ===== */}
            <div className="dsatsang__bg-orb dsatsang__bg-orb--1" />
            <div className="dsatsang__bg-orb dsatsang__bg-orb--2" />
            <div className="dsatsang__bg-orb dsatsang__bg-orb--3" />

            {/* ===== Page Heading ===== */}
            <header className="dsatsang__hero">
                <h1 className="dsatsang__hero-title">{t("dailySatsang.hero_title")}</h1>
                <p className="dsatsang__hero-sub">{t("dailySatsang.hero_sub")}</p>
                <div className="dsatsang__hero-divider">
                    <span className="dsatsang__divider-line" />
                    <span className="dsatsang__divider-lotus">✦</span>
                    <span className="dsatsang__divider-line" />
                </div>
            </header>

            {/* ===== Channel Card ===== */}
            <section className="dsatsang__channel-card">

                {/* Glow ring behind avatar */}
                <div className="dsatsang__avatar-wrap">
                    <div className="dsatsang__avatar-ring" />
                    <img src={guruAvatar} alt="Guruji" className="dsatsang__avatar" />
                </div>

                <div className="dsatsang__channel-body">
                    <div className="dsatsang__channel-top">
                        <div>
                            <h2 className="dsatsang__channel-title">
                                {t("dailySatsang.channel_title")}
                            </h2>
                            <p className="dsatsang__channel-meta">
                                <span className="dsatsang__meta-pill">4.6K Subscribers</span>
                                <span className="dsatsang__meta-pill">212 Videos</span>
                                <span className="dsatsang__meta-pill">3.1K Views</span>
                            </p>
                        </div>


                        <a
                            href="https://youtube.com/@jaigurubande?feature=shared"
                            target="_blank"
                            rel="noreferrer"
                            className="dsatsang__yt-btn"
                        >
                            <svg className="dsatsang__yt-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <span>{t("dailySatsang.btn_subscribe")}</span>
                            <span className="dsatsang__yt-count">4.6K</span>
                        </a>
                    </div>

                    <p className="dsatsang__channel-desc">
                        {t("dailySatsang.channel_desc")}
                    </p>

                    {/* Month Tabs */}
                    <div className="dsatsang__tabs-wrap">
                        <div className="dsatsang__tabs">
                            {MONTHS.map((month) => (
                                <button
                                    key={month.id}
                                    className={`dsatsang__tab ${month.id === activeMonth ? "dsatsang__tab--active" : ""
                                        }`}
                                    onClick={() => setActiveMonth(month.id)}
                                >
                                    {month.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Video Section ===== */}
            <section className="dsatsang__videos">
                {currentMonth?.videos?.length ? (
                    <div className="dsatsang__grid">
                        {currentMonth.videos.map((video, i) => (

                            <a
                                key={video.id + i}
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noreferrer"
                                className="dsatsang__video-card"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="dsatsang__thumb-wrap">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt={video.title}
                                        className="dsatsang__thumb"
                                    />
                                    <div className="dsatsang__thumb-overlay">
                                        <div className="dsatsang__play-btn">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <span className="dsatsang__watch-label">
                                            {t("dailySatsang.watch_label")}
                                        </span>
                                    </div>
                                </div>

                                <div className="dsatsang__video-info">
                                    <span className="dsatsang__video-badge">
                                        {t("dailySatsang.video_badge")}
                                    </span>
                                    <h3 className="dsatsang__video-title">{video.title}</h3>
                                    <p className="dsatsang__video-date">
                                        <span className="dsatsang__date-dot" />
                                        {video.date}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="dsatsang__empty">
                        <div className="dsatsang__empty-icon">{t("dailySatsang.empty_icon")}</div>
                        <p className="dsatsang__empty-title">{t("dailySatsang.empty_title")}</p>
                        <p className="dsatsang__empty-sub">{t("dailySatsang.empty_sub")}</p>
                    </div>
                )}
            </section>

            {/* ===== Footer strip ===== */}
            <div className="dsatsang__footer-strip">
                <span className="dsatsang__footer-emoji">🙏</span>
                <span>{t("dailySatsang.footer")}</span>
                <span className="dsatsang__footer-emoji">🙏</span>
            </div>

        </div>
    );
};

export default DailySatsang;