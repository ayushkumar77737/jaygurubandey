import React from "react";
import "./LiveNow.css";

const LiveNow = () => {
  // 🔧 Later connect with backend / admin panel
  const isLive = false;

  // 🔁 Choose live platform
  const livePlatform = "meet"; // "youtube" | "meet"

  // 🔗 Live links
  const youtubeLiveUrl =
    "https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID";

  const googleMeetLink = "https://meet.google.com/abc-defg-hij";

  return (
    <div className="live-page">
      <div className="live-card">
        {isLive ? (
          <>
            {/* 🔴 Live Indicator */}
            <div className="live-indicator">
              <span className="dot"></span>
              <span className="text">LIVE NOW</span>
            </div>

            <h1>Live Satsang with Guruji</h1>
            <p>Join the divine moment happening right now</p>

            {/* 🎥 Live Content */}
            {livePlatform === "youtube" ? (
              <div className="video-box">
                <iframe
                  src={youtubeLiveUrl}
                  title="Live Satsang"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="meet-box">
                <p>Live Satsang is happening on</p>
                <h2>Google Meet</h2>

                <a
                  href={googleMeetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="join-btn"
                >
                  Join Live Meeting
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <h1>No Live Session Now 🙏</h1>
            <p>Next satsang will begin soon</p>

            <div className="next-info">
              <span>🕕 Time We Will Let You Know</span>
            </div>

            <button className="schedule-btn">View Schedule</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveNow;
