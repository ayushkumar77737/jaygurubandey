import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage("");

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
          setMessage("⚠️ This email is already subscribed.");
        } else {
          setMessage("✅ You are successfully subscribed!");
          setEmail("");
        }
      })
      .catch(() => {
        setMessage("❌ Something went wrong. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="subscribe-page">
      <div className="subscribe-box">
        <h2>🔔 Stay Connected</h2>
        <p>Get notified whenever we post something new</p>

        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
