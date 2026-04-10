import React from "react";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./LoadingPage.css";

const LoadingPage = () => {
  const { t } = useTranslation();   // ✅ NEW

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
        <h1 className="ldp__main">{t("loading.main")}</h1>
        <p className="ldp__sub">{t("loading.sub")}</p>
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
      <p className="ldp__tagline">{t("loading.tagline")}</p>

    </div>
  );
};

export default LoadingPage;