import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import menu from '../../assets/menu.png'
import { NavLink } from 'react-router-dom'

// Reusable NavLink with refresh ability
const RefreshNavLink = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    if (window.location.pathname === to) {
      e.preventDefault()
      window.location.reload() // refresh if same route clicked again
    }
    if (onClick) onClick()
  }

  return (
    <NavLink to={to} className={className} onClick={handleClick}>
      {children}
    </NavLink>
  )
}

const linkClass = ({ isActive }) => 'btn' + (isActive ? ' active' : '')

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const closeMenu = () => {
    setMobileMenu(false)
  }

  return (
    <nav className='container'>
      <img src={logo} alt='Logo' className='logo' />

      <ul className={mobileMenu ? 'nav-links' : 'nav-links hide-mobile-menu'}>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/'>Home</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/about'>About</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/satsang'>Amrit Wadi</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/bhajan'>Bhajan</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/program'>Program</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/blog'>Blog</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/gallery'>Gallery</RefreshNavLink></li>
        <li><RefreshNavLink onClick={closeMenu} className={linkClass} to='/contact'>Contact Us</RefreshNavLink></li>
      </ul>

      <img src={circle} alt="Circle" className="circle-img" />
      <img src={menu} alt="menu" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
