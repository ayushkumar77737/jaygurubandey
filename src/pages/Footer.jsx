import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();   // ✅ NEW
  const year = new Date().getFullYear();

  const handlePrivacyClick = () => { window.location.href = "/privacy-policy"; };
  const handleBooksClick   = () => { window.location.href = "/published-books"; };
  const handleUpdatesClick = () => { window.location.href = "/latest-updates"; };
  const handleSoulTwistClick = () => { window.location.href = "/soultwist"; };
  const handleFAQClick     = () => { window.location.href = "/faq"; };

  return (
    <footer className="ftr__root">
      <div className="ftr__top-glow" />

      <div className="ftr__inner">

        {/* Social Icons */}
        <div className="ftr__social">
          <a href="https://www.facebook.com/share/g/1AZvFisxcs/" className="ftr__social-btn ftr__fb" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy" className="ftr__social-btn ftr__ig" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@jaigurubande?feature=shared" className="ftr__social-btn ftr__yt" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD" className="ftr__social-btn ftr__wa" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <div className="ftr__divider" />

        {/* Nav Links */}
        <div className="ftr__links">
          <span className="ftr__link" onClick={handlePrivacyClick}>{t("footer.privacy")}</span>
          <span className="ftr__link" onClick={handleBooksClick}>{t("footer.books")}</span>
          <span className="ftr__link" onClick={handleUpdatesClick}>{t("footer.updates")}</span>
          <span className="ftr__link" onClick={handleSoulTwistClick}>{t("footer.soultwist")}</span>
          <span className="ftr__link" onClick={handleFAQClick}>{t("footer.faq")}</span>
        </div>

        {/* Copyright */}
        <p className="ftr__copy">
          {t("footer.copy", { year })}
        </p>

      </div>
    </footer>
  );
};

export default Footer;