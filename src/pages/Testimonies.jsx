// src/pages/Testimonies.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Testimonies.css";

const testimoniesData = [
  {
    id: 1,
    name: "Sita Devi",
    date: "10 Aug 2025",
    location: "Hyderabad",
    tag: "Healing",
    shortText:
      "For months I was worried about my health and mind. After visiting the ashram and doing satsang regularly, I felt a deep peace in my heart...",
    fullText:
      "For months I was worried about my health and mind. After visiting the ashram and doing satsang regularly, I felt a deep peace in my heart. Guruji's blessings gave me strength to face my problems calmly. Within a short time, my reports improved and my family also felt happier and more connected. I now start my day with Guruji's name and feel guided in every decision."
  },
  {
    id: 2,
    name: "Ravi Kumar",
    date: "25 Jul 2025",
    location: "Secunderabad",
    tag: "Guidance",
    shortText:
      "I was very confused about my career and personal life. After one darshan at the ashram, things slowly started becoming clear for me...",
    fullText:
      "I was very confused about my career and personal life. After one darshan at the ashram, things slowly started becoming clear for me. Through Guruji's satsangs and simple teachings on faith and hard work, I developed confidence and patience. I got a good job opportunity at the right time and my family relationships also healed. I truly feel Guruji arranged everything better than I imagined."
  },
  {
    id: 3,
    name: "Anjali Sharma",
    date: "5 Jun 2025",
    location: "Pune",
    tag: "Inner Peace",
    shortText:
      "Earlier I used to overthink and stay stressed all the time. Regular bhajans and chanting brought a soft, silent joy inside me...",
    fullText:
      "Earlier I used to overthink and stay stressed all the time. Regular bhajans and chanting brought a soft, silent joy inside me. I feel lighter, sleep better and handle daily challenges with a smile. The ashram became a second home where I can sit quietly, pray and feel Guruji's presence. This inner peace is the biggest blessing in my life."
  },
  {
    id: 4,
    name: "Mahesh & Family",
    date: "19 May 2025",
    location: "Mumbai",
    tag: "Family Blessings",
    shortText:
      "Our family was going through financial and emotional problems together. After attending Guru Purnima at the ashram, a big change came...",
    fullText:
      "Our family was going through financial and emotional problems. After attending Guru Purnima at the ashram, a big change came. Slowly, issues started resolving one by one. We received unexpected help, work started flowing, and there was more love and unity at home. We feel Guruji held our hand and walked us through a very difficult phase."
  }
];

const Testimonies = () => {
  const [openId, setOpenId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featured = testimoniesData[0];
  const others = testimoniesData.slice(1);

  return (
    <div className="tm-page">

      {/* Ambient background glows */}
      <div className="tm-bg" aria-hidden="true">
        <span className="tm-bg__glow tm-bg__glow--1" />
        <span className="tm-bg__glow tm-bg__glow--2" />
        <span className="tm-bg__glow tm-bg__glow--3" />
      </div>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="tm-intro">
        <div className="tm-intro__ornament">
          <span className="tm-orn-line" />
          <span className="tm-orn-icon">🌸</span>
          <span className="tm-orn-line" />
        </div>
        <h1 className="tm-intro__title">Testimonies of Grace</h1>
        <p className="tm-intro__subtitle">
          Real stories from devotees whose lives were touched by Guruji&apos;s
          blessings, satsangs, and the loving atmosphere of the ashram.
        </p>
        <div className="tm-intro__ornament tm-intro__ornament--bottom">
          <span className="tm-orn-line" />
          <span className="tm-orn-dot" />
          <span className="tm-orn-line" />
        </div>
      </section>

      {/* ── Story of the Week ──────────────────────────────── */}
      <section className="tm-featured">
        <p className="tm-section-label">
          <span className="tm-section-label__icon">✨</span>
          Story of the Week
        </p>

        <div className="tm-featured__card">
          {/* Decorative quote mark */}
          <span className="tm-featured__quote">&ldquo;</span>

          <div className="tm-featured__top">
            <div className="tm-avatar tm-avatar--lg">
              {featured.name.charAt(0)}
            </div>
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

      {/* ── More Testimonies Grid ──────────────────────────── */}
      <section className="tm-grid-section">
        <p className="tm-section-label">
          <span className="tm-section-label__icon">🌸</span>
          More Devotee Experiences
        </p>

        <div className="tm-grid">
          {others.map((t, i) => {
            const isOpen = openId === t.id;
            return (
              <article
                key={t.id}
                className={`tm-card ${isOpen ? "tm-card--open" : ""}`}
                style={{ animationDelay: `${0.2 + i * 0.12}s` }}
              >
                {/* Top accent bar */}
                <div className="tm-card__accent" />

                <div className="tm-card__header">
                  <div className="tm-avatar">{t.name.charAt(0)}</div>
                  <div className="tm-card__info">
                    <h3 className="tm-card__name">{t.name}</h3>
                    <p className="tm-meta">
                      <span className="tm-meta__date">{t.date}</span>
                      <span className="tm-meta__sep">·</span>
                      <span className="tm-meta__loc">{t.location}</span>
                    </p>
                    <span className="tm-tag">{t.tag}</span>
                  </div>
                </div>

                <div className="tm-card__divider" />

                <p className="tm-card__text">
                  {isOpen ? t.fullText : t.shortText}
                </p>

                <button
                  className="tm-card__btn"
                  onClick={() => setOpenId(isOpen ? null : t.id)}
                >
                  {isOpen ? "Show Less ↑" : "Read Full Story →"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Share Story CTA ────────────────────────────────── */}
      <section className="tm-cta">
        <div className="tm-cta__inner">
          <div className="tm-cta__icon-wrap">🙏</div>
          <h2 className="tm-cta__title">Share Your Experience</h2>
          <p className="tm-cta__text">
            Have you felt Guruji&apos;s presence or received blessings in your
            life? You can share your story so that other devotees also feel
            inspired and hopeful.
          </p>
          <button
            className="tm-cta__btn"
            onClick={() => navigate("/submit-testimony")}
          >
            Submit Your Testimony
          </button>
        </div>
      </section>

    </div>
  );
};

export default Testimonies;