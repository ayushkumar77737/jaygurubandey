import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg"; // adjust path if needed

// 🔗 State → Telegram Group Mapping
const STATE_TELEGRAM_LINKS = {
    Telangana: "https://t.me/telangana_guruji",
    "Andhra Pradesh": "https://t.me/andhra_guruji",
    Maharashtra: "https://t.me/maharashtra_guruji",
    Karnataka: "https://t.me/karnataka_guruji",
    "Tamil Nadu": "https://t.me/tamilnadu_guruji",
};

const Subscribe = () => {
    const [number, setNumber] = useState("");
    const [state, setState] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // 🆕 Popup states
    const [showPopup, setShowPopup] = useState(false);
    const [subscribedState, setSubscribedState] = useState("");

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        // ✅ Indian mobile number validation
        const numberRegex = /^[6-9][0-9]{9}$/;

        // ✅ State validation
        const stateRegex = /^[A-Za-z ]{2,}$/;

        if (!numberRegex.test(number)) {
            showMessage("❌ Please enter a valid 10-digit mobile number.");
            return;
        }

        if (!stateRegex.test(state)) {
            showMessage("❌ Please enter a valid state name.");
            return;
        }

        setLoading(true);

        fetch(
            "https://script.google.com/macros/s/AKfycbzif_0VWMjd86WRh5d1pnV-z5dZ2YIvOS6jXZw5WebYH9BwO9axds5DtBR-vTHyQUvkJQ/exec",
            {
                method: "POST",
                body: new URLSearchParams({
                    number,
                    state,
                }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ This number is already subscribed.");
                    setNumber("");
                    setState("");
                } else {
                    showMessage("✅ You are successfully subscribed!");
                    setSubscribedState(state);
                    setShowPopup(true);

                    // reset inputs after success
                    setNumber("");
                    setState("");
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

                    {/* 🏛 State Name */}
                    <input
                        type="text"
                        placeholder="Enter your state"
                        required
                        value={state}
                        onChange={(e) =>
                            setState(e.target.value.replace(/[^A-Za-z ]/g, ""))
                        }
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

                        <p>
                            You selected <strong>{subscribedState}</strong>
                        </p>

                        <a
                            href={
                                STATE_TELEGRAM_LINKS[subscribedState] ||
                                "https://t.me/guruji_official"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="telegram-btn"
                        >
                            👉 Join {subscribedState} Telegram Group
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
