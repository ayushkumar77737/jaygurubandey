import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import CookieConsent from "./Components/Cookies/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  useEffect(() => {
    /* 🔒 Disable Right Click */
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    /* 🔒 Disable Inspect Shortcuts */
    const disableInspectKeys = (e) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl + Shift + I / J / C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
      ) {
        e.preventDefault();
      }

      // Ctrl + U (View Source)
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
