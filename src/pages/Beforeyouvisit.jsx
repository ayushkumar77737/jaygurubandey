import React from "react";
import { useNavigate } from "react-router-dom";
import "./Beforeyouvisit.css";

const SECTIONS = [
  {
    id: "before-visit",
    title: "Before You Visit",
    icon: "📅",
    points: [
      "Plan your visit in advance, especially on Purnima, festivals, and special programs.",
      "Inform the ashram team if you are coming in a large group or need help with stay / food.",
      "Bring a valid ID proof if you are staying overnight in ashram accommodation.",
      "Avoid bringing valuables, heavy jewellery or large amounts of cash.",
    ],
  },
  {
    id: "dress-code",
    title: "Dress Code & Appearance",
    icon: "👕",
    points: [
      "Wear simple, modest and comfortable clothes (preferably traditional / light-coloured).",
      "Avoid sleeveless, tight, transparent or very short dresses.",
      "Please keep a clean and fresh appearance as a mark of respect to the ashram and Guru.",
      "Remove caps, sunglasses etc. inside the main temple / satsang hall.",
    ],
  },
  {
    id: "silence",
    title: "Silence & Discipline",
    icon: "🤫",
    points: [
      "Maintain silence in and around the main temple and meditation areas.",
      "Keep your mobile on silent or switch off; avoid taking calls inside the temple.",
      "Avoid loud talking, arguments, or disturbing behaviour in ashram premises.",
      "Follow the instructions of sevadars, volunteers and ashram staff politely.",
    ],
  },
  {
    id: "seva",
    title: "Seva & Participation",
    icon: "🤝",
    points: [
      "Participate in seva (service) like cleaning, helping in prasad / bhandara, arranging mats etc.",
      "Do seva with a humble heart, without ego or expectation.",
      "If you have any health issues, choose light seva suitable for your body.",
      "Children and youth are encouraged to join seva under adult supervision.",
    ],
  },
  {
    id: "food",
    title: "Prasad & Food Etiquette",
    icon: "🍲",
    points: [
      "Langar / prasad is served as per ashram timings. Please cooperate with the schedule.",
      "Avoid wasting food and water. Take only as much as you can eat.",
      "Do not bring non-vegetarian food, alcohol, tobacco or any intoxicants into the ashram.",
      "Chewing tobacco, smoking and alcohol consumption are strictly prohibited.",
    ],
  },
  {
    id: "photography",
    title: "Photography & Social Media",
    icon: "📸",
    points: [
      "Respect the sanctity of the place while taking photos or videos.",
      "Avoid flash photography inside the temple / during meditations.",
      "Do not disturb others' meditation or darshan for the sake of photos.",
      "Before posting on social media, share respectful content only.",
    ],
  },
  {
    id: "stay",
    title: "Stay & Accommodation Rules",
    icon: "🏠",
    points: [
      "Use ashram rooms and beds with care; keep your area neat and clean.",
      "Follow check-in and check-out timings given by the ashram office.",
      "Male and female devotees are allotted separate accommodation as per rules.",
      "Lights-out time should be respected so that others can rest peacefully.",
    ],
  },
  {
    id: "environment",
    title: "Cleanliness & Environment",
    icon: "🌿",
    points: [
      "Use dustbins for all waste; do not litter anywhere in the ashram.",
      "Keep toilets and bathrooms clean for the next person.",
      "Use water mindfully; avoid unnecessary wastage.",
      "Protect plants, trees and ashram property. Do not pluck flowers without permission.",
    ],
  },
  {
    id: "safety",
    title: "Safety & Emergency",
    icon: "🚨",
    points: [
      "Report any medical emergency immediately to the nearest sevadar / office.",
      "Children should remain with parents/guardians; do not leave them unattended.",
      "Do not enter restricted areas or climb on walls / railings.",
      "In case of any confusion, always contact the ashram help desk.",
    ],
  },
];

const AshramRules = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="ashrul__page">

      {/* Background orbs */}
      <div className="ashrul__orb ashrul__orb--1" />
      <div className="ashrul__orb ashrul__orb--2" />
      <div className="ashrul__orb ashrul__orb--3" />

      {/* ===== HERO ===== */}
      <section className="ashrul__hero">
        <div className="ashrul__hero-badge">Sacred Guidelines</div>
        <h1 className="ashrul__hero-title">
          Ashram Rules <span className="ashrul__hero-scroll">📜</span> Guidelines
        </h1>
        <p className="ashrul__hero-sub">
          To keep the atmosphere pure, peaceful and safe for everyone, we request
          all visitors to kindly follow these simple guidelines during their
          stay in the ashram.
        </p>
        <div className="ashrul__hero-divider">
          <span className="ashrul__div-line" />
          <span className="ashrul__div-gem">✦</span>
          <span className="ashrul__div-line" />
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="ashrul__quick">
        <p className="ashrul__quick-label">Jump to Section</p>
        <div className="ashrul__quick-grid">
          {SECTIONS.slice(0, 6).map((section) => (
            <button
              key={section.id}
              className="ashrul__chip"
              onClick={() => handleScroll(section.id)}
            >
              <span className="ashrul__chip-icon">{section.icon}</span>
              <span className="ashrul__chip-text">{section.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ===== MAIN LAYOUT ===== */}
      <section className="ashrul__layout">

        {/* Left sticky card */}
        <aside className="ashrul__summary">

          <div className="ashrul__summary-block ashrul__summary-dos">
            <h2 className="ashrul__summary-heading">
              <span className="ashrul__summary-icon">✅</span> Simple Do's
            </h2>
            <ul className="ashrul__summary-list">
              <li>Come with faith, respect and an open heart.</li>
              <li>Maintain cleanliness, silence and discipline.</li>
              <li>Participate in seva and satsang sincerely.</li>
              <li>Respect all devotees, sevadars and ashram staff.</li>
            </ul>
          </div>

          <div className="ashrul__summary-divider" />

          <div className="ashrul__summary-block ashrul__summary-donts">
            <h2 className="ashrul__summary-heading">
              <span className="ashrul__summary-icon">🚫</span> Simple Don'ts
            </h2>
            <ul className="ashrul__summary-list ashrul__summary-list--dont">
              <li>Do not bring alcohol, tobacco or non-vegetarian items.</li>
              <li>Do not click disturbing / disrespectful photos or videos.</li>
              <li>Do not argue, shout or create disturbance in ashram.</li>
              <li>Do not damage any ashram property or plants.</li>
            </ul>
          </div>

          <div className="ashrul__summary-note">
            🌺 By entering the ashram, you lovingly accept these guidelines and
            help maintain the sacred atmosphere for everyone.
          </div>
        </aside>

        {/* Right sections */}
        <div className="ashrul__sections">
          {SECTIONS.map((section, i) => (
            <article
              key={section.id}
              id={section.id}
              className="ashrul__card"
              style={{ animationDelay: `${0.08 + i * 0.07}s` }}
            >
              <div className="ashrul__card-header">
                <span className="ashrul__card-icon">{section.icon}</span>
                <h3 className="ashrul__card-title">{section.title}</h3>
              </div>
              <ul className="ashrul__rules-list">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="ashrul__cta">
        <div className="ashrul__cta-inner">
          <div className="ashrul__cta-emoji">🌸</div>
          <h2 className="ashrul__cta-title">Thank You for Your Cooperation</h2>
          <p className="ashrul__cta-sub">
            Your support in following these guidelines allows every devotee to
            experience peace, devotion and joy in the ashram. We look forward to
            welcoming you with love and respect.
          </p>
          <button
            className="ashrul__cta-btn"
            onClick={() => navigate("/")}
          >
            I have read &amp; understood the guidelines
          </button>
        </div>
      </section>

    </div>
  );
};

export default AshramRules;