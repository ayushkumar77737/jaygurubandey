import React from "react";
import "./AshramLife.css";

import seva1 from "../assets/photo1.jpg";
import seva2 from "../assets/photo3.jpg";
import seva3 from "../assets/photo4.jpg";
import seva4 from "../assets/photo27.jpg";

const AshramLife = () => {
  return (
    <section className="ashl-page">

      {/* ===== DECORATIVE BG ===== */}
      <div className="ashl-bg" aria-hidden="true">
        <div className="ashl-bg-orb ashl-bg-orb-1" />
        <div className="ashl-bg-orb ashl-bg-orb-2" />
        <div className="ashl-bg-orb ashl-bg-orb-3" />
        <div className="ashl-bg-mandala" />
      </div>

      {/* ===== HERO ===== */}
      <div className="ashl-hero">
        <div className="ashl-hero-inner">
          <p className="ashl-hero-eyebrow">✦ A Life of Devotion ✦</p>
          <h1>Ashram Life</h1>
          <p className="ashl-hero-sub">Daily Activities, Discipline & Seva</p>
          <div className="ashl-hero-divider">
            <span className="ashl-divider-line" />
            <span className="ashl-divider-lotus">🪷</span>
            <span className="ashl-divider-line" />
          </div>
        </div>
      </div>

      {/* ===== INTRO ===== */}
      <div className="ashl-intro">
        <p>
          Ashram life is a sacred blend of devotion, discipline, simplicity, and
          selfless service. Every activity here is a form of sadhana, nurturing
          inner peace, humility, and spiritual growth.
        </p>
      </div>

      {/* ===== DAILY ROUTINE ===== */}
      <div className="ashl-section">
        <div className="ashl-section-head">
          <span className="ashl-section-icon">🌅</span>
          <h2>Daily Routine</h2>
          <div className="ashl-section-rule" />
        </div>

        <div className="ashl-cards">
          <div className="ashl-card">
            <div className="ashl-card-glow" />
            <span className="ashl-card-icon">🔔</span>
            <h3>Morning Satsang</h3>
            <p>Early morning prayer, meditation, and chanting to purify the mind and awaken devotion.</p>
          </div>

          <div className="ashl-card">
            <div className="ashl-card-glow" />
            <span className="ashl-card-icon">📖</span>
            <h3>Spiritual Study</h3>
            <p>Listening to Guruji's teachings, scriptures, and Amritvani for self-realization.</p>
          </div>

          <div className="ashl-card">
            <div className="ashl-card-glow" />
            <span className="ashl-card-icon">🎵</span>
            <h3>Bhajan & Kirtan</h3>
            <p>Collective singing of divine bhajans to deepen love and surrender.</p>
          </div>

          <div className="ashl-card">
            <div className="ashl-card-glow" />
            <span className="ashl-card-icon">🪔</span>
            <h3>Evening Aarti</h3>
            <p>A serene closure of the day with gratitude, prayers, and remembrance of the Divine.</p>
          </div>
        </div>
      </div>

      {/* ===== SEVA ===== */}
      <div className="ashl-section ashl-seva-section">
        <div className="ashl-section-head">
          <span className="ashl-section-icon">🙏</span>
          <h2>Seva (Selfless Service)</h2>
          <div className="ashl-section-rule" />
        </div>

        <div className="ashl-seva-grid">
          <div className="ashl-seva-card">
            <div className="ashl-seva-img-wrap">
              <img src={seva1} alt="Ashram Cleaning Seva" />
              <div className="ashl-seva-shimmer" />
            </div>
            <div className="ashl-seva-body">
              <h4>Ashram Maintenance</h4>
              <p>Cleaning, gardening, and maintaining the Ashram premises with devotion.</p>
            </div>
          </div>

          <div className="ashl-seva-card">
            <div className="ashl-seva-img-wrap">
              <img src={seva2} alt="Langar Seva" />
              <div className="ashl-seva-shimmer" />
            </div>
            <div className="ashl-seva-body">
              <h4>Langar & Kitchen Seva</h4>
              <p>Preparing and serving food as an offering to all devotees.</p>
            </div>
          </div>

          <div className="ashl-seva-card">
            <div className="ashl-seva-img-wrap">
              <img src={seva3} alt="Event Seva" />
              <div className="ashl-seva-shimmer" />
            </div>
            <div className="ashl-seva-body">
              <h4>Satsang & Event Seva</h4>
              <p>Arranging satsangs, managing gatherings, and assisting devotees.</p>
            </div>
          </div>

          <div className="ashl-seva-card">
            <div className="ashl-seva-img-wrap">
              <img src={seva4} alt="Community Service" />
              <div className="ashl-seva-shimmer" />
            </div>
            <div className="ashl-seva-body">
              <h4>Community Service</h4>
              <p>Helping society through charity, guidance, and spiritual outreach.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CLOSING ===== */}
      <div className="ashl-closing">
        <div className="ashl-closing-ornament" aria-hidden="true">✦</div>
        <p>
          In Ashram life, seva is not duty — it is devotion.<br />
          Every act becomes a prayer, every moment a step towards self-realization.
        </p>
        <span>🙏 Saheb Sabka 🙏</span>
      </div>

    </section>
  );
};

export default AshramLife;