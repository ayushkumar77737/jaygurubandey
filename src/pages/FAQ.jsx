import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./FAQ.css";

const FAQ = () => {
  const { t } = useTranslation();   // ✅ NEW
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ faqs inside component to use t()
  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faqpg-page">

      <div className="faqpg-bg" aria-hidden="true">
        <div className="faqpg-orb faqpg-orb-1" />
        <div className="faqpg-orb faqpg-orb-2" />
        <div className="faqpg-petal faqpg-petal-tl" />
        <div className="faqpg-petal faqpg-petal-br" />
      </div>

      <div className="faqpg-content">

        <div className="faqpg-header">
          <span className="faqpg-badge">{t("faq.badge")}</span>
          <h2 className="faqpg-title">{t("faq.title")}</h2>
          <p className="faqpg-subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faqpg-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faqpg-item ${openIndex === index ? "faqpg-open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faqpg-question">
                <div className="faqpg-question-inner">
                  <span className="faqpg-num">0{index + 1}</span>
                  <span>{faq.question}</span>
                </div>
                <span className="faqpg-icon">{openIndex === index ? "–" : "＋"}</span>
              </div>
              <div className="faqpg-answer">{faq.answer}</div>
            </div>
          ))}
        </div>

        <div className="faqpg-btn-row">
          <button className="faqpg-feedback-btn" onClick={() => navigate("/feedback")}>
            <span className="faqpg-btn-shimmer" />
            {t("faq.btn_feedback")}
          </button>
          <button className="faqpg-quickstart-btn" onClick={() => navigate("/quickstart")}>
            <span className="faqpg-btn-shimmer" />
            {t("faq.btn_quickstart")}
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;