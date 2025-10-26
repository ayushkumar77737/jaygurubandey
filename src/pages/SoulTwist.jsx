import React, { useEffect } from "react";
import "./SoulTwist.css";

const SoulTwist = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="soul-page">
      <div className="soul-container">
        <h1 className="soul-title">SoulTwist</h1>
        <p className="soul-subtitle">
          Dive into soulful reflections, spiritual writings, and heartfelt
          messages that awaken your inner peace.
        </p>

        <div className="soul-content">
          <div className="soul-card">
            <h2 className="soul-card-title">✨ Inner Harmony</h2>
            <p className="soul-card-text">
              Discover how moments of silence and gratitude can bring deep peace
              to your soul.
            </p>
          </div>

          <div className="soul-card">
            <h2 className="soul-card-title">🌸 Mindful Living</h2>
            <p className="soul-card-text">
              Explore ways to live with awareness, balance, and unconditional
              love every day.
            </p>
          </div>

          <div className="soul-card">
            <h2 className="soul-card-title">🌿 Spiritual Journey</h2>
            <p className="soul-card-text">
              Walk the path of wisdom and devotion through inspiring stories and
              teachings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulTwist;
