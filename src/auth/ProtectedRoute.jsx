// src/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="auth-loader">
        <div className="loader-card">
          <div className="spinner"></div>
          <p>Loading Jai Gurubande…</p>
        </div>
      </div>
    );
  }

  if (!user) {
  return <Navigate to="/login" replace />;
}

// 🔐 Block unverified emails
if (!user.emailVerified) {
  return <Navigate to="/verify-email" replace />;
}

return children;
};

export default ProtectedRoute;
