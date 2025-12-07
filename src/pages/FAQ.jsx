import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "Who is Guruji and what is Jai Gurubande?",
      answer:
        "Guruji is our divine guide and spiritual inspiration. Jai Gurubande is a community dedicated to spreading his teachings, positivity, and devotion through seva, love, and spiritual practices.",
    },
    {
      question: "How can I become part of this community?",
      answer:
        "You can join our official WhatsApp group, follow us on social media, or participate in our seva and events to stay connected and contribute.",
    },
    {
      question: "What kind of activities does the community organize?",
      answer:
        "We conduct satsangs, seva events, spiritual discussions, and community gatherings that help connect devotees and spread Guruji’s teachings.",
    },
    {
      question: "Is there any fee or membership required?",
      answer:
        "No, joining Jai Gurubande is completely free. All you need is devotion and willingness to participate in community activities.",
    },
    {
      question: "How can I contact the organizing committee?",
      answer:
        "You can visit the 'Committee Members' page in the footer to get in touch with the respective team or send a message via our official social media channels.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "–" : "＋"}
              </span>
            </div>

            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>

      {/* ===== TWO BUTTONS (LEFT + RIGHT ALIGNED) ===== */}
      <div className="feedback-button-container">
        <button
          className="feedback-button"
          onClick={() => navigate("/feedback")}
        >
          🙏💬 Devotees Feedback
        </button>

        <button
          className="quickstart-button"
          onClick={() => navigate("/about")}
        >
          🚀 Quick Start
        </button>
      </div>
    </div>
  );
};

export default FAQ;
