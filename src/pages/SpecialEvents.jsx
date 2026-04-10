import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./SpecialEvents.css";
import guruPurnima from "../assets/photo25.jpg";
import satsangSamaroh from "../assets/photo28.jpg";
import mahaShivratri from "../assets/photo29.jpg";

const SpecialEvents = () => {
  const { t } = useTranslation();   // ✅ NEW

  // ✅ events inside component to use t()
  const events = [
    {
      title: t("specialEvents.e1_title"), type: t("specialEvents.e1_type"),
      date: t("specialEvents.e1_date"), location: t("specialEvents.e1_location"),
      image: guruPurnima,
      description: t("specialEvents.e1_desc"),
      highlights: [t("specialEvents.e1_h1"), t("specialEvents.e1_h2"), t("specialEvents.e1_h3"), t("specialEvents.e1_h4")],
    },
    {
      title: t("specialEvents.e2_title"), type: t("specialEvents.e2_type"),
      date: t("specialEvents.e2_date"), location: t("specialEvents.e2_location"),
      image: satsangSamaroh,
      description: t("specialEvents.e2_desc"),
      highlights: [t("specialEvents.e2_h1"), t("specialEvents.e2_h2"), t("specialEvents.e2_h3"), t("specialEvents.e2_h4")],
    },
    {
      title: t("specialEvents.e3_title"), type: t("specialEvents.e3_type"),
      date: t("specialEvents.e3_date"), location: t("specialEvents.e3_location"),
      image: mahaShivratri,
      description: t("specialEvents.e3_desc"),
      highlights: [t("specialEvents.e3_h1"), t("specialEvents.e3_h2"), t("specialEvents.e3_h3"), t("specialEvents.e3_h4")],
    },
  ];

  return (
    <section className="sev-page">

      {/* Hero */}
      <div className="sev-hero">
        <div className="sev-hero-eyebrow">{t("specialEvents.eyebrow")}</div>
        <h1>{t("specialEvents.title")}<span className="sev-hero-icon"> ✨</span></h1>
        <p>{t("specialEvents.subtitle")}</p>
        <div className="sev-hero-divider">
          <span className="sev-hero-divider-icon">🪷</span>
        </div>
      </div>

      {/* Events Grid */}
      <div className="sev-grid">
        {events.map((event, index) => (
          <div className="sev-card" key={index} style={{ "--i": index }}>
            <div className="sev-img-wrap">
              <img src={event.image} alt={event.title} />
              <div className="sev-img-overlay" />
              <span className="sev-badge">{event.type}</span>
            </div>
            <div className="sev-body">
              <h2>{event.title}</h2>
              <div className="sev-meta">
                <p className="sev-meta-date">📅 {event.date}</p>
                <p className="sev-meta-loc">📍 {event.location}</p>
              </div>
              <p className="sev-desc">{event.description}</p>
              <div className="sev-highlights-title">{t("specialEvents.highlights_label")}</div>
              <ul className="sev-highlights-list">
                {event.highlights.map((item, i) => (
                  <li key={i}><span>🕉</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SpecialEvents;