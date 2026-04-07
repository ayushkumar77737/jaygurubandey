import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const handlePrivacyClick = () => { window.location.href = "/privacy-policy"; };
  const handleCommitteeClick = () => { window.location.href = "/committee-members"; };
  const handleBooksClick = () => { window.location.href = "/published-books"; };
  const handleUpdatesClick = () => { window.location.href = "/latest-updates"; };
  const handleSoulTwistClick = () => { window.location.href = "/soultwist"; };
  const handleFAQClick = () => { window.location.href = "/faq"; };

  return (
    <footer className="ftr__root">
      {/* Top gold divider with glow */}
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

        {/* Divider */}
        <div className="ftr__divider" />

        {/* Nav Links */}
        <div className="ftr__links">
          <span className="ftr__link" onClick={handlePrivacyClick}>Privacy Policy</span>
          <span className="ftr__link" onClick={handleBooksClick}>Published Books</span>
          <span className="ftr__link" onClick={handleUpdatesClick}>Latest Updates</span>
          <span className="ftr__link" onClick={handleSoulTwistClick}>SoulTwist</span>
          <span className="ftr__link" onClick={handleFAQClick}>FAQ</span>
        </div>

        {/* Copyright */}
        <p className="ftr__copy">
          © 2025–{new Date().getFullYear()} Jai Gurubande. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;