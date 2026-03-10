import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import CookieConsent from "./Components/Cookies/CookieConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import IdleLogout from "./utils/IdleLogout";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /* 🔐 FIREBASE AUTH WATCHER (USER DELETED → AUTO LOGOUT) */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        // 🔁 Force token refresh
        await user.getIdToken(true);
      } catch (err) {
        // 🔴 User deleted from Firebase Console
        await signOut(auth);
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  /* ⏱️ PERIODIC CHECK (extra safety) */
  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        await user.getIdToken(true);
      } catch {
        await signOut(auth);
        window.location.href = "/login";
      }
    }, 60000); // every 1 minute

    return () => clearInterval(interval);
  }, []);

  /* 🔒 SECURITY: Disable Inspect & Right Click */
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
      <IdleLogout /> {/* ✅ AUTO LOGOUT ON IDLE */}
      {(location.pathname === "/" || location.pathname === "/home") && <Navbar />}

      <main>
        <Outlet />
      </main>

      {(location.pathname === "/" || location.pathname === "/home") && <Footer />}

      <CookieConsent />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;