import React from "react";
import "./Terms.css";

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    text: "By accessing and using this website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue using the website."
  },
  {
    num: "02",
    title: "Purpose of the Website",
    text: "The content provided on this website is for general informational and spiritual purposes only. It does not constitute professional, legal, or medical advice."
  },
  {
    num: "03",
    title: "Content Accuracy",
    text: "We strive to keep the information on this website accurate and up to date. If any content is found to be incorrect or outdated, we take responsibility for correcting it and encourage users to inform us so we can make necessary updates."
  },
  {
    num: "04",
    title: "External Links",
    text: "This website may contain links to third-party websites. We do not control or endorse the content, policies, or practices of any external websites and are not responsible for them."
  },
  {
    num: "05",
    title: "Limitation of Liability",
    text: "While we strive to provide a smooth and safe experience on this website, if any user faces issues or difficulties while using the site, we encourage them to contact us. We will make reasonable efforts to review and address such issues in a timely manner."
  },
  {
    num: "06",
    title: "Contact",
    text: "If you have any questions regarding these Terms & Conditions, please contact us using the contact details provided on the website."
  },
];

const Terms = () => {
  return (
    <div className="trms__page">

      {/* Ambient glows */}
      <div className="trms__bg" aria-hidden="true">
        <div className="trms__bg-glow trms__bg-glow--1" />
        <div className="trms__bg-glow trms__bg-glow--2" />
        <div className="trms__bg-glow trms__bg-glow--3" />
      </div>

      <div className="trms__container">

        {/* ── Header ── */}
        <header className="trms__header">
          <div className="trms__orn">
            <span className="trms__orn-line" />
            <span className="trms__orn-icon">⚖</span>
            <span className="trms__orn-line" />
          </div>
          <h1 className="trms__title">Terms &amp; Conditions</h1>
          <p className="trms__subtitle">
            Please read these terms carefully before using our platform.
          </p>
          <div className="trms__orn">
            <span className="trms__orn-line" />
            <span className="trms__orn-dot" />
            <span className="trms__orn-line" />
          </div>
          <p className="trms__updated">Last updated: January 2026</p>
        </header>

        {/* ── Sections ── */}
        <div className="trms__sections">
          {sections.map((s, i) => (
            <section
              key={s.num}
              className="trms__section"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="trms__section-num">{s.num}</div>
              <div className="trms__section-body">
                <h2 className="trms__section-title">{s.title}</h2>
                <div className="trms__section-rule" />
                <p className="trms__section-text">{s.text}</p>
              </div>
            </section>
          ))}
        </div>

        {/* ── Footer note ── */}
        <footer className="trms__footer">
          <div className="trms__orn">
            <span className="trms__orn-line" />
            <span className="trms__orn-dot" />
            <span className="trms__orn-line" />
          </div>
          <p className="trms__footer-text">
            These terms are crafted with transparency and care. For any queries,
            reach us through the{" "}
            <a href="/contact" className="trms__footer-link">Contact page</a>.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Terms;