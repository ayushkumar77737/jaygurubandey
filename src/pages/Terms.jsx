import React from "react";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-updated">Last updated: January 2026</p>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you agree to be bound by these
            Terms & Conditions. If you do not agree with any part of these terms,
            please discontinue using the website.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Purpose of the Website</h2>
          <p>
            The content provided on this website is for general informational
            and spiritual purposes only. It does not constitute professional,
            legal, or medical advice.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Content Accuracy</h2>
          <p>
            We strive to keep the information on this website accurate and up to date.
            If any content is found to be incorrect or outdated, we take responsibility
            for correcting it and encourage users to inform us so we can make necessary updates.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. External Links</h2>
          <p>
            This website may contain links to third-party websites. We do not control or endorse
            the content, policies, or practices of any external websites and are not responsible for them.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            While we strive to provide a smooth and safe experience on this website, if any user
            faces issues or difficulties while using the site, we encourage them to contact us.
            We will make reasonable efforts to review and address such issues in a timely manner.
          </p>

        </section>

        <section className="terms-section">
          <h2>6. Contact</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us using the contact details provided on the website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
