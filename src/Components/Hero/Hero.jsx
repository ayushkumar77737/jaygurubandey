import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import ScrollingText from "../../pages/ScrollingText";
import AnnouncementBar from "../../pages/AnnouncementBar";
import FlowerSprinkler from "../../pages/FlowerSprinkler";
import LoadingPage from "../../pages/LoadingPage";
import "./Hero.css";
import missionImg from "../../assets/photo9.webp";
import visionImg from "../../assets/photo10.webp";
import bio from "../../assets/bio.jpg";
import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import photo1 from "../../assets/photo1.jpg";
import photo6 from "../../assets/photo6.webp";
import photo7 from "../../assets/photo7.webp";
import photo8 from "../../assets/photo8.webp";
import photo10 from "../../assets/photo10.webp";
import photo19 from "../../assets/photo19.webp";
import pic from "../../assets/pic.jpeg";
import spirtual1 from "../../assets/spirtual1.webp";
import spirtual2 from "../../assets/spirtual2.webp";
import spirtual3 from "../../assets/spirtual3.webp";
import spirtual4 from "../../assets/spirtual4.webp";
import spirtual5 from "../../assets/spirtual5.webp";
import spirtual6 from "../../assets/spirtual6.webp";
import spirtual7 from "../../assets/spirtual7.webp";
import spirtual8 from "../../assets/spirtual8.webp";
import spirtual9 from "../../assets/spirtual9.webp";
import spirtual10 from "../../assets/spirtual10.webp";
import dhyanImg from "../../assets/Dhyan.webp";
import {
  FaYoutube, FaInstagram, FaFacebook, FaWhatsapp,
  FaHandsHelping, FaCalendarAlt, FaUsers, FaGlobe, FaTelegramPlane,
  FaChevronLeft, FaChevronRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gmailLogo from "../../assets/gmail.png";

/* ══ SPIRITUAL CAROUSEL (quotes are kept in English as they are scripture) ══ */
const spiritualSlides = [
  { img: spirtual1, quote: "The soul is neither born, nor does it die at any time. It is unborn, eternal, ever-existing and primeval.", source: "— Bhagavad Gita, Chapter 2 · Verse 20" },
  { img: spirtual2, quote: "Guru Govind dono khade, kake laagoon paay. Balihari Guru aapne, Govind diyo batay.", source: "— Sant Kabir Das Ji" },
  { img: spirtual3, quote: "In the repetition of the divine name lies the secret to silencing the restless mind and opening the heart.", source: "— Guruji's Teachings" },
  { img: spirtual4, quote: "Seva — selfless service — is the highest worship. Give without expectation, love without condition.", source: "— Sri Guru Ashram" },
  { img: spirtual5, quote: "Satsang transforms hearts. The company of the enlightened is the fastest boat across the ocean of illusion.", source: "— Ancient Wisdom" },
  { img: spirtual6, quote: "Dhyan is not emptiness — it is the fullness of pure, undistracted awareness resting in the divine.", source: "— Guruji's Teachings" },
  { img: spirtual7, quote: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.", source: "— Bhagavad Gita, Chapter 6 · Verse 19" },
  { img: spirtual8, quote: "You have the right to perform your duty, but not to the fruits of your actions.", source: "— Bhagavad Gita, Chapter 2 · Verse 47" },
  { img: spirtual9, quote: "Set thy heart upon thy work, but never on its reward.", source: "— Bhagavad Gita" },
  { img: spirtual10, quote: "A person is said to be elevated who is not disturbed by happiness and distress.", source: "— Bhagavad Gita, Chapter 6" },
];

const SpiritualCarousel = () => {
  const [spIndex, setSpIndex] = useState(0);
  const spRef = useRef(null);
  const startSp = () => {
    clearInterval(spRef.current);
    spRef.current = setInterval(() => setSpIndex((p) => (p + 1) % spiritualSlides.length), 5000);
  };
  useEffect(() => { startSp(); return () => clearInterval(spRef.current); }, []);
  const spPrev = () => { setSpIndex((p) => (p - 1 + spiritualSlides.length) % spiritualSlides.length); startSp(); };
  const spNext = () => { setSpIndex((p) => (p + 1) % spiritualSlides.length); startSp(); };

  return (
    <div className="hx-sp-carousel">
      {spiritualSlides.map((slide, i) => (
        <div key={i} className={`hx-sp-slide${i === spIndex ? " hx-sp-slide--active" : ""}`}>
          <img src={slide.img} alt="" className="hx-sp-img" />
          <div className="hx-sp-overlay" />
          <div className="hx-sp-text-block">
            <span className="hx-sp-open-quote">"</span>
            <p className="hx-sp-quote-text">{slide.quote}</p>
            <div className="hx-sp-quote-rule" />
            <cite className="hx-sp-cite">{slide.source}</cite>
          </div>
        </div>
      ))}
      <button className="hx-sp-btn hx-sp-btn--prev" onClick={spPrev} aria-label="Previous"><FaChevronLeft /></button>
      <button className="hx-sp-btn hx-sp-btn--next" onClick={spNext} aria-label="Next"><FaChevronRight /></button>
      <div className="hx-sp-dots">
        {spiritualSlides.map((_, i) => (
          <button key={i} className={`hx-sp-dot${i === spIndex ? " hx-sp-dot--active" : ""}`} onClick={() => { setSpIndex(i); startSp(); }} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
      <div className="hx-sp-counter">{spIndex + 1} / {spiritualSlides.length}</div>
    </div>
  );
};

/* ══ HERO PAGE ══ */
const Hero = () => {
  const { t } = useTranslation();   // ✅ NEW
  const aboutImages = [photo7, photo8, photo6];
  const [aboutIndex, setAboutIndex] = useState(0);
  const navigate = useNavigate();
  const images = [bio, pic, hero1, hero2, photo1, photo6, photo7, photo8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const alreadyShown = sessionStorage.getItem("hasShownLoader");
  const [loading, setLoading] = useState(!alreadyShown);

  useEffect(() => {
    const interval = setInterval(() => setAboutIndex((prev) => (prev + 1) % aboutImages.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!alreadyShown) {
      const timer = setTimeout(() => { setLoading(false); sessionStorage.setItem("hasShownLoader", "true"); }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alreadyShown]);

  useEffect(() => { images.forEach((src) => { const img = new Image(); img.src = src; }); }, [images]);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 4000);
  };

  useEffect(() => { startAutoPlay(); return () => clearInterval(intervalRef.current); }, [images.length]);

  const handlePrev = () => { setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); startAutoPlay(); };
  const handleNext = () => { setCurrentIndex((prev) => (prev + 1) % images.length); startAutoPlay(); };
  const handleDotClick = (i) => { setCurrentIndex(i); startAutoPlay(); };

  const fullText = `Param Sant Swami Jai Gurubande Ji Maharaj\nLet's Move Towards God And Understand Sanatan Dharma.\nIt's a spiritual and philosophical message encouraging people to seek divine connection and explore the essence of Sanatan Dharma.`;
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const ulatImages = [photo7, photo8, photo6];
  const [ulatIndex, setUlatIndex] = useState(0);
  const ulatText = `Ulat-Bhaidni reveals hidden spiritual truths through symbolic and paradoxical expressions, guiding the seeker beyond ordinary understanding.\n\nThese mystical expressions encourage seekers to look beyond literal meanings and experience deeper spiritual realization.`;
  const [ulatDisplayedText, setUlatDisplayedText] = useState("");
  const [ulatCharIndex, setUlatCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setUlatIndex(prev => (prev + 1) % ulatImages.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (ulatCharIndex < ulatText.length) {
      timer = setTimeout(() => { setUlatDisplayedText(prev => prev + ulatText[ulatCharIndex]); setUlatCharIndex(prev => prev + 1); }, 30);
    } else {
      timer = setTimeout(() => { setUlatDisplayedText(""); setUlatCharIndex(0); }, 2000);
    }
    return () => clearTimeout(timer);
  }, [ulatCharIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < fullText.length) { setDisplayedText((prev) => prev + fullText[charIndex]); setCharIndex((prev) => prev + 1); }
      else { setTimeout(() => { setDisplayedText(""); setCharIndex(0); }, 2000); }
    }, 50);
    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  const textLines = displayedText.split("\n");

  if (loading) return <LoadingPage />;

  return (
    <div className="hx-page">
      <AnnouncementBar />

      {/* ══ HERO ══ */}
      <div className="hx-hero">
        <FlowerSprinkler />
        {images.map((img, index) => (
          <div key={index} className={`hx-hero-bg${index === currentIndex ? " hx-hero-bg--active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.22)), url(${img})` }} />
        ))}
        <div className="hx-hero-grain" />
        <div className="hx-hero-fade" />
        <button className="hx-car-btn hx-car-btn--prev" onClick={handlePrev} aria-label="Previous"><FaChevronLeft /></button>
        <button className="hx-car-btn hx-car-btn--next" onClick={handleNext} aria-label="Next"><FaChevronRight /></button>
        <div className="hx-car-dots">
          {images.map((_, i) => (
            <button key={i} className={`hx-car-dot${i === currentIndex ? " hx-car-dot--active" : ""}`} onClick={() => handleDotClick(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <div className="hx-car-counter">{currentIndex + 1} / {images.length}</div>
        <div className="hx-hero-text">
          {textLines[0] && <p className="hx-hero-saint">{textLines[0]}</p>}
          {textLines[1] && <h1 className="hx-hero-title">{textLines[1]}</h1>}
          {textLines[2] && <p className="hx-hero-sub">{textLines[2]}</p>}
          <div className="hx-hero-ornament">
            <span className="hx-orn-line" /><span className="hx-orn-gem">✦</span><span className="hx-orn-line" />
          </div>
        </div>
      </div>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ ABOUT ══ */}
      <section className="hx-about">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.about_tag")}</span>
          <h2 className="hx-section-title">{t("hero.about_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-about-wrap">
          <div className="hx-about-img-frame">
            <div className="hx-img-border" />
            <img src={aboutImages[aboutIndex]} alt="Guruji" key={aboutIndex} className="hx-about-img" />
            <div className="hx-img-corner hx-img-corner--tl" />
            <div className="hx-img-corner hx-img-corner--tr" />
            <div className="hx-img-corner hx-img-corner--bl" />
            <div className="hx-img-corner hx-img-corner--br" />
          </div>
          <div className="hx-about-body">
            <p className="hx-about-p">{t("hero.about_p1")}</p>
            <p className="hx-about-p">{t("hero.about_p2")}</p>
            <div className="hx-btn-row">
              <button className="hx-btn-primary" onClick={() => navigate("/about")}>
                {t("hero.about_btn")}<span className="hx-btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ ULAT-BHAIDNI ══ */}
      <section className="hx-ulat">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.ulat_tag")}</span>
          <h2 className="hx-section-title">{t("hero.ulat_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-ulat-wrap">
          <div className="hx-about-img-frame">
            <div className="hx-img-border" />
            <img src={ulatImages[ulatIndex]} alt="Guruji" key={ulatIndex} className="hx-about-img" />
            <div className="hx-img-corner hx-img-corner--tl" />
            <div className="hx-img-corner hx-img-corner--tr" />
            <div className="hx-img-corner hx-img-corner--bl" />
            <div className="hx-img-corner hx-img-corner--br" />
          </div>
          <div className="hx-ulat-body">
            {ulatDisplayedText.split("\n\n").map((para, index) => (
              <p key={index} className="hx-ulat-p">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ GYAN & DHYAN ══ */}
      <section className="hx-spiritual">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.gyan_tag")}</span>
          <h2 className="hx-section-title">{t("hero.gyan_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-gd-wrap">
          <div className="hx-gd-left"><SpiritualCarousel /></div>
          <div className="hx-gd-sep"><span className="hx-gd-sep-gem">✦</span></div>
          <div className="hx-gd-right">
            <div className="hx-dhyan-card">
              <div className="hx-dhyan-img-wrap">
                <img src={dhyanImg} alt="Dhyan Program" className="hx-dhyan-img" />
                <div className="hx-dhyan-img-badge">{t("hero.dhyan_badge")}</div>
              </div>
              <div className="hx-dhyan-body">
                <h3 className="hx-dhyan-title">{t("hero.dhyan_title")}</h3>
                <p className="hx-dhyan-desc">{t("hero.dhyan_p1")}</p>
                <p className="hx-dhyan-desc">{t("hero.dhyan_p2")}</p>
                <a href="https://dhyan.jaigurubande.in/" target="_blank" rel="noopener noreferrer" className="hx-btn-primary hx-dhyan-btn">
                  {t("hero.dhyan_btn")}<span className="hx-btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ MISSION & VISION ══ */}
      <section className="hx-mv">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.mv_tag")}</span>
          <h2 className="hx-section-title">{t("hero.mv_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-mv-grid">
          <div className="hx-mv-card">
            <div className="hx-mv-img-wrap"><img src={missionImg} alt="Mission" className="hx-mv-img" /></div>
            <div className="hx-mv-badge">{t("hero.mission_badge")}</div>
            <h3 className="hx-mv-title">{t("hero.mission_title")}</h3>
            <p className="hx-mv-text">{t("hero.mission_text")}</p>
          </div>
          <div className="hx-mv-sep"><span className="hx-mv-sep-gem">✦</span></div>
          <div className="hx-mv-card">
            <div className="hx-mv-img-wrap"><img src={visionImg} alt="Vision" className="hx-mv-img" /></div>
            <div className="hx-mv-badge">{t("hero.vision_badge")}</div>
            <h3 className="hx-mv-title">{t("hero.vision_title")}</h3>
            <p className="hx-mv-text">{t("hero.vision_text")}</p>
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ LATEST UPDATES ══ */}
      <section className="hx-updates">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.updates_tag")}</span>
          <h2 className="hx-section-title">{t("hero.updates_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-updates-grid">
          <div className="hx-update-card">
            <span className="hx-badge hx-badge--red">{t("hero.update1_badge")}</span>
            <div className="hx-update-img"><img src={photo8} alt="Spiritual Yatra" /></div>
            <div className="hx-update-body">
              <h3 className="hx-update-title">{t("hero.update1_title")}</h3>
              <p className="hx-update-desc">{t("hero.update1_desc")}</p>
              <span className="hx-update-date">{t("hero.update1_date")}</span>
            </div>
          </div>
          <div className="hx-update-card">
            <span className="hx-badge hx-badge--green">{t("hero.update2_badge")}</span>
            <div className="hx-update-img"><img src={photo10} alt="Live Satsang" /></div>
            <div className="hx-update-body">
              <h3 className="hx-update-title">{t("hero.update2_title")}</h3>
              <p className="hx-update-desc">{t("hero.update2_desc")}</p>
              <span className="hx-update-date">{t("hero.update2_date")}</span>
            </div>
          </div>
          <div className="hx-update-card">
            <span className="hx-badge hx-badge--purple">{t("hero.update3_badge")}</span>
            <div className="hx-update-img"><img src={photo19} alt="Contributions" /></div>
            <div className="hx-update-body">
              <h3 className="hx-update-title">{t("hero.update3_title")}</h3>
              <p className="hx-update-desc">{t("hero.update3_desc")}</p>
              <span className="hx-update-date">{t("hero.update3_date")}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ ACTIVITIES ══ */}
      <section className="hx-acts">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.acts_tag")}</span>
          <h2 className="hx-section-title">{t("hero.acts_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-acts-grid">
          {[
            { icon: <FaHandsHelping />, title: t("hero.act1_title"), desc: t("hero.act1_desc") },
            { icon: <FaCalendarAlt />, title: t("hero.act2_title"), desc: t("hero.act2_desc") },
            { icon: <FaUsers />, title: t("hero.act3_title"), desc: t("hero.act3_desc") },
            { icon: <FaGlobe />, title: t("hero.act4_title"), desc: t("hero.act4_desc") },
          ].map((act, i) => (
            <div key={i} className="hx-act-card" style={{ '--act-i': i }}>
              <div className="hx-act-icon">{act.icon}</div>
              <h3 className="hx-act-title">{act.title}</h3>
              <p className="hx-act-desc">{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ QUICK LINKS ══ */}
      <section className="hx-links">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.links_tag")}</span>
          <h2 className="hx-section-title">{t("hero.links_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-links-grid">
          <div className="hx-links-card">
            <h3 className="hx-links-title">{t("hero.links_important")}</h3>
            <ul className="hx-links-list">
              {[[t("hero.link_about"), "/about"], [t("hero.link_vision"), "/ashram-vision"], [t("hero.link_ashram"), "/ashram-life"], [t("hero.link_contact"), "/contact"]].map(([label, href]) => (
                <li key={href}><a href={href} className="hx-link-item"><span className="hx-link-dot">✦</span>{label}<span className="hx-link-arr">›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="hx-links-card">
            <h3 className="hx-links-title">{t("hero.links_updates")}</h3>
            <ul className="hx-links-list">
              {[[t("hero.link_latest"), "/latest-updates"], [t("hero.link_schedule"), "/dailyschedule"], [t("hero.link_live"), "/live-now"], [t("hero.link_upcoming"), "/upcoming-programs"], [t("hero.link_events"), "/special-events"]].map(([label, href]) => (
                <li key={href}><a href={href} className="hx-link-item"><span className="hx-link-dot">✦</span>{label}<span className="hx-link-arr">›</span></a></li>
              ))}
            </ul>
          </div>
          <div className="hx-links-card">
            <h3 className="hx-links-title">{t("hero.links_legal")}</h3>
            <ul className="hx-links-list">
              {[[t("hero.link_privacy"), "/privacy-policy"], [t("hero.link_terms"), "/terms-conditions"], [t("hero.link_donation"), "/donation-policy"]].map(([label, href]) => (
                <li key={href}><a href={href} className="hx-link-item"><span className="hx-link-dot">✦</span>{label}<span className="hx-link-arr">›</span></a></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="hx-divider"><span className="hx-div-gem">❖</span></div>

      {/* ══ SOCIAL ══ */}
      <section className="hx-social">
        <div className="hx-section-head">
          <span className="hx-section-tag">{t("hero.social_tag")}</span>
          <h2 className="hx-section-title">{t("hero.social_title")}</h2>
          <div className="hx-section-rule" />
        </div>
        <div className="hx-social-grid">
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--yt"><FaYoutube className="hx-social-ico" /><span>YouTube Channels</span></div>
            <ul className="hx-social-list">
              <li><a href="https://youtube.com/@jaigurubande?feature=shared" target="_blank" rel="noopener noreferrer">Jai Gurubande</a></li>
              <li><a href="youtube.com/@jaygurubande1?si=7f0-bxVAZFTx7r-8" target="_blank" rel="noopener noreferrer">Jai Gurubande 3377</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--ig"><FaInstagram className="hx-social-ico" /><span>Instagram</span></div>
            <ul className="hx-social-list">
              <li><a href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy" target="_blank" rel="noopener noreferrer">Jai Gurubande Official</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--fb"><FaFacebook className="hx-social-ico" /><span>Facebook</span></div>
            <ul className="hx-social-list">
              <li><a href="https://www.facebook.com/share/g/1AZvFisxcs/" target="_blank" rel="noopener noreferrer">Jai Gurubande</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--wa"><FaWhatsapp className="hx-social-ico" /><span>WhatsApp</span></div>
            <ul className="hx-social-list">
              <li><a href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD" target="_blank" rel="noopener noreferrer">Jai Gurubande</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--tw"><FaXTwitter className="hx-social-ico" /><span>Twitter / X</span></div>
            <ul className="hx-social-list">
              <li><a href="https://x.com/jaigurubande" target="_blank" rel="noopener noreferrer">JAI GURUBANDE</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--gm"><img src={gmailLogo} alt="Gmail" className="hx-gmail-ico" /><span>Email</span></div>
            <ul className="hx-social-list">
              <li><a href="mailto:support@jaigurubande.in" target="_blank" rel="noopener noreferrer">support@jaigurubande.in</a></li>
            </ul>
          </div>
          <div className="hx-social-card">
            <div className="hx-social-head hx-social-head--tg"><FaTelegramPlane className="hx-social-ico" /><span>Telegram</span></div>
            <ul className="hx-social-list">
              <li><a href="https://t.me/+5APCSKB6YC85MjRl" target="_blank" rel="noopener noreferrer">Jai Gurubande – Official Website Updates</a></li>
            </ul>
          </div>
        </div>
      </section>

      <ScrollingText />
    </div>
  );
};

export default Hero;