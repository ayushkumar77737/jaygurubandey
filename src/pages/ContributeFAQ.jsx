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
        "After submitting your contribution, the details are saved securely in our system. You can check the status of your contribution anytime in the Check Payment Status page to see whether it has been reviewed and accepted or not."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2 className="faq-title">Contribute – Faq's</h2>

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
    </div>
  );
};

export default ContributeFAQ;
