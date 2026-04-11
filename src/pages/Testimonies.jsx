import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Testimonies.css";

const Testimonies = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [openId, setOpenId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ data inside component to use t()
  const testimoniesData = [
    { id: 1, name: t("testimonies.t1_name"), date: t("testimonies.t1_date"), location: t("testimonies.t1_location"), tag: t("testimonies.t1_tag"), shortText: t("testimonies.t1_short"), fullText: t("testimonies.t1_full") },
    { id: 2, name: t("testimonies.t2_name"), date: t("testimonies.t2_date"), location: t("testimonies.t2_location"), tag: t("testimonies.t2_tag"), shortText: t("testimonies.t2_short"), fullText: t("testimonies.t2_full") },
    { id: 3, name: t("testimonies.t3_name"), date: t("testimonies.t3_date"), location: t("testimonies.t3_location"), tag: t("testimonies.t3_tag"), shortText: t("testimonies.t3_short"), fullText: t("testimonies.t3_full") },
    { id: 4, name: t("testimonies.t4_name"), date: t("testimonies.t4_date"), location: t("testimonies.t4_location"), tag: t("testimonies.t4_tag"), shortText: t("testimonies.t4_short"), fullText: t("testimonies.t4_full") },
  ];

  const featured = testimoniesData[0];
  const others = testimoniesData.slice(1);

  return (
    <div className="tm-page">

      <div className="tm-bg" aria-hidden="true">
        <span className="tm-bg__glow tm-bg__glow--1" />
        <span className="tm-bg__glow tm-bg__glow--2" />
        <span className="tm-bg__glow tm-bg__glow--3" />
      </div>

      {/* Intro */}
      <section className="tm-intro">
        <div className="tm-intro__ornament">
          <span className="tm-orn-line" /><span className="tm-orn-icon">🌸</span><span className="tm-orn-line" />
        </div>
        <h1 className="tm-intro__title">{t("testimonies.title")}</h1>
        <p className="tm-intro__subtitle">{t("testimonies.subtitle")}</p>
        <div className="tm-intro__ornament tm-intro__ornament--bottom">
          <span className="tm-orn-line" /><span className="tm-orn-dot" /><span className="tm-orn-line" />
        </div>
      </section>

      {/* Featured */}
      <section className="tm-featured">
        <p className="tm-section-label">
          <span className="tm-section-label__icon">✨</span>
          {t("testimonies.story_week")}
        </p>
        <div className="tm-featured__card">
          <span className="tm-featured__quote">&ldquo;</span>
          <div className="tm-featured__top">
            <div className="tm-avatar tm-avatar--lg">{featured.name.charAt(0)}</div>
            <div className="tm-featured__info">
              <h2 className="tm-featured__name">{featured.name}</h2>
              <p className="tm-meta">
                <span className="tm-meta__date">{featured.date}</span>
                <span className="tm-meta__sep">·</span>
                <span className="tm-meta__loc">{featured.location}</span>
              </p>
              <span className="tm-tag">{featured.tag}</span>
            </div>
          </div>
          <p className="tm-featured__text">{featured.fullText}</p>
          <div className="tm-featured__bar" />
        </div>
      </section>

      {/* More Grid */}
      <section className="tm-grid-section">
        <p className="tm-section-label">
          <span className="tm-section-label__icon">🌸</span>
          {t("testimonies.more_label")}
        </p>
        <div className="tm-grid">
          {others.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <article
                key={item.id}
                className={`tm-card ${isOpen ? "tm-card--open" : ""}`}
                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              >
                <div className="tm-card__accent" />
                <div className="tm-card__header">
                  <div className="tm-avatar">{item.name.charAt(0)}</div>
                  <div className="tm-card__info">
                    <h3 className="tm-card__name">{item.name}</h3>
                    <p className="tm-meta">
                      <span className="tm-meta__date">{item.date}</span>
                      <span className="tm-meta__sep">·</span>
                      <span className="tm-meta__loc">{item.location}</span>
                    </p>
                    <span className="tm-tag">{item.tag}</span>
                  </div>
                </div>
                <div className="tm-card__divider" />
                <p className="tm-card__text">{isOpen ? item.fullText : item.shortText}</p>
                <button className="tm-card__btn" onClick={() => setOpenId(isOpen ? null : item.id)}>
                  {isOpen ? t("testimonies.show_less") : t("testimonies.read_more")}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="tm-cta">
        <div className="tm-cta__inner">
          <div className="tm-cta__icon-wrap">🙏</div>
          <h2 className="tm-cta__title">{t("testimonies.cta_title")}</h2>
          <p className="tm-cta__text">{t("testimonies.cta_text")}</p>
          <button className="tm-cta__btn" onClick={() => navigate("/submit-testimony")}>
            {t("testimonies.cta_btn")}
          </button>
        </div>
      </section>

    </div>
  );
};

export default Testimonies;