import React from "react";
import { useTranslation } from "react-i18next";
import "./PrivacyPolicy.css";

/* SVG paths extracted as constants to keep JSX clean */
const ICON_USERS = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ICON_USAGE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const ICON_SHIELD = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ICON_EMAIL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* One icon per section, in the same order as the sections array */
const SECTION_ICONS = [ICON_USERS, ICON_USAGE, ICON_SHIELD];

/* Tailwind-like delay classes already defined in CSS */
const DELAY_CLASSES = ["pp__delay-3", "pp__delay-4", "pp__delay-5"];

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = t("privacyPolicy.sections", { returnObjects: true });

  return (
    <div className="pp__root">
      {/* Decorative floating orbs */}
      <div className="pp__orb pp__orb--1" />
      <div className="pp__orb pp__orb--2" />
      <div className="pp__orb pp__orb--3" />

      <div className="pp__container">

        {/* Badge */}
        <div className="pp__badge pp__fade-in">
          <span className="pp__badge-dot" />
          {t("privacyPolicy.badge")}
        </div>

        <h1 className="pp__title pp__fade-in pp__delay-1">
          {t("privacyPolicy.title")}{" "}
          <span className="pp__title-accent">
            {t("privacyPolicy.title_accent")}
          </span>
        </h1>

        <p className="pp__lead pp__fade-in pp__delay-2">
          {t("privacyPolicy.lead")}
        </p>

        <div className="pp__divider pp__fade-in pp__delay-2" />

        {/* Dynamic sections */}
        {sections.map((section, i) => (
          <div
            key={i}
            className={`pp__section pp__fade-in ${DELAY_CLASSES[i]}`}
          >
            <div className="pp__section-icon">
              {SECTION_ICONS[i]}
            </div>
            <div className="pp__section-body">
              <h2 className="pp__section-title">{section.title}</h2>
              <p className="pp__section-text">{section.text}</p>
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="pp__contact pp__fade-in pp__delay-6">
          <div className="pp__contact-icon">{ICON_EMAIL}</div>
          <div>
            <h2 className="pp__section-title">
              {t("privacyPolicy.contact_title")}
            </h2>
            <p className="pp__section-text">
              {t("privacyPolicy.contact_text")}
            </p>

            <a
              href={`mailto:${t("privacyPolicy.contact_email")}`}
              className="pp__email-link"
            >
              {t("privacyPolicy.contact_email")}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;