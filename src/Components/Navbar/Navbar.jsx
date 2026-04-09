import React, { useState, useEffect, useRef } from 'react'
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa"
import { useTranslation } from 'react-i18next'   // ✅ NEW

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()   // ✅ NEW

  const toggleMenu = () => setMobileMenu(!mobileMenu)
  const closeMenu = () => { setMobileMenu(false); setOpenDropdown(null) }
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name)
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

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
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [openDropdown])

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : ""
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

  // ✅ navItems now use t() for all labels
  const navItems = [
    {
      key: 'home',
      label: t('nav.home'),
      activeCheck: location.pathname === '/' || location.pathname.startsWith('/home'),
      links: [
        { label: t('nav.home_main'), path: '/' },
        { label: t('nav.home_updates'), path: '/latest-updates' },
        { label: t('nav.home_schedule'), path: '/dailyschedule' },
      ],
      extra: (
        <li key="logout">
          <button className="jgb-nav__dropdown-logout" onClick={handleLogout}>
            <FaSignOutAlt className="jgb-nav__logout-icon" /> {t('nav.home_logout')}
          </button>
        </li>
      )
    },
    {
      key: 'about', label: t('nav.about'),
      activeCheck: isActive('/about'),
      links: [
        { label: t('nav.about_guruji'), path: '/about' },
        { label: t('nav.about_vision'), path: '/ashram-vision' },
      ]
    },
    {
      key: 'amritvani', label: t('nav.amritvani'),
      activeCheck: isActive('/satsang'),
      links: [
        { label: t('nav.amritvani_all'), path: '/satsang' },
        { label: t('nav.amritvani_latest'), path: '/latest-amritvani' },
        { label: t('nav.amritvani_teachings'), path: '/daily-teachings' },
      ]
    },
    {
      key: 'bhajan', label: t('nav.bhajan'),
      activeCheck: isActive('/bhajan'),
      links: [
        { label: t('nav.bhajan_all'), path: '/bhajan' },
        { label: t('nav.bhajan_latest'), path: '/latest-bhajan' },
        { label: t('nav.bhajan_chalisa'), path: '/satguru-chalisa' },
        { label: t('nav.bhajan_arti'), path: '/satguru-arti' },
      ]
    },
    {
      key: 'program', label: t('nav.program'),
      activeCheck: isActive('/program'),
      links: [
        { label: t('nav.program_all'), path: '/program' },
        { label: t('nav.program_upcoming'), path: '/upcoming-programs' },
        { label: t('nav.program_events'), path: '/special-events' },
        { label: t('nav.program_dates'), path: '/important-dates' },
        { label: t('nav.program_live'), path: '/live-now' },
        { label: t('nav.program_dhyan'), path: '/dhyan-attendance-history' },
        { label: t('nav.program_satsang'), path: '/satsang-calendar' },
      ]
    },
    {
      key: 'blog', label: t('nav.blog'),
      activeCheck: isActive('/blog'),
      links: [
        { label: t('nav.blog_all'), path: '/blog' },
        { label: t('nav.blog_testimonies'), path: '/testimonies' },
        { label: t('nav.blog_spotlight'), path: '/spotlight' },
      ]
    },
    {
      key: 'gallery', label: t('nav.gallery'),
      activeCheck: isActive('/gallery'),
      links: [
        { label: t('nav.gallery_all'), path: '/gallery' },
        { label: t('nav.gallery_ashram'), path: '/ashram-life' },
        { label: t('nav.gallery_divine'), path: '/divine' },
      ]
    },
    {
      key: 'contact', label: t('nav.contact'),
      activeCheck: isActive('/contact'),
      links: [
        { label: t('nav.contact_info'), path: '/contact' },
        { label: t('nav.contact_chat'), path: '/chat' },
        { label: t('nav.contact_feedback'), path: '/faq' },
      ]
    },
    {
      key: 'contribute', label: t('nav.contribute'),
      activeCheck: isActive('/contribute'),
      links: [
        { label: t('nav.contribute_donate'), path: '/contribute' },
        { label: t('nav.contribute_faq'), path: '/contribute-faq' },
        { label: t('nav.contribute_status'), path: '/check-status' },
        { label: t('nav.contribute_account'), path: '/account' },
        { label: t('nav.contribute_email'), path: '/request-email-update' },
      ]
    },
  ]

  return (
    <nav className={`jgb-nav__container${scrolled ? ' jgb-nav__scrolled' : ''}`} ref={navRef}>

      {mobileMenu && <div className="jgb-nav__overlay" onClick={closeMenu} />}

      {mobileMenu && (
        <button className="jgb-nav__float-close" onClick={closeMenu} aria-label="Close menu">
          <span /><span />
        </button>
      )}

      <div className="jgb-nav__logo-wrap" onClick={handleRefresh}>
        <img src={logo} alt="Jai Gurubande Logo" className="jgb-nav__logo" />
        <span className="jgb-nav__logo-glow" />
      </div>

      <ul className={`jgb-nav__links${mobileMenu ? '' : ' jgb-nav__links--hidden'}`}>
        {navItems.map((item) => (
          <li key={item.key} className="jgb-nav__item">
            <button
              className={`jgb-nav__trigger${item.activeCheck ? ' jgb-nav__trigger--active' : ''}`}
              onClick={(e) => { e.stopPropagation(); toggleDropdown(item.key) }}
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

      <div className="jgb-nav__avatar-wrap" onClick={handleRefresh}>
        <img src="/favicon.png" alt="Guruji" className="jgb-nav__avatar" />
        <span className="jgb-nav__avatar-ring" />
      </div>

      {!mobileMenu && (
        <button className="jgb-nav__hamburger" onClick={toggleMenu} aria-label="Open menu">
          <span /><span /><span />
        </button>
      )}
    </nav>
  )
}

export default Navbar