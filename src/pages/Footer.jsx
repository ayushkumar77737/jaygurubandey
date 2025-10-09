import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const handlePrivacyClick = () => {
    window.location.href = '/privacy-policy'; // Always go to top
  };

  const handleCommitteeClick = () => {
    window.location.href = '/committee-members'; // Navigate to committee members page
  };

  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jay Guru Bandey . All rights reserved .</p>
          <span
            className="privacy-link"
            onClick={handlePrivacyClick}
            style={{ cursor: 'pointer', marginRight: '15px' }}
          >
            Privacy Policy
          </span>
          <span
            className="privacy-link"
            onClick={handleCommitteeClick}
            style={{ cursor: 'pointer' }}
          >
            Committee Members
          </span>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/share/g/1AZvFisxcs/" className="facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy" className="instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@jaigurubande?feature=shared" className="youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD" className="whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
