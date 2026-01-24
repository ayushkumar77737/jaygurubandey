import { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const IdleLogout = () => {
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // ⏱ Change time here (10 minutes)
  const IDLE_TIME = 2 * 60 * 1000;

  const logoutUser = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(logoutUser, IDLE_TIME);
  };

  useEffect(() => {
    const events = [
      "mousemove",
      "keydown",
      "click",
      "scroll",
      "touchstart",
    ];

    events.forEach(event =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer(); // start timer on load

    return () => {
      events.forEach(event =>
        window.removeEventListener(event, resetTimer)
      );
      clearTimeout(timerRef.current);
    };
  }, []);

  return null;
};

export default IdleLogout;