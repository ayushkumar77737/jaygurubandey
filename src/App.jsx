import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './pages/Footer'
import CookieConsent from './Components/Cookies/CookieConsent'
import Maintenance from './pages/Maintenance'
import {isMaintenanceTime} from './utils/maintenance'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App=()=>{
  if(isMaintenanceTime()){
    return <Maintenance/>
  }

  return(
    <>
      {/* 🔥 Single scroll container */}
      <div className="app-scroll">
        <Navbar/>

        <main>
          <Outlet/>
        </main>

        <Footer/>
      </div>

      <CookieConsent/>
      <ScrollToTop/>
    </>
  )
}

export default App
