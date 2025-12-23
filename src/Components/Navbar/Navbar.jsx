import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)

  const closeMenu = () => {
    setMobileMenu(false)
    setAboutOpen(false)
  }

  const linkClass = ({ isActive }) => 'btn' + (isActive ? ' active' : '')

  const handleNavClick = (path) => {
    closeMenu()
    if (location.pathname === path) {
      window.location.reload()
    } else {
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const closeDropdown = () => setAboutOpen(false)
    window.addEventListener('click', closeDropdown)
    return () => window.removeEventListener('click', closeDropdown)
  }, [])

  return (
    <nav className="container">
      <img src={logo} alt="Logo" className="logo" onClick={() => window.location.reload()} />

      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li>
          <button onClick={() => handleNavClick('/')} className={linkClass({ isActive: location.pathname === '/' })}>
            Home
          </button>
        </li>

        {/* ABOUT */}
        <li className="dropdown">
          <button
            className={linkClass({ isActive: location.pathname.startsWith('/about') })}
            onClick={(e) => {
              e.stopPropagation()
              setAboutOpen(!aboutOpen)
            }}
          >
            About ▾
          </button>

          {aboutOpen && (
            <ul
              className={`dropdown-menu ${mobileMenu ? 'mobile-dropdown' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <li><button onClick={() => handleNavClick('/about')}>About Guruji</button></li>
              <li><button onClick={() => handleNavClick('/about-ashram')}>About Ashram</button></li>
              <li><button onClick={() => handleNavClick('/committee')}>Committee Members</button></li>
            </ul>
          )}
        </li>

        <li><button onClick={() => handleNavClick('/satsang')} className={linkClass({ isActive: location.pathname === '/satsang' })}>Amritvani</button></li>
        <li><button onClick={() => handleNavClick('/bhajan')} className={linkClass({ isActive: location.pathname === '/bhajan' })}>Bhajan</button></li>
        <li><button onClick={() => handleNavClick('/program')} className={linkClass({ isActive: location.pathname === '/program' })}>Program</button></li>
        <li><button onClick={() => handleNavClick('/blog')} className={linkClass({ isActive: location.pathname === '/blog' })}>Blog</button></li>
        <li><button onClick={() => handleNavClick('/gallery')} className={linkClass({ isActive: location.pathname === '/gallery' })}>Gallery</button></li>
        <li><button onClick={() => handleNavClick('/contact')} className={linkClass({ isActive: location.pathname === '/contact' })}>Contact Us</button></li>
        <li><button onClick={() => handleNavClick('/contribute')} className={linkClass({ isActive: location.pathname === '/contribute' })}>Contribute</button></li>
      </ul>

      <img src={circle} alt="Circle" className="circle-img" onClick={() => window.location.reload()} />

      <div className={`menu ${mobileMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}

export default Navbar
