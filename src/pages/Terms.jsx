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
            please do not use the website.
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
            While we strive to keep the information accurate and up to date, we
            make no warranties or guarantees of any kind regarding completeness,
            reliability, or accuracy of the content.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of any external
            sites.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            We shall not be held liable for any loss, damage, or inconvenience
            arising from the use of this website or reliance on its content.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to update or change these Terms & Conditions at
            any time without prior notice. Continued use of the website implies
            acceptance of the updated terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Contact</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us through the information provided on the website.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
