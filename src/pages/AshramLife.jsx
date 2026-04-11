import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./AshramLife.css";
import seva1 from "../assets/photo1.jpg";
import seva2 from "../assets/photo3.jpg";
import seva3 from "../assets/photo4.jpg";
import seva4 from "../assets/photo27.jpg";

const AshramLife = () => {
  const { t } = useTranslation();   // ✅ NEW

  return (
    <section className="ashl-page">

      {/* Background */}
      <div className="ashl-bg" aria-hidden="true">
        <div className="ashl-bg-orb ashl-bg-orb-1" />
        <div className="ashl-bg-orb ashl-bg-orb-2" />
        <div className="ashl-bg-orb ashl-bg-orb-3" />
        <div className="ashl-bg-mandala" />
      </div>

      {/* Hero */}
      <div className="ashl-hero">
        <div className="ashl-hero-inner">
          <p className="ashl-hero-eyebrow">{t("ashramLife.eyebrow")}</p>
          <h1>{t("ashramLife.title")}</h1>
          <p className="ashl-hero-sub">{t("ashramLife.sub")}</p>
          <div className="ashl-hero-divider">
            <span className="ashl-divider-line" />
            <span className="ashl-divider-lotus">🪷</span>
            <span className="ashl-divider-line" />
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="ashl-intro">
        <p>{t("ashramLife.intro")}</p>
      </div>

      {/* Daily Routine */}
      <div className="ashl-section">
        <div className="ashl-section-head">
          <span className="ashl-section-icon">🌅</span>
          <h2>{t("ashramLife.routine_title")}</h2>
          <div className="ashl-section-rule" />
        </div>
        <div className="ashl-cards">
          {[
            { icon: "🔔", title: t("ashramLife.c1_title"), desc: t("ashramLife.c1_desc") },
            { icon: "📖", title: t("ashramLife.c2_title"), desc: t("ashramLife.c2_desc") },
            { icon: "🎵", title: t("ashramLife.c3_title"), desc: t("ashramLife.c3_desc") },
            { icon: "🪔", title: t("ashramLife.c4_title"), desc: t("ashramLife.c4_desc") },
          ].map((card, i) => (
            <div className="ashl-card" key={i}>
              <div className="ashl-card-glow" />
              <span className="ashl-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seva */}
      <div className="ashl-section ashl-seva-section">
        <div className="ashl-section-head">
          <span className="ashl-section-icon">🙏</span>
          <h2>{t("ashramLife.seva_title")}</h2>
          <div className="ashl-section-rule" />
        </div>
        <div className="ashl-seva-grid">
          {[
            { img: seva1, alt: "Ashram Cleaning Seva", title: t("ashramLife.s1_title"), desc: t("ashramLife.s1_desc") },
            { img: seva2, alt: "Langar Seva", title: t("ashramLife.s2_title"), desc: t("ashramLife.s2_desc") },
            { img: seva3, alt: "Event Seva", title: t("ashramLife.s3_title"), desc: t("ashramLife.s3_desc") },
            { img: seva4, alt: "Community Service", title: t("ashramLife.s4_title"), desc: t("ashramLife.s4_desc") },
          ].map((s, i) => (
            <div className="ashl-seva-card" key={i}>
              <div className="ashl-seva-img-wrap">
                <img src={s.img} alt={s.alt} />
                <div className="ashl-seva-shimmer" />
              </div>
              <div className="ashl-seva-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing */}
      <div className="ashl-closing">
        <div className="ashl-closing-ornament" aria-hidden="true">✦</div>
        <p>
          {t("ashramLife.closing_p").split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
          ))}
        </p>
        <span>{t("ashramLife.closing_tag")}</span>
      </div>

    </section>
  );
};

export default AshramLife;