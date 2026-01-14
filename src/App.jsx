import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';
import CookieConsent from './Components/Cookies/CookieConsent';
import Maintenance from './pages/Maintenance';
import { isMaintenanceTime } from './utils/maintenance';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  // ✅ 1. Track maintenance state
  const [maintenance, setMaintenance] = useState(
    isMaintenanceTime()
  );

  // ✅ Existing right-click block (UNCHANGED)
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  // ✅ 2. Re-check maintenance every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const status = isMaintenanceTime();
      setMaintenance(status);
    }, 30 * 1000); // every 30 sec

    return () => clearInterval(interval);
  }, []);

  // ✅ 3. Re-check when tab becomes active again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setMaintenance(isMaintenanceTime());
      }
    };

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      );
    };
  }, []);

  // ✅ 4. Hard block UI when maintenance starts
  if (maintenance) {
    return <Maintenance />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
