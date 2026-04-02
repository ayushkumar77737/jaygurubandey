import React, { useEffect, useState } from "react";
import "./ContributeFAQ.css";

const ContributeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "Why should I contribute to the Ashram?",
      answer:
        "Your contribution supports spiritual activities, seva programs, annadanam, and the daily functioning of the Ashram.",
    },
    {
      question: "How can I contribute?",
      answer:
        "You can contribute through QR code scan, or by making a direct contribution at the Ashram.",
    },
    {
      question: "Is online payment safe?",
      answer:
        "Yes. All online contributions are processed through secure and trusted payment methods to ensure safety.",
    },
    {
      question: "Can I contribute any amount?",
      answer:
        "Yes. Contributions are accepted up to a maximum amount of ₹1,00000. Any amount beyond this limit is not permitted. Every contribution within the allowed limit is accepted with gratitude and devotion.",
    },
    {
      question: "Will I receive confirmation after contributing?",
      answer:
        "After submitting your contribution, the details are saved securely in our system. You can check the status of your contribution anytime in the Check Payment Status page to see whether it has been reviewed and accepted or not.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cfaq-page">

      {/* Background layer — absolutely positioned, isolated, never overlaps content */}
      <div className="cfaq-bg" aria-hidden="true">
        <div className="cfaq-orb cfaq-orb-1" />
        <div className="cfaq-orb cfaq-orb-2" />
        <div className="cfaq-petal cfaq-petal-tl" />
        <div className="cfaq-petal cfaq-petal-br" />
      </div>

      {/* Content layer — sits strictly above the background */}
      <div className="cfaq-content">

        <div className="cfaq-header">
          <span className="cfaq-badge">Help &amp; Support</span>
          <h2 className="cfaq-title">Contribute – FAQ's</h2>
          <p className="cfaq-subtitle">
            Everything you need to know about contributing to the Ashram.
          </p>
        </div>

        <div className="cfaq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`cfaq-item ${openIndex === index ? "cfaq-open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="cfaq-question">
                <div className="cfaq-question-inner">
                  <span className="cfaq-num">0{index + 1}</span>
                  <span>{faq.question}</span>
                </div>
                <span className="cfaq-icon">
                  {openIndex === index ? "–" : "＋"}
                </span>
              </div>
              <div className="cfaq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>

        <p className="cfaq-footer-note">
          Still have questions?{" "}
          <span className="cfaq-contact-hint">Visit us at the Ashram 🙏</span>
        </p>

      </div>
    </div>
  );
};

export default ContributeFAQ;