import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import CookieConsent from "./Components/Cookies/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import IdleLogout from "./utils/IdleLogout";

const App = () => {

  /* 🔧 MAINTENANCE START CHECK (ADD THIS) */
  useEffect(() => {
    function maintenanceCheck() {
      const now = new Date();

      const startHour = 20;
      const startMinute = 59;

      const endHour = 21;
      const endMinute = 2;

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const startMinutes = startHour * 60 + startMinute;
      const endMinutes = endHour * 60 + endMinute;

      let isMaintenance;

      if (startMinutes < endMinutes) {
        isMaintenance =
          currentMinutes >= startMinutes &&
          currentMinutes < endMinutes;
      } else {
        isMaintenance =
          currentMinutes >= startMinutes ||
          currentMinutes < endMinutes;
      }

      const isLocalhost =
        location.hostname === "localhost" ||
        location.hostname === "127.0.0.1";

      if (isMaintenance && !isLocalhost) {
        window.location.replace("/maintenance.html");
      }
    }

    maintenanceCheck(); // immediate check
    const interval = setInterval(maintenanceCheck, 5000);

    return () => clearInterval(interval);
  }, []);

  /* 🔒 YOUR EXISTING SECURITY useEffect (NO CHANGE) */
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();

    const disableInspectKeys = (e) => {
      if (e.key === "F12") e.preventDefault();

      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
      ) {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableInspectKeys);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableInspectKeys);
    };
  }, []);

  return (
    <>
      <IdleLogout />
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