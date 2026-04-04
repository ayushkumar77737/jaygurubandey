import React, { useState, useEffect } from "react";
import "./SatguruArti.css";
import guruImage from "../assets/photo24.webp";

const SatguruArti = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="sa__page">
      {/* Decorative background */}
      <div className="sa__orb sa__orb--1" />
      <div className="sa__orb sa__orb--2" />
      <div className="sa__orb sa__orb--3" />

      {/* Header */}
      <div className="sa__header">
        <div className="sa__header-flame">🪔</div>
        <h1 className="sa__title">Satguru Aarti</h1>
        <div className="sa__title-rule" />
        <p className="sa__header-tag">An Offering of Light &amp; Devotion</p>
      </div>

      {/* Content */}
      <div className="sa__content">

        {/* Left: Image */}
        <div className="sa__image-box">
          <div className="sa__image-halo" />
          <img src={guruImage} alt="Satguru" className="sa__image" />
          <span className="sa__image-label">🙏 Satguru Darshan</span>
        </div>

        {/* Right: Text */}
        <div className="sa__text-box">
          <div className="sa__pg-pill">Aarti {page} of 3</div>

          {page === 1 && (
            <div className="sa__verse" key="arti-1">
              <p className="sa__verse-num">|| Aarti 1 ||</p>
              <p className="sa__verse-lines">
                Aarti daas sada karen Prabhu ji, Satguru dwar tumhare |<br />
                Bina thaal kapoor deep ke, gagan dekh ujiyare ||<br /><br />
                Virah se vyakul jaay wahan par, premi prem sahare |<br />
                Shabd dhvani sune soorati sudha ras, tan-man sudhi bisaare ||<br /><br />
                Kar se kripa karen Swami ji, mile priyatam pyare |<br />
                Nij sukh wahan mile charanamut, man maya sab haare ||<br /><br />
                Naam desh jahan noor nirantar, aatho pahar nihaare |<br />
                Gyaan ki Ganga bhakti ka saagar, jaaye hans milore ||<br /><br />
                Jai Gurubande param purush Prabhu, santan ko gahi taare |<br />
                Alakh Anami Agam Agochar, Jai Gurubande hamaare ||
              </p>
            </div>
          )}

          {page === 2 && (
            <div className="sa__verse" key="arti-2">
              <p className="sa__verse-num">|| Aarti 2 ||</p>
              <p className="sa__verse-lines">
                Aarti Satgurudev Prabhu ki, hoye barambar re manva Chal sache darbara |<br /><br />
                Kaal akaal se mukti mile, Jai Gurubande paar re manva...<br /><br />
                Brahma Vishnu Maheshwar, kar seva Kartaar re manva...<br /><br />
                Kotin suraj chandra jahan, bhoomi pahaad hajaar re manva...<br /><br />
                Noor desh jahan naam nirantar, bahta amrit dhaar re manva...<br /><br />
                Parbrahm jahan Manasarovar, hanson ka sansaar re manva...<br /><br />
                Bhavar gufa ki gupt gali mein, banshi ki jhankaar re manva...<br /><br />
                Satlok ke prem nagar mein, hanson ki sarkar re manva...<br /><br />
                Jai Gurubande Satguru Saheb, karte sabse pyaar re manva...
              </p>
            </div>
          )}

          {page === 3 && (
            <div className="sa__verse" key="arti-3">
              <p className="sa__verse-num">|| Aarti 3 ||</p>
              <p className="sa__verse-lines">
                Akhand mandalakar jyoti, sam rahi Satlok |<br />
                Jeev dekhi Jai Gurubande, mite jagat ka shok ॥<br /><br />
                Satguru bad Govind nahi nabh se pare kahaya |<br />
                Peechhe-peechhe Jai Gurubande, Hari milne ko bataya ॥<br /><br />
                Sant samagam sabse achha mat bhatko manlaya |<br />
                Bhajate-bhajate Jai Gurubande, Hari darshan ko paaya ॥
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="sa__pagination">
        <button className="sa__pg-btn" onClick={handlePrev} disabled={page === 1}>
          ← Previous
        </button>

        <div className="sa__pg-dots">
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`sa__pg-dot ${page === n ? "sa__pg-dot--active" : ""}`}
              onClick={() => setPage(n)}
              aria-label={`Go to Aarti ${n}`}
            />
          ))}
        </div>

        <button className="sa__pg-btn" onClick={handleNext} disabled={page === 3}>
          Next →
        </button>
      </div>

      {/* Footer */}
      <div className="sa__footer">
        <div className="sa__footer-rule" />
        <p className="sa__footer-text">🙏 Jai Gurubande Saheb Sabka 🙏</p>
      </div>
    </div>
  );
};

export default SatguruArti;