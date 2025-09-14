import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import menu from '../../assets/menu.png'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMobileMenu(!mobileMenu)
  const closeMenu = () => setMobileMenu(false)

  const linkClass = ({ isActive }) => 'btn' + (isActive ? ' active' : '')

  const handleNavClick = () => {
    closeMenu()
    // Scroll to top if clicking same route
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className='container'>
      <img src={logo} alt='Logo' className='logo' />

      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/'>Home</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/about'>About</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/satsang'>Amrit Wadi</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/bhajan'>Bhajan</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/program'>Program</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/blog'>Blog</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/gallery'>Gallery</NavLink></li>
        <li><NavLink onClick={handleNavClick} className={linkClass} to='/contact'>Contact Us</NavLink></li>
      </ul>

      <img src={circle} alt="Circle" className="circle-img" />
      <img src={menu} alt="menu" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
