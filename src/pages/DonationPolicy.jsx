import React from "react";
import "./DonationPolicy.css";

const cards = [
  {
    num: "01",
    icon: "🤲",
    title: "Voluntary Contributions",
    text: "All donations made through this website are purely voluntary. Donating is entirely at the discretion of the user and is not mandatory to access any content or services on this website."
  },
  {
    num: "02",
    icon: "📜",
    title: "No Obligation or Guarantee",
    text: "Donations do not create any obligation, entitlement, or guarantee of services, benefits, or outcomes. The website does not promise any material, spiritual, or personal gain in return for donations."
  },
  {
    num: "03",
    icon: "🕉️",
    title: "Purpose of Donations",
    text: "Contributions received are used solely for religious, spiritual, and charitable purposes, including but not limited to satsangs, spiritual programs, ashram activities, community service, and related initiatives."
  },
  {
    num: "04",
    icon: "💳",
    title: "Payment Methods",
    text: "Donations may be made through QR code provided on the website. We do not store or process any sensitive payment information."
  },
  {
    num: "05",
    icon: "🔒",
    title: "Non-Refundable Donations",
    text: "All donations are final and non-refundable. Once a contribution has been submitted and recorded, it cannot be reversed or canceled. Users are advised to verify payment details before submitting."
  },
  {
    num: "06",
    icon: "✦",
    title: "Transparency & Responsibility",
    text: "We strive to use all contributions responsibly and ethically for the intended purposes. The exact allocation of funds may vary based on organizational needs."
  },
];

const DonationPolicy = () => {
  return (
    <section className="dnpl__page">

      {/* Ambient glows */}
      <div className="dnpl__bg" aria-hidden="true">
        <div className="dnpl__bg-glow dnpl__bg-glow--1" />
        <div className="dnpl__bg-glow dnpl__bg-glow--2" />
        <div className="dnpl__bg-glow dnpl__bg-glow--3" />
      </div>

      <div className="dnpl__container">

        {/* ── Header ── */}
        <header className="dnpl__header">
          <div className="dnpl__orn">
            <span className="dnpl__orn-line" />
            <span className="dnpl__orn-icon">🙏</span>
            <span className="dnpl__orn-line" />
          </div>
          <h1 className="dnpl__title">Donation Policy</h1>
          <div className="dnpl__title-bar" />
          <p className="dnpl__intro">
            We sincerely thank you for your willingness to support our spiritual
            and religious initiatives. Please read the following donation policy
            carefully before making any contribution.
          </p>
        </header>

        {/* ── Cards ── */}
        <div className="dnpl__cards">
          {cards.map((c, i) => (
            <div
              key={c.num}
              className="dnpl__card"
              style={{ animationDelay: `${0.08 + i * 0.09}s` }}
            >
              <div className="dnpl__card-side">
                <div className="dnpl__card-num">{c.num}</div>
                <div className="dnpl__card-vline" />
              </div>
              <div className="dnpl__card-body">
                <div className="dnpl__card-top">
                  <span className="dnpl__card-icon">{c.icon}</span>
                  <h2 className="dnpl__card-title">{c.title}</h2>
                </div>
                <p className="dnpl__card-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <footer className="dnpl__footer">
          <div className="dnpl__orn">
            <span className="dnpl__orn-line" />
            <span className="dnpl__orn-dot" />
            <span className="dnpl__orn-line" />
          </div>
          <p className="dnpl__footer-text">
            By making a donation through this website, you acknowledge that you
            have read, understood, and agreed to this Donation Policy.
          </p>
        </footer>

      </div>
    </section>
  );
};

export default DonationPolicy;