import React from "react";
import "./AshramVision.css";
import guruji from "../assets/guruji.webp";

const AshramVision = () => {
    return (
        <section className="avs__page">

            {/* Decorative orbs */}
            <div className="avs__orb avs__orb--1" />
            <div className="avs__orb avs__orb--2" />

            {/* ===== HERO ===== */}
            <div className="avs__hero">
                <span className="avs__hero-badge">🕉️ Sacred Space</span>
                <h1 className="avs__title">Ashram Vision</h1>
                <div className="avs__title-line" />
                <p className="avs__subtitle">
                    A sacred journey towards faith, discipline, and self-realization
                </p>
            </div>

            {/* ===== GURUJI IMAGE ===== */}
            <div className="avs__guruji">
                <div className="avs__guruji-halo" />
                <div className="avs__guruji-frame">
                    <img src={guruji} alt="Guruji" className="avs__guruji-img" />
                </div>
                <p className="avs__guruji-text">
                    Guided by the divine wisdom and blessings of Guruji
                </p>
            </div>

            {/* ===== MAIN CONTAINER ===== */}
            <div className="avs__container">

                {/* Main Card */}
                <div className="avs__card">
                    <div className="avs__card-accent" />
                    <p className="avs__card-para">
                        The vision of the Ashram is to create a peaceful spiritual space
                        where seekers can grow in faith, discipline, and self-realization
                        under the guidance of Guruji.
                    </p>
                    <div className="avs__card-rule" />
                    <p className="avs__card-para">
                        The Ashram aims to spread love, compassion, and inner harmony by
                        encouraging a life rooted in devotion, service, and truth.
                    </p>
                    <div className="avs__card-rule" />
                    <p className="avs__card-para">
                        Guided by Guruji's teachings, the Ashram works to uplift individuals
                        and society through spiritual practices, satsangs, seva activities,
                        and moral values—helping people live a balanced and meaningful life.
                    </p>
                </div>

                {/* ===== VALUES ===== */}
                <div className="avs__values-heading">
                    <span className="avs__values-tag">Core Pillars</span>
                    <div className="avs__values-rule" />
                </div>

                <div className="avs__values">
                    {[
                        { icon: "🕉️", title: "Faith", text: "Strengthening devotion through spiritual discipline" },
                        { icon: "🤲", title: "Seva", text: "Selfless service as a path to inner purification" },
                        { icon: "🌼", title: "Compassion", text: "Living with kindness, love, and empathy" },
                        { icon: "✨", title: "Truth", text: "Walking the righteous path with integrity" },
                    ].map((v, i) => (
                        <div
                            className="avs__value-card"
                            key={v.title}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="avs__value-icon">{v.icon}</div>
                            <h3 className="avs__value-title">{v.title}</h3>
                            <div className="avs__value-rule" />
                            <p className="avs__value-text">{v.text}</p>
                        </div>
                    ))}
                </div>

                {/* ===== QUOTE ===== */}
                <div className="avs__quote-wrap">
                    <div className="avs__quote-mark avs__quote-mark--open">"</div>
                    <p className="avs__quote">
                        When the soul is peaceful, life becomes divine.
                    </p>
                    <div className="avs__quote-mark avs__quote-mark--close">"</div>
                </div>

            </div>
        </section>
    );
};

export default AshramVision;