import { useState } from "react";
import "./Subscribe.css";
import guruji from "../assets/guruji.jpg"; // adjust path if needed

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const showMessage = (text) => {
        setMessage(text);
        setEmail("");
        setTimeout(() => setMessage(""), 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return;

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            showMessage("❌ Please enter a valid email address.");
            return;
        }

        setLoading(true);

        fetch(
            "https://script.google.com/macros/s/AKfycbzif_0VWMjd86WRh5d1pnV-z5dZ2YIvOS6jXZw5WebYH9BwO9axds5DtBR-vTHyQUvkJQ/exec",
            {
                method: "POST",
                body: new URLSearchParams({ email }),
            }
        )
            .then((res) => res.text())
            .then((text) => {
                if (text === "Already subscribed") {
                    showMessage("⚠️ This email is already subscribed.");
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
                <p>Get notified whenever we post something new

                </p>

                <form onSubmit={handleSubmit} className="subscribe-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value.replace(/[^a-zA-Z0-9@._-]/g, ""))
                        }
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
