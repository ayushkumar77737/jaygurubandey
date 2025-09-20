import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import menu from '../../assets/menu.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)
  const closeMenu = () => setMobileMenu(false)

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

  // 🔄 Refresh page when clicking on logo or circle
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <nav className='container'>
      {/* Left side logo */}
      <img
        src={logo}
        alt='Logo'
        className='logo'
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li><button onClick={() => handleNavClick('/')} className={linkClass({isActive: location.pathname === '/'})}>Home</button></li>
        <li><button onClick={() => handleNavClick('/about')} className={linkClass({isActive: location.pathname === '/about'})}>About</button></li>
        <li><button onClick={() => handleNavClick('/satsang')} className={linkClass({isActive: location.pathname === '/satsang'})}>Amritvani</button></li>
        <li><button onClick={() => handleNavClick('/bhajan')} className={linkClass({isActive: location.pathname === '/bhajan'})}>Bhajan</button></li>
        <li><button onClick={() => handleNavClick('/program')} className={linkClass({isActive: location.pathname === '/program'})}>Program</button></li>
        <li><button onClick={() => handleNavClick('/blog')} className={linkClass({isActive: location.pathname === '/blog'})}>Blog</button></li>
        <li><button onClick={() => handleNavClick('/gallery')} className={linkClass({isActive: location.pathname === '/gallery'})}>Gallery</button></li>
        <li><button onClick={() => handleNavClick('/contact')} className={linkClass({isActive: location.pathname === '/contact'})}>Contact Us</button></li>
      </ul>

      {/* Right side circle (refresh on click) */}
      <img
        src={circle}
        alt="Circle"
        className="circle-img"
        onClick={handleRefresh}
        style={{ cursor: 'pointer' }}
      />

      {/* Mobile menu icon */}
      <img
        src={menu}
        alt="menu"
        className='menu'
        onClick={toggleMenu}
      />
    </nav>
  )
}

export default Navbar
