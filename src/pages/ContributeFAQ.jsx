import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ContributeFAQ.css";

const ContributeFAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = t("contributeFAQ.faqs", { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cfaq-page">

      {/* Background layer */}
      <div className="cfaq-bg" aria-hidden="true">
        <div className="cfaq-orb cfaq-orb-1" />
        <div className="cfaq-orb cfaq-orb-2" />
        <div className="cfaq-petal cfaq-petal-tl" />
        <div className="cfaq-petal cfaq-petal-br" />
      </div>

      {/* Content layer */}
      <div className="cfaq-content">

        <div className="cfaq-header">
          <span className="cfaq-badge">{t("contributeFAQ.badge")}</span>
          <h2 className="cfaq-title">{t("contributeFAQ.title")}</h2>
          <p className="cfaq-subtitle">{t("contributeFAQ.subtitle")}</p>
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
          {t("contributeFAQ.footer")}{" "}
          <span className="cfaq-contact-hint">{t("contributeFAQ.footer_hint")}</span>
        </p>

      </div>
    </div>
  );
};

export default ContributeFAQ;