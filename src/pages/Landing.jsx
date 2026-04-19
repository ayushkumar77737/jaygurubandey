import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Landing.css";
//import landingimage from "../assets/guruji.webp";

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "te", label: "తెలుగు" },
];

const Landing = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const { t, i18n } = useTranslation();   // ✅ NEW

  const handleLanguageChange = (e) => {   // ✅ NEW
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    setAnimate(true);
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/home", { replace: true });
    });
    return () => unsub();
  }, [navigate]);

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableInspectKeys = (e) => {
      if (e.key === "F12") e.preventDefault();
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) e.preventDefault();
      if (e.ctrlKey && e.key.toUpperCase() === "U") e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableInspectKeys);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableInspectKeys);
    };
  }, []);

  return (
    <div className={`lp-root${animate ? " lp-root--animate" : ""}`}>

      {/* decorative background orbs */}
      <div className="lp-orb lp-orb--1" />
      <div className="lp-orb lp-orb--2" />
      <div className="lp-orb lp-orb--3" />

      {/* ✅ LANGUAGE SELECTOR — top right corner */}
      <div className="lp-lang-wrap">
        <select
          className="lp-lang-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <div className="lp-card">

        {/* top accent line */}
        <div className="lp-card__accent" />

        {/* image */}
        <div className="lp-img-wrap">
          <div className="lp-img-ring" />
          <img src="/guruji1.webp" alt="Param Sant Swami Jai Gurubande Ji Maharaj" className="lp-img" />
        </div>

        {/* badge */}
        <span className="lp-badge">{t("landing.badge")}</span>

        {/* heading */}
        <h1 className="lp-title">{t("landing.welcome")}</h1>
        <div className="lp-title-rule">
          <span className="lp-title-rule__line" />
          <span className="lp-title-rule__gem">❖</span>
          <span className="lp-title-rule__line" />
        </div>

        {/* subtitle */}
        <p className="lp-subtitle">{t("landing.subtitle")}</p>

        {/* paragraphs */}
        <div className="lp-body">
          <p>{t("landing.para1")}</p>
          <p>{t("landing.para2")}</p>
          <p>{t("landing.para3")}</p>
          <p>{t("landing.para4")}</p>
        </div>

        {/* divider */}
        <div className="lp-divider">
          <span className="lp-divider__gem">✦</span>
        </div>

        {/* actions */}
        <div className="lp-actions">
          <a href="/login" className="lp-btn lp-btn--login">
            <span className="lp-btn__icon">🙏</span> {t("landing.login")}
          </a>
          <a href="/register" className="lp-btn lp-btn--register">
            <span className="lp-btn__icon">✨</span> {t("landing.register")}
          </a>
        </div>

        <p className="lp-footer-note">{t("landing.footer_note")}</p>
      </div>
    </div>
  );
};

export default Landing;