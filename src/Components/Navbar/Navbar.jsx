import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg.png'
import circle from '../../assets/circle.png'
import menu from '../../assets/menu.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setMobileMenu(!mobileMenu)
  const closeMenu = () => setMobileMenu(false)

  const linkClass = (isActive) => 'btn' + (isActive ? ' active' : '')

  const handleNavClick = (path) => {
    closeMenu()

    if (location.pathname === path) {
      window.location.reload() // force refresh
    } else {
      navigate(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className='container'>
      <img src={logo} alt='Logo' className='logo' />

      <ul className={mobileMenu ? 'nav-links' : 'hide-mobile-menu'}>
        <li><button onClick={() => handleNavClick('/')} className={linkClass(location.pathname === '/')}>Home</button></li>
        <li><button onClick={() => handleNavClick('/about')} className={linkClass(location.pathname === '/about')}>About</button></li>
        <li><button onClick={() => handleNavClick('/satsang')} className={linkClass(location.pathname === '/satsang')}>Amrit Wadi</button></li>
        <li><button onClick={() => handleNavClick('/bhajan')} className={linkClass(location.pathname === '/bhajan')}>Bhajan</button></li>
        <li><button onClick={() => handleNavClick('/program')} className={linkClass(location.pathname === '/program')}>Program</button></li>
        <li><button onClick={() => handleNavClick('/blog')} className={linkClass(location.pathname === '/blog')}>Blog</button></li>
        <li><button onClick={() => handleNavClick('/gallery')} className={linkClass(location.pathname === '/gallery')}>Gallery</button></li>
        <li><button onClick={() => handleNavClick('/contact')} className={linkClass(location.pathname === '/contact')}>Contact Us</button></li>
      </ul>

      <img src={circle} alt="Circle" className="circle-img" />
      <img src={menu} alt="menu" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
