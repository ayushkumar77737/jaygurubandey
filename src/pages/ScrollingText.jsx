import React from "react";
import "./ScrollingText.css";

const ScrollingText = () => {
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        {/* Repeating "जय गुरुबन्दे" many times for smooth looping */}
        Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;
        Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;
        Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;
        Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;
        Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;Jai Gurubande&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default ScrollingText;
