import React, { useEffect, useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      question: "Who is Guruji and what is Jay Guru Bandey?",
      answer:
        "Guruji is our divine guide and spiritual inspiration. Jay Guru Bandey is a community dedicated to spreading his teachings, positivity, and devotion through seva, love, and spiritual practices."
    },
    {
      question: "How can I become part of this community?",
      answer:
        "You can join our official WhatsApp group, follow us on social media, or participate in our seva and events to stay connected and contribute."
    },
    {
      question: "What kind of activities does the community organize?",
      answer:
        "We conduct satsangs, seva events, spiritual discussions, and community gatherings that help connect devotees and spread Guruji’s teachings."
    },
    {
      question: "Is there any fee or membership required?",
      answer:
        "No, joining Jay Guru Bandey is completely free. All you need is devotion and willingness to participate in community activities."
    },
    {
      question: "How can I contact the organizing committee?",
      answer:
        "You can visit the 'Committee Members' page in the footer to get in touch with the respective team or send a message via our official social media channels."
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
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
