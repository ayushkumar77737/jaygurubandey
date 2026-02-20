import React, { useState } from "react";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
//import "./VerifyEmail.css"; // optional styling

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resendVerification = async () => {
    if (!auth.currentUser) {
      setMessage("❌ Not logged in");
      return;
    }

    try {
      setLoading(true);
      await sendEmailVerification(auth.currentUser);
      setMessage("📩 Verification email sent. Please check your inbox/spam.");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to send verification email. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <h2>Verify your email</h2>
        <p>
          Your email is not verified yet. Please check your inbox and click the
          verification link.
        </p>

        {message && <p className="verify-message">{message}</p>}

        <button onClick={resendVerification} disabled={loading}>
          {loading ? "Sending..." : "Resend verification email"}
        </button>

        <button onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;