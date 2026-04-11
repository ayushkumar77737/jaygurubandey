import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";   // ✅ NEW
import "./Contact.css";
import ashramImg from "../assets/vision.webp";
import gurujiImg from "../assets/guruji.webp";

const ContactUs = () => {
  const { t } = useTranslation();   // ✅ NEW
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  // ✅ contacts inside component to use t()
  const contacts = [
    {
      id: 1, image: ashramImg,
      name: t("contact.c1_name"),
      email: "info@guruashram.org",
      contact: "+91 98765 43210",
      location: t("contact.c1_location"),
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1226247826625!2d78.48667131487763!3d17.38504498807361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9758eae1d8f5%3A0xdeb7c5a0d8e40e3f!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696428738281!5m2!1sen!2sin"
    },
    {
      id: 2, image: gurujiImg,
      name: t("contact.c2_name"),
      email: "divine@guruashram.org",
      contact: "+91 99876 54321",
      location: t("contact.c2_location"),
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1014224534327!2d83.00266631488045!3d25.317645983819923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e2dffb9a33d%3A0xb13e9b3d1af2ff0!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696429000000!5m2!1sen!2sin"
    }
  ];

  const totalPages = contacts.length;
  const currentContact = contacts[page - 1];

  return (
    <div className="ctu-container">

      {/* Background */}
      <div className="ctu-bg" aria-hidden="true">
        <div className="ctu-orb ctu-orb-1" />
        <div className="ctu-orb ctu-orb-2" />
        <div className="ctu-orb ctu-orb-3" />
        <div className="ctu-grid" />
      </div>

      <div className="ctu-content">

        <div className="ctu-eyebrow" aria-hidden="true">
          <span className="ctu-eyebrow-dot" />
          {t("contact.eyebrow")}
          <span className="ctu-eyebrow-dot" />
        </div>

        <h1 className="ctu-title">{t("contact.title")}</h1>

        <div className="ctu-card" key={page}>
          <div className="ctu-image-wrap">
            <img src={currentContact.image} alt="Ashram" className="ctu-image" />
            <div className="ctu-image-ring" aria-hidden="true" />
          </div>

          <div className="ctu-details">
            <div className="ctu-detail-row">
              <span className="ctu-detail-icon">🏛</span>
              <span><strong>{t("contact.label_ashram")}</strong><br />{currentContact.name}</span>
            </div>
            <div className="ctu-detail-row">
              <span className="ctu-detail-icon">✉</span>
              <span><strong>{t("contact.label_email")}</strong><br />{currentContact.email}</span>
            </div>
            <div className="ctu-detail-row">
              <span className="ctu-detail-icon">📞</span>
              <span><strong>{t("contact.label_phone")}</strong><br />{currentContact.contact}</span>
            </div>
            <div className="ctu-detail-row">
              <span className="ctu-detail-icon">📍</span>
              <span><strong>{t("contact.label_location")}</strong><br />{currentContact.location}</span>
            </div>

            <div className="ctu-map-box">
              <h3 className="ctu-map-title">
                <span className="ctu-map-dot" aria-hidden="true" /> {t("contact.find_us")}
              </h3>
              <iframe
                title="Google Map Location"
                src={currentContact.map}
                width="100%" height="200"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="ctu-pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>{t("contact.prev")}</button>
          <span>{t("contact.page_info", { page, total: totalPages })}</span>
          <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>{t("contact.next")}</button>
        </div>

        {/* Action buttons */}
        <div className="ctu-action-row">
          <button className="ctu-action-btn" onClick={() => navigate("/stayconnected")}>
            <span className="ctu-btn-shimmer" />{t("contact.btn_stay")}
          </button>
          <button className="ctu-action-btn" onClick={() => navigate("/beforeyouvisit")}>
            <span className="ctu-btn-shimmer" />{t("contact.btn_visit")}
          </button>
          <button className="ctu-action-btn" onClick={() => navigate("/divine")}>
            <span className="ctu-btn-shimmer" />{t("contact.btn_divine")}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;