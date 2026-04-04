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
        <div className="lvn-page">
            <div className="lvn-card">

                {isLive ? (
                    <>
                        {/* 🔴 Live Indicator */}
                        <div className="lvn-indicator">
                            <span className="lvn-dot"></span>
                            LIVE NOW
                        </div>

                        <h1>Live Satsang with Guruji</h1>
                        <p className="lvn-card-sub">Join the divine moment happening right now</p>

                        {/* 🎥 Live Content */}
                        {livePlatform === "youtube" ? (
                            <div className="lvn-video-box">
                                <iframe
                                    src={youtubeLiveUrl}
                                    title="Live Satsang"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <div className="lvn-meet-box">
                                <p>Live Satsang is happening on</p>
                                <h2>Google Meet</h2>

                                <a
                                    href={googleMeetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="lvn-join-btn"
                                >
                                    Join Live Meeting
                                </a>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Offline / No session state */}
                        <span className="lvn-offline-icon">🙏</span>

                        <h1>No Live Session Now</h1>
                        <p className="lvn-card-sub">Next satsang will begin soon. Stay blessed.</p>

                        <div className="lvn-offline-divider">
                            <span>🪷</span>
                        </div>

                        <div className="lvn-next-info">
                            🕕 Timings We Will Let You Know
                        </div>

                        <div className="lvn-check-back">
                            🙏 Please check back later for the next live satsang
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default LiveNow;