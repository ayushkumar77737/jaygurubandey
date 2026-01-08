import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'
import CookieConsent from './Components/Cookies/CookieConsent'
import Maintenance from './pages/Maintenance'
//import { isMaintenanceTime } from './utils/maintenance'

const App = () => {
  //if (isMaintenanceTime()) {
    //return <Maintenance />
  //}
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the nested route like Home, About, etc. */}
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default App
