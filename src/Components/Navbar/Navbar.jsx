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
        {/* ✅ HOME DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname === '/' || location.pathname.startsWith('/home')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('home')
            }}
          >
            Home ▾
          </button>

          {openDropdown === 'home' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/')}>
                  Main Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-updates')}>
                  Latest Updates
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/dailyschedule')}>
                  Daily Schedule
                </button>
              </li>
            </ul>
          )}
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
                <button onClick={() => handleNavClick('/ashram-vision')}>
                  Ashram Vision
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/committee-members')}>
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
                  All Amritvani
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-amritvani')}>
                  Latest Amritvani
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* ✅ BHAJAN DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/bhajan')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('bhajan')
            }}
          >
            Bhajan ▾
          </button>

          {openDropdown === 'bhajan' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/bhajan')}>
                  All Bhajan
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/latest-bhajan')}>
                  Latest Bhajan
                </button>
              </li>
            </ul>
          )}
        </li>


        {/* ✅ PROGRAM DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/program')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('program')
            }}
          >
            Program ▾
          </button>

          {openDropdown === 'program' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/program')}>
                  All Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/upcoming-programs')}>
                  Upcoming Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/special-events')}>
                  Special Events
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/important-dates')}>
                  Important Dates
                </button>
              </li>
            </ul>
          )}
        </li>


        {/* ✅ BLOG DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/blog')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('blog')
            }}
          >
            Blog ▾
          </button>

          {openDropdown === 'blog' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/blog')}>
                  All Blogs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/blog/latest')}>
                  Latest Posts
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/blog/testimonies')}>
                  Testimonies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/blog/articles')}>
                  Articles
                </button>
              </li>
            </ul>
          )}
        </li>


        {/* ✅ GALLERY DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/gallery')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('gallery')
            }}
          >
            Gallery ▾
          </button>

          {openDropdown === 'gallery' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/gallery')}>
                  All Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/gallery/photos')}>
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/gallery/videos')}>
                  Video Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/gallery/events')}>
                  Event Gallery
                </button>
              </li>
            </ul>
          )}
        </li>


        {/* ✅ CONTACT US DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/contact')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('contact')
            }}
          >
            Contact Us ▾
          </button>

          {openDropdown === 'contact' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/contact')}>
                  Contact Information
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact/location')}>
                  Location & Map
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contact/support')}>
                  Support / Help
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/faq')}>
                  Feedback
                </button>
              </li>
            </ul>
          )}
        </li>


        {/* ✅ CONTRIBUTE DROPDOWN */}
        <li className='dropdown'>
          <button
            className={linkClass({
              isActive: location.pathname.startsWith('/contribute')
            })}
            onClick={(e) => {
              e.stopPropagation()
              toggleDropdown('contribute')
            }}
          >
            Contribute ▾
          </button>

          {openDropdown === 'contribute' && (
            <ul className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
              <li>
                <button onClick={() => handleNavClick('/contribute')}>
                  Donate Now
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('/contribute-faq')}>
                  Contribution FAQ
                </button>
              </li>
            </ul>
          )}
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
