import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'
import CookieConsent from './Components/Cookies/CookieConsent'
import Maintenance from './pages/Maintenance'
//import { isMaintenanceTime } from './utils/maintenance'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);
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
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
