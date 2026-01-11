import React from "react";
import "./DonationPolicy.css";

const DonationPolicy = () => {
  return (
    <section className="donation-policy-page">
      <div className="donation-policy-container">
        <h1 className="donation-policy-title">Donation Policy</h1>

        <p className="donation-policy-intro">
          We sincerely thank you for your willingness to support our spiritual
          and religious initiatives. Please read the following donation policy
          carefully before making any contribution.
        </p>

        <div className="policy-card">
          <h2>1. Voluntary Contributions</h2>
          <p>
            All donations made through this website are purely voluntary.
            Donating is entirely at the discretion of the user and is not
            mandatory to access any content or services on this website.
          </p>
        </div>

        <div className="policy-card">
          <h2>2. No Obligation or Guarantee</h2>
          <p>
            Donations do not create any obligation, entitlement, or guarantee
            of services, benefits, or outcomes. The website does not promise any
            material, spiritual, or personal gain in return for donations.
          </p>
        </div>

        <div className="policy-card">
          <h2>3. Purpose of Donations</h2>
          <p>
            Contributions received are used solely for religious, spiritual,
            and charitable purposes, including but not limited to satsangs,
            spiritual programs, temple activities, community service, and
            related initiatives.
          </p>
        </div>

        <div className="policy-card">
          <h2>4. Payment Methods</h2>
          <p>
            Donations may be made through UPI, PhonePe, QR code, or other payment
            links provided on the website. We do not store or process any
            sensitive payment information.
          </p>
        </div>

        <div className="policy-card">
          <h2>5. Non-Refundable Donations</h2>
          <p>
            All donations are final and non-refundable. Once a contribution has
            been made, it cannot be reversed or canceled.
          </p>
        </div>

        <div className="policy-card">
          <h2>6. Transparency & Responsibility</h2>
          <p>
            We strive to use all contributions responsibly and ethically for
            the intended purposes. However, the exact allocation of funds may
            vary based on organizational needs.
          </p>
        </div>

        <p className="donation-policy-footer">
          By making a donation through this website, you acknowledge that you
          have read, understood, and agreed to this Donation Policy.
        </p>
      </div>
    </section>
  );
};

export default DonationPolicy;
