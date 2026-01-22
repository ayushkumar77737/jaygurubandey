import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // 🔹 SHOW LOADER WHILE CHECKING AUTH
  if (user === undefined) {
    return (
      <div style={styles.loader}>
        Loading...
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

const styles = {
  loader: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#555",
  },
};

export default ProtectedRoute;
