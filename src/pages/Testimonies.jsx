// src/pages/Testimonies.jsx
import React, { useEffect, useState } from "react";
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
      "For months I was worried about my health and mind. After visiting the ashram and doing satsang regularly, I felt a deep peace in my heart. Guruji’s blessings gave me strength to face my problems calmly. Within a short time, my reports improved and my family also felt happier and more connected. I now start my day with Guruji’s name and feel guided in every decision."
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
      "I was very confused about my career and personal life. After one darshan at the ashram, things slowly started becoming clear for me. Through Guruji’s satsangs and simple teachings on faith and hard work, I developed confidence and patience. I got a good job opportunity at the right time and my family relationships also healed. I truly feel Guruji arranged everything better than I imagined."
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
      "Earlier I used to overthink and stay stressed all the time. Regular bhajans and chanting brought a soft, silent joy inside me. I feel lighter, sleep better and handle daily challenges with a smile. The ashram became a second home where I can sit quietly, pray and feel Guruji’s presence. This inner peace is the biggest blessing in my life."
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
  const [openId, setOpenId] = useState(1); // default open: Story of the Week

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featured = testimoniesData[0];
  const others = testimoniesData.slice(1);

  return (
    <div className="testimonies-page">
      {/* Intro */}
      <section className="testimonies-intro">
        <p className="testimonies-badge">Devotee Voices</p>
        <h1>🌸 Testimonies of Grace 🌸</h1>
        <p className="testimonies-subtitle">
          Real stories from devotees whose lives were touched by Guruji&apos;s
          blessings, satsangs, and the loving atmosphere of the ashram.
        </p>
      </section>

      {/* Story of the Week */}
      <section className="featured-section">
        <p className="section-label">✨ Story of the Week</p>
        <div className="featured-card">
          <div className="featured-left">
            <div className="avatar-circle big-avatar">
              {featured.name.charAt(0)}
            </div>
            <div>
              <h2>{featured.name}</h2>
              <p className="meta">
                {featured.date} • {featured.location}
              </p>
              <span className="tag-pill">{featured.tag}</span>
            </div>
          </div>
          <p className="featured-text">{featured.fullText}</p>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="grid-section">
        <p className="section-label">🌸 More Devotee Experiences</p>

        <div className="testimonies-grid">
          {others.map((t) => {
            const isOpen = openId === t.id;
            return (
              <article
                key={t.id}
                className={`testimony-card ${isOpen ? "open" : ""}`}
              >
                <div className="card-header">
                  <div className="avatar-circle">{t.name.charAt(0)}</div>
                  <div>
                    <h3>{t.name}</h3>
                    <p className="meta">
                      {t.date} • {t.location}
                    </p>
                    <span className="tag-pill">{t.tag}</span>
                  </div>
                </div>

                <p className="card-text">
                  {isOpen ? t.fullText : t.shortText}
                </p>

                <button
                  className="card-button"
                  onClick={() => setOpenId(isOpen ? null : t.id)}
                >
                  {isOpen ? "Show Less" : "Read Full Story"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* Small call-to-action */}
      <section className="share-story-section">
        <h2>Share Your Experience</h2>
        <p>
          Have you felt Guruji&apos;s presence or received blessings in your
          life? You can share your story so that other devotees also feel
          inspired and hopeful.
        </p>
        {/* Later you can link this to a Google Form */}
        <button className="share-story-btn">
          Submit Your Testimony
        </button>
      </section>
    </div>
  );
};

export default Testimonies;
