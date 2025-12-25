import React from "react";
import "./AshramVision.css";
import guruji from "../assets/guruji.jpg";

const AshramVision = () => {
    return (
        <section className="av-page">

            {/* ===== HERO SECTION ===== */}
            <div className="av-hero">
                <h1 className="av-title">Ashram Vision</h1>

                {/* 🔴 LINE BELOW TITLE */}
                <div className="av-title-line"></div>

                <p className="av-subtitle">
                    A sacred journey towards faith, discipline, and self-realization
                </p>
            </div>


            {/* ===== GURUJI IMAGE ===== */}
            <div className="av-guruji">
                <div className="av-guruji-frame">
                    <img src={guruji} alt="Guruji" />
                </div>
                <p className="av-guruji-text">
                    Guided by the divine wisdom and blessings of Guruji
                </p>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="av-container">

                <div className="av-card">
                    <p>
                        The vision of the Ashram is to create a peaceful spiritual space
                        where seekers can grow in faith, discipline, and self-realization
                        under the guidance of Guruji.
                    </p>

                    <p>
                        The Ashram aims to spread love, compassion, and inner harmony by
                        encouraging a life rooted in devotion, service, and truth.
                    </p>

                    <p>
                        Guided by Guruji’s teachings, the Ashram works to uplift individuals
                        and society through spiritual practices, satsangs, seva activities,
                        and moral values—helping people live a balanced and meaningful life.
                    </p>
                </div>

                {/* ===== VALUES ===== */}
                <div className="av-values">
                    <div className="av-value-card">
                        <span>🕉️</span>
                        <h3>Faith</h3>
                        <p>Strengthening devotion through spiritual discipline</p>
                    </div>

                    <div className="av-value-card">
                        <span>🤲</span>
                        <h3>Seva</h3>
                        <p>Selfless service as a path to inner purification</p>
                    </div>

                    <div className="av-value-card">
                        <span>🌼</span>
                        <h3>Compassion</h3>
                        <p>Living with kindness, love, and empathy</p>
                    </div>

                    <div className="av-value-card">
                        <span>✨</span>
                        <h3>Truth</h3>
                        <p>Walking the righteous path with integrity</p>
                    </div>
                </div>

                {/* ===== QUOTE ===== */}
                <div className="av-quote">
                    “When the soul is peaceful, life becomes divine.”
                </div>

            </div>
        </section>
    );
};

export default AshramVision;
