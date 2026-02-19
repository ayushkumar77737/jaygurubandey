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
        "Guruji, lovingly known as Jai Gurubande, is our divine guide and spiritual inspiration. He leads and blesses the community with his teachings, spreading positivity, devotion, and the path of seva (selfless service) and love.",
    },
    {
      question: "How can I become part of the Jai Gurubande spiritual path?",
      answer:
        "You can become part of the Jai Gurubande spiritual path by staying connected with Guruji’s teachings, joining satsangs and seva activities, following the official social channels, and participating in spiritual programs and events organized by the ashram."
    },
    {
      question: "What kind of activities are conducted under Ashram?",
      answer:
        "Under ashram, regular seva activities, satsangs, spiritual programs and events are conducted throughout the year. By Guruji’s grace, free paralysis treatment is also offered at the ashram as a form of seva, along with online services such as spiritual resources, announcements, and updates."
    },
    {
      question: "Is there any fee or membership required?",
      answer:
        "No, joining with guruji is completely free. All you need is devotion and willingness to participate in ashram activities.",
    },
    {
      question: "How can I get in touch for event-related queries?",
      answer:
        "All important contact details are shared in all programs page on the website and through our verified social media channel in Whatsapp.",
    }
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
          onClick={() => navigate("/quickstart")}
        >
          🚀 Quick Start
        </button>
      </div>
    </div>
  );
};

export default FAQ;
