import React, { useEffect } from "react";
import "./FlowerSprinkler.css";

const FlowerSprinkler = () => {
  useEffect(() => {
    const createElement = () => {
      // Randomly decide whether to drop a flower or glow
      const isGlow = Math.random() < 0.2; // 20% chance glow particle
      const isButterfly = !isGlow && Math.random() < 0.05; // 5% chance butterfly

      let element;

      if (isGlow) {
        // ✨ Glow particle
        element = document.createElement("div");
        element.className = "glow";
      } else if (isButterfly) {
        // 🦋 Butterfly / Dove
        element = document.createElement("div");
        element.className = "butterfly";
        const butterflies = ["🦋", "🕊️"];
        element.innerText = butterflies[Math.floor(Math.random() * butterflies.length)];
      } else {
        // 🌸 Flower petals
        element = document.createElement("div");
        element.className = "petal";
        const flowers = ["🌸", "🌹", "🌼", "💮"]; // multiple flower types
        element.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        element.style.fontSize = 16 + Math.random() * 24 + "px";
      }

      // Common styles for all
      element.style.left = Math.random() * window.innerWidth + "px";
      element.style.animationDuration = 3 + Math.random() * 5 + "s";
      element.style.opacity = Math.random();

      // Append inside hero section
      const hero = document.querySelector(".hero");
      if (hero) hero.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 8000);
    };

    const interval = setInterval(createElement, 350); // sprinkle speed
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FlowerSprinkler;
