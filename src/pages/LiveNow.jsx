import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./LiveNow.css";

const LiveNow = () => {
    const { t } = useTranslation();   // ✅ NEW

    const isLive = false;
    const livePlatform = "meet"; // "youtube" | "meet"
    const youtubeLiveUrl = "https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID";
    const googleMeetLink = "https://meet.google.com/abc-defg-hij";

    return (
        <div className="lvn-page">
            <div className="lvn-card">

                {isLive ? (
                    <>
                        {/* 🔴 Live */}
                        <div className="lvn-indicator">
                            <span className="lvn-dot"></span>
                            {t("liveNow.live_indicator")}
                        </div>
                        <h1>{t("liveNow.live_title")}</h1>
                        <p className="lvn-card-sub">{t("liveNow.live_sub")}</p>

                        {livePlatform === "youtube" ? (
                            <div className="lvn-video-box">
                                <iframe src={youtubeLiveUrl} title="Live Satsang" allowFullScreen />
                            </div>
                        ) : (
                            <div className="lvn-meet-box">
                                <p>{t("liveNow.meet_text")}</p>
                                <h2>{t("liveNow.meet_platform")}</h2>
                                <a href={googleMeetLink} target="_blank" rel="noopener noreferrer" className="lvn-join-btn">
                                    {t("liveNow.join_btn")}
                                </a>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Offline */}
                        <span className="lvn-offline-icon">🙏</span>
                        <h1>{t("liveNow.offline_title")}</h1>
                        <p className="lvn-card-sub">{t("liveNow.offline_sub")}</p>
                        <div className="lvn-offline-divider"><span>🪷</span></div>
                        <div className="lvn-next-info">{t("liveNow.offline_timing")}</div>
                        <div className="lvn-check-back">{t("liveNow.offline_check")}</div>
                    </>
                )}

            </div>
        </div>
    );
};

export default LiveNow;