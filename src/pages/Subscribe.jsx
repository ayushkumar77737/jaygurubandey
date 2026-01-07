import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg";

// ✅ Single Telegram Group Link
const TELEGRAM_GROUP_LINK = "https://t.me/+5APCSKB6YC85MjRl";

const Subscribe = () => {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // 🆕 Popup state
    const [showPopup, setShowPopup] = useState(false);

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        // ✅ Indian mobile number validation
        const numberRegex = /^[6-9][0-9]{9}$/;

        if (!numberRegex.test(number)) {
            showMessage("❌ Please enter a valid 10-digit mobile number.");
            return;
        }

        setLoading(true);

        fetch(
            "https://script.google.com/macros/s/AKfycbzif_0VWMjd86WRh5d1pnV-z5dZ2YIvOS6jXZw5WebYH9BwO9axds5DtBR-vTHyQUvkJQ/exec",
            {
                method: "POST",
                body: new URLSearchParams({
                    number,
                }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ This number is already subscribed.");
                    setNumber("");
                } else {
                    showMessage("✅ You are successfully subscribed!");
                    setNumber("");

                    // 🕒 Open popup after 2 seconds
                    setTimeout(() => {
                        setShowPopup(true);
                    }, 2000);
                }
            })
            .catch(() => {
                showMessage("❌ Something went wrong. Try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="subscribe-page">
            <div className="subscribe-box">
                {/* Guruji Image */}
                <div className="guruji-photo">
                    <img src={guruji} alt="Guruji" />
                </div>

                <h2>🔔 Notify Me</h2>
                <p>Get notified whenever we post something new</p>

                <form onSubmit={handleSubmit} className="subscribe-form">
                    {/* 📱 Mobile Number */}
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

            {/* 🟢 SUCCESS POPUP */}
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
