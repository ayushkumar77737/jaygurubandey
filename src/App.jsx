import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Satsang from './pages/Satsang'
import Bhajan from './pages/Bhajan'
import Program from './pages/Program'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/satsang" element={<Satsang />} />
        <Route path="/bhajan" element={<Bhajan />} />
        <Route path="/program" element={<Program />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
