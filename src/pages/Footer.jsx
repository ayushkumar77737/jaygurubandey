import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* ✅ Text + Privacy Policy side by side */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jay Guru Bandey . All rights reserved .</p>
          <Link to="/privacy-policy" className="privacy-link">
            Privacy Policy
          </Link>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/share/g/1AZvFisxcs/" 
             className="facebook" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy" 
             className="instagram" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@jaigurubande?feature=shared" 
             className="youtube" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD" 
             className="whatsapp" 
             target="_blank" 
             rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
