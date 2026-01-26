import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.webp";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// ✅ Telegram Group Link
const TELEGRAM_GROUP_LINK = "https://t.me/+5APCSKB6YC85MjRl";

const Subscribe = () => {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const numberRegex = /^[6-9][0-9]{9}$/;

    if (!numberRegex.test(number)) {
      showMessage("❌ Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      // 🔍 CHECK DUPLICATE NUMBER
      const q = query(
        collection(db, "subscribers"),
        where("number", "==", number)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        showMessage("⚠️ This number is already subscribed.");
        setNumber("");
        return;
      }

      // ✅ SAVE TO FIRESTORE
      await addDoc(collection(db, "subscribers"), {
        number,
        createdAt: new Date(),
      });

      showMessage("✅ You are successfully subscribed!");
      setNumber("");

      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    } catch (error) {
      showMessage("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-box">
        <div className="guruji-photo">
          <img src={guruji} alt="Guruji" />
        </div>

        <h2>🔔 Notify Me</h2>
        <p>Get notified whenever we post something new</p>

        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="tel"
            placeholder="Enter your mobile number"
            required
            value={number}
            onChange={(e) =>
              setNumber(e.target.value.replace(/[^0-9]/g, ""))
            }
            maxLength={10}
            disabled={loading}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && <span className="message">{message}</span>}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🙏 Welcome</h3>
            <p>You are successfully subscribed</p>

            <a
              href={TELEGRAM_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-btn"
            >
              👉 Join Telegram Group
            </a>

            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;