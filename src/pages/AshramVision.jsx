import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./AshramVision.css";
import guruji from "../assets/guruji.webp";

const AshramVision = () => {
    const { t } = useTranslation();   // ✅ NEW

    const values = [
        { icon: "🕉️", title: t("ashramVision.v1_title"), text: t("ashramVision.v1_text") },
        { icon: "🤲", title: t("ashramVision.v2_title"), text: t("ashramVision.v2_text") },
        { icon: "🌼", title: t("ashramVision.v3_title"), text: t("ashramVision.v3_text") },
        { icon: "✨", title: t("ashramVision.v4_title"), text: t("ashramVision.v4_text") },
    ];

    return (
        <section className="avs__page">
            <div className="avs__orb avs__orb--1" />
            <div className="avs__orb avs__orb--2" />

            {/* Hero */}
            <div className="avs__hero">
                <span className="avs__hero-badge">{t("ashramVision.badge")}</span>
                <h1 className="avs__title">{t("ashramVision.title")}</h1>
                <div className="avs__title-line" />
                <p className="avs__subtitle">{t("ashramVision.subtitle")}</p>
            </div>

            {/* Guruji Image */}
            <div className="avs__guruji">
                <div className="avs__guruji-halo" />
                <div className="avs__guruji-frame">
                    <img src={guruji} alt="Guruji" className="avs__guruji-img" />
                </div>
                <p className="avs__guruji-text">{t("ashramVision.guruji_text")}</p>
            </div>

            {/* Main Container */}
            <div className="avs__container">

                {/* Main Card */}
                <div className="avs__card">
                    <div className="avs__card-accent" />
                    <p className="avs__card-para">{t("ashramVision.p1")}</p>
                    <div className="avs__card-rule" />
                    <p className="avs__card-para">{t("ashramVision.p2")}</p>
                    <div className="avs__card-rule" />
                    <p className="avs__card-para">{t("ashramVision.p3")}</p>
                </div>

                {/* Values */}
                <div className="avs__values-heading">
                    <span className="avs__values-tag">{t("ashramVision.pillars_tag")}</span>
                    <div className="avs__values-rule" />
                </div>

                <div className="avs__values">
                    {values.map((v, i) => (
                        <div className="avs__value-card" key={v.title} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="avs__value-icon">{v.icon}</div>
                            <h3 className="avs__value-title">{v.title}</h3>
                            <div className="avs__value-rule" />
                            <p className="avs__value-text">{v.text}</p>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="avs__quote-wrap">
                    <div className="avs__quote-mark avs__quote-mark--open">"</div>
                    <p className="avs__quote">{t("ashramVision.quote")}</p>
                    <div className="avs__quote-mark avs__quote-mark--close">"</div>
                </div>

            </div>
        </section>
    );
};

export default AshramVision;