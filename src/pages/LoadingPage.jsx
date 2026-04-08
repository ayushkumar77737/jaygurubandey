import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="ldp__page">

      {/* Mandala ring decorations */}
      <div className="ldp__ring ldp__ring--1" />
      <div className="ldp__ring ldp__ring--2" />
      <div className="ldp__ring ldp__ring--3" />

      {/* Top sparkles */}
      <div className="ldp__sparkles">
        {["✦","🌸","✦","💫","✦","🌸","✦"].map((s, i) => (
          <span key={i} className="ldp__spark" style={{ animationDelay: `${i * 0.18}s` }}>{s}</span>
        ))}
      </div>

      {/* Glowing Orb */}
      <div className="ldp__orb-wrap">
        <div className="ldp__orb-halo ldp__orb-halo--outer" />
        <div className="ldp__orb-halo ldp__orb-halo--mid" />
        <div className="ldp__orb-halo ldp__orb-halo--inner" />
        <img src="/favicon.png" alt="Loading..." className="ldp__img" />
      </div>

      {/* Animated Text */}
      <div className="ldp__text">
        <div className="ldp__ornament">
          <span className="ldp__orn-line" />
          <span className="ldp__orn-gem">❖</span>
          <span className="ldp__orn-line" />
        </div>
        <h1 className="ldp__main">🌸 Surrender to Guruji's Grace 🌸</h1>
        <p className="ldp__sub">In surrender, there is peace, there is the Divine.</p>
        <div className="ldp__ornament ldp__ornament--flip">
          <span className="ldp__orn-line" />
          <span className="ldp__orn-gem">❖</span>
          <span className="ldp__orn-line" />
        </div>
        <div className="ldp__dots">
          <span /><span /><span />
        </div>
      </div>

      {/* Bottom sacred text */}
      <p className="ldp__tagline">✦ Jai Gurubande ✦</p>

    </div>
  );
};

export default LoadingPage;