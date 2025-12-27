import React from "react";
import "./AshramLife.css";

import seva1 from "../assets/photo1.jpg";
import seva2 from "../assets/photo3.jpg";
import seva3 from "../assets/photo4.jpg";
import seva4 from "../assets/photo27.jpg";

const AshramLife = () => {
  return (
    <section className="ashram-life">

      {/* ===== HERO ===== */}
      <div className="al-hero">
        <h1>Ashram Life</h1>
        <p>Daily Activities, Discipline & Seva</p>
      </div>

      {/* ===== INTRO ===== */}
      <div className="al-intro">
        <p>
          Ashram life is a sacred blend of devotion, discipline, simplicity, and
          selfless service. Every activity here is a form of sadhana, nurturing
          inner peace, humility, and spiritual growth.
        </p>
      </div>

      {/* ===== DAILY ROUTINE ===== */}
      <div className="al-section">
        <h2>🌅 Daily Routine</h2>

        <div className="al-cards">
          <div className="al-card">
            <h3>Morning Satsang</h3>
            <p>Early morning prayer, meditation, and chanting to purify the mind and awaken devotion.</p>
          </div>

          <div className="al-card">
            <h3>Spiritual Study</h3>
            <p>Listening to Guruji’s teachings, scriptures, and Amritvani for self-realization.</p>
          </div>

          <div className="al-card">
            <h3>Bhajan & Kirtan</h3>
            <p>Collective singing of divine bhajans to deepen love and surrender.</p>
          </div>

          <div className="al-card">
            <h3>Evening Aarti</h3>
            <p>A serene closure of the day with gratitude, prayers, and remembrance of the Divine.</p>
          </div>
        </div>
      </div>

      {/* ===== SEVA ===== */}
      <div className="al-section seva-section">
        <h2>🙏 Seva (Selfless Service)</h2>

        <div className="seva-grid">
          <div className="seva-card">
            <img src={seva1} alt="Ashram Cleaning Seva" />
            <h4>Ashram Maintenance</h4>
            <p>Cleaning, gardening, and maintaining the Ashram premises with devotion.</p>
          </div>

          <div className="seva-card">
            <img src={seva2} alt="Langar Seva" />
            <h4>Langar & Kitchen Seva</h4>
            <p>Preparing and serving food as an offering to all devotees.</p>
          </div>

          <div className="seva-card">
            <img src={seva3} alt="Event Seva" />
            <h4>Satsang & Event Seva</h4>
            <p>Arranging satsangs, managing gatherings, and assisting devotees.</p>
          </div>

          <div className="seva-card">
            <img src={seva4} alt="Community Service" />
            <h4>Community Service</h4>
            <p>Helping society through charity, guidance, and spiritual outreach.</p>
          </div>
        </div>
      </div>

      {/* ===== CLOSING ===== */}
      <div className="al-closing">
        <p>
          In Ashram life, seva is not duty—it is devotion.  
          Every act becomes a prayer, every moment a step towards self-realization.
        </p>
        <span>🙏 Saheb Sabka 🙏</span>
      </div>

    </section>
  );
};

export default AshramLife;
