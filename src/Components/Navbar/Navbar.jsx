import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)

  const closeMenu = () => {
    setMobileMenu(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name)
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

  const handleRefresh = () => window.location.reload()

  /* ✅ Close dropdowns when clicking outside */
  useEffect(() => {
    const closeDropdowns = () => setOpenDropdown(null)
    window.addEventListener('click', closeDropdowns)
    return () => window.removeEventListener('click', closeDropdowns)
  }, [])

  return (
    <nav className='container'>
      {/* Logo */}
      <img
        src={logo}
        alt='Logo'
        className='logo'
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Nav Links */}
      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li>
          <button
            onClick={() => handleNavClick('/')}
            className={linkClass({ isActive: location.pathname === '/' })}
          >
            Home
          </button>
        </li>

        {/* ✅ ABOUT DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/about')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('about')
            }}
          >
            About ▾
          </button>

          {openDropdown === 'about' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/about')}>
                  About Guruji
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/about-ashram')}>
                  About Ashram
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/committee')}>
                  Committee Members
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ AMRITVANI DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/satsang')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('amritvani')
            }}
          >
            Amritvani ▾
          </button>

          {openDropdown === 'amritvani' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/satsang')}>
                  Daily Amritvani
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/satsang/audio')}>
                  Audio Amritvani
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/satsang/video')}>
                  Video Amritvani
                </button>
              </li>
            </ul>
          )}
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/bhajan')}
            className={linkClass({ isActive: location.pathname === '/bhajan' })}
          >
            Bhajan
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/program')}
            className={linkClass({ isActive: location.pathname === '/program' })}
          >
            Program
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/blog')}
            className={linkClass({ isActive: location.pathname === '/blog' })}
          >
            Blog
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/gallery')}
            className={linkClass({ isActive: location.pathname === '/gallery' })}
          >
            Gallery
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/contact')}
            className={linkClass({ isActive: location.pathname === '/contact' })}
          >
            Contact Us
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavClick('/contribute')}
            className={linkClass({ isActive: location.pathname === '/contribute' })}
          >
            Contribute
          </button>
        </li>
      </ul>

      {/* Circle */}
      <img
        src={circle}
        alt='Circle'
        className='circle-img'
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Mobile Menu */}
      <div className={`menu ${mobileMenu ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
