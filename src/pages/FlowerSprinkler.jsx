import React, { useEffect } from "react";
import "./FlowerSprinkler.css";

const FlowerSprinkler = () => {
  useEffect(() => {
    const createElement = () => {
      const isGlow = Math.random() < 0.2;
      const isButterfly = !isGlow && Math.random() < 0.05;
      const isSparkle = !isGlow && !isButterfly && Math.random() < 0.08;

      let element;

      if (isGlow) {
        element = document.createElement("div");
        element.className = "fsp__glow";
        // random warm glow colour
        const hue = [45, 55, 30, 0][Math.floor(Math.random() * 4)];
        element.style.setProperty("--fsp-hue", hue);
        const size = 6 + Math.random() * 10 + "px";
        element.style.width = size;
        element.style.height = size;

      } else if (isButterfly) {
        element = document.createElement("div");
        element.className = "fsp__butterfly";
        const icons = ["🦋", "🕊️", "🌟", "⭐"];
        element.innerText = icons[Math.floor(Math.random() * icons.length)];
        element.style.fontSize = 20 + Math.random() * 20 + "px";

      } else if (isSparkle) {
        element = document.createElement("div");
        element.className = "fsp__sparkle";
        const sparks = ["✨", "💫", "🌟", "⚡"];
        element.innerText = sparks[Math.floor(Math.random() * sparks.length)];
        element.style.fontSize = 14 + Math.random() * 14 + "px";

      } else {
        element = document.createElement("div");
        element.className = "fsp__petal";
        const flowers = ["🌸", "🌹", "🌼", "💮", "🌺", "🪷"];
        element.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        element.style.fontSize = 14 + Math.random() * 22 + "px";
        // random horizontal drift
        const drift = (Math.random() - 0.5) * 120;
        element.style.setProperty("--fsp-drift", drift + "px");
      }

      element.style.left = Math.random() * 100 + "%";
      element.style.animationDuration = (3 + Math.random() * 5).toFixed(2) + "s";
      element.style.animationDelay = (Math.random() * 0.8).toFixed(2) + "s";
      element.style.opacity = (0.55 + Math.random() * 0.45).toFixed(2);

      const hero = document.querySelector(".hx-hero");
      if (hero) hero.appendChild(element);

      setTimeout(() => element.remove(), 9000);
    };

    const interval = setInterval(createElement, 300);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FlowerSprinkler;