import React, { useState, useEffect, useRef } from 'react'
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa"

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
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

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + '/')

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!openDropdown) return
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [openDropdown])

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenu])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      closeMenu()
      navigate("/login", { replace: true })
      window.history.replaceState(null, "", "/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const navItems = [
    {
      key: 'home',
      label: 'Home',
      activeCheck: location.pathname === '/' || location.pathname.startsWith('/home'),
      links: [
        { label: 'Main Home', path: '/' },
        { label: 'Latest Updates', path: '/latest-updates' },
        { label: 'Daily Schedule', path: '/dailyschedule' },
      ],
      extra: (
        <li key="logout">
          <button className="jgb-nav__dropdown-logout" onClick={handleLogout}>
            <FaSignOutAlt className="jgb-nav__logout-icon" /> Logout
          </button>
        </li>
      )
    },
    {
      key: 'about', label: 'About', activeCheck: isActive('/about'),
      links: [
        { label: 'About Guruji', path: '/about' },
        { label: 'Ashram Vision', path: '/ashram-vision' },
      ]
    },
    {
      key: 'amritvani', label: 'Amritvani', activeCheck: isActive('/satsang'),
      links: [
        { label: 'All Amritvani', path: '/satsang' },
        { label: 'Latest Amritvani', path: '/latest-amritvani' },
        { label: 'Daily Teachings', path: '/daily-teachings' },
      ]
    },
    {
      key: 'bhajan', label: 'Bhajan', activeCheck: isActive('/bhajan'),
      links: [
        { label: 'All Bhajan', path: '/bhajan' },
        { label: 'Latest Bhajan', path: '/latest-bhajan' },
        { label: 'Satguru Chalisa', path: '/satguru-chalisa' },
        { label: 'Satguru Arti', path: '/satguru-arti' },
      ]
    },
    {
      key: 'program', label: 'Program', activeCheck: isActive('/program'),
      links: [
        { label: 'All Programs', path: '/program' },
        { label: 'Upcoming Programs', path: '/upcoming-programs' },
        { label: 'Special Events', path: '/special-events' },
        { label: 'Important Dates', path: '/important-dates' },
        { label: 'Live Now 🔴', path: '/live-now' },
        { label: 'My Dhyan Attendance', path: '/dhyan-attendance-history' },
      ]
    },
    {
      key: 'blog', label: 'Blog', activeCheck: isActive('/blog'),
      links: [
        { label: 'All Blogs', path: '/blog' },
        { label: 'Testimonies', path: '/testimonies' },
        { label: 'Spotlight', path: '/spotlight' },
      ]
    },
    {
      key: 'gallery', label: 'Gallery', activeCheck: isActive('/gallery'),
      links: [
        { label: 'All Gallery', path: '/gallery' },
        { label: 'Ashram Life', path: '/ashram-life' },
        { label: 'Divine Moments', path: '/divine' },
      ]
    },
    {
      key: 'contact', label: 'Contact Us', activeCheck: isActive('/contact'),
      links: [
        { label: 'Contact Information', path: '/contact' },
        { label: 'Chat With Us', path: '/chat' },
        { label: 'Feedback', path: '/faq' },
      ]
    },
    {
      key: 'contribute', label: 'Contribute', activeCheck: isActive('/contribute'),
      links: [
        { label: 'Donate Now', path: '/contribute' },
        { label: 'Contribution FAQ', path: '/contribute-faq' },
        { label: 'Check Payment Status', path: '/check-status' },
        { label: 'My Account', path: '/account' },
        { label: 'Request Email Update', path: '/request-email-update' },
      ]
    },
  ]

  return (
    <nav className={`jgb-nav__container${scrolled ? ' jgb-nav__scrolled' : ''}`} ref={navRef}>

      {/* Dark overlay */}
      {mobileMenu && (
        <div className="jgb-nav__overlay" onClick={closeMenu} />
      )}

      {/* ── Floating X — fixed top-left, outside the drawer ── */}
      {mobileMenu && (
        <button
          className="jgb-nav__float-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span />
          <span />
        </button>
      )}

      {/* Logo */}
      <div className="jgb-nav__logo-wrap" onClick={handleRefresh}>
        <img src={logo} alt="Jai Gurubande Logo" className="jgb-nav__logo" />
        <span className="jgb-nav__logo-glow" />
      </div>

      {/* Nav Links */}
      <ul className={`jgb-nav__links${mobileMenu ? '' : ' jgb-nav__links--hidden'}`}>
        {navItems.map((item) => (
          <li key={item.key} className="jgb-nav__item">
            <button
              className={`jgb-nav__trigger${item.activeCheck ? ' jgb-nav__trigger--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                toggleDropdown(item.key)
              }}
            >
              <span className="jgb-nav__trigger-label">{item.label}</span>
              <span className={`jgb-nav__trigger-arrow${openDropdown === item.key ? ' jgb-nav__trigger-arrow--open' : ''}`}>
                ▾
              </span>
            </button>

            {openDropdown === item.key && (
              <ul className="jgb-nav__dropdown" onClick={(e) => e.stopPropagation()}>
                <li className="jgb-nav__dropdown-header">
                  <span>{item.label}</span>
                </li>
                {item.links.map((link) => (
                  <li key={link.path} className="jgb-nav__dropdown-item">
                    <button
                      className={`jgb-nav__dropdown-btn${location.pathname === link.path ? ' jgb-nav__dropdown-btn--active' : ''}`}
                      onClick={() => handleNavClick(link.path)}
                    >
                      <span className="jgb-nav__dropdown-dot" />
                      {link.label}
                    </button>
                  </li>
                ))}
                {item.extra && item.extra}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Avatar */}
      <div className="jgb-nav__avatar-wrap" onClick={handleRefresh}>
        <img src="/favicon.png" alt="Guruji" className="jgb-nav__avatar" />
        <span className="jgb-nav__avatar-ring" />
      </div>

      {/* Hamburger — hidden when drawer is open */}
      {!mobileMenu && (
        <button
          className="jgb-nav__hamburger"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      )}
    </nav>
  )
}

export default Navbar