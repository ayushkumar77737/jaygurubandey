import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg"; // adjust path if needed

const Subscribe = () => {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const showMessage = (text) => {
        setMessage(text);
        setNumber("");
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        // ✅ Indian mobile number validation (10 digits, starts with 6–9)
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
                body: new URLSearchParams({ number }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ This number is already subscribed.");
                } else {
                    showMessage("✅ You are successfully subscribed!");
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
        </div>
    );
};

export default Subscribe;
