import React from "react";
import "./ScrollingText.css";

const MARQUEE_CONTENT = (
  <>
    ✿ Jai Gurubande Saheb Sabka &nbsp;🙏&nbsp; &nbsp;&nbsp;&nbsp;
    ✿ Jai Gurubande Saheb Sabka &nbsp;🙏&nbsp; &nbsp;&nbsp;&nbsp;
    ✿ Jai Gurubande Saheb Sabka &nbsp;🙏&nbsp; &nbsp;&nbsp;&nbsp;
    ✿ Jai Gurubande Saheb Sabka &nbsp;🙏&nbsp; &nbsp;&nbsp;&nbsp;
    ✿ Jai Gurubande Saheb Sabka &nbsp;🙏&nbsp; &nbsp;&nbsp;&nbsp;
  </>
);

const ScrollingText = () => {
  return (
    <div className="sctxt__container">
      <div className="sctxt__glow-strip" />
      <div className="sctxt__track">
        <div className="sctxt__belt">
          <span className="sctxt__segment">{MARQUEE_CONTENT}</span>
          <span className="sctxt__segment" aria-hidden="true">{MARQUEE_CONTENT}</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;