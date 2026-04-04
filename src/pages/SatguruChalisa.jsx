import React, { useState, useEffect } from "react";
import "./SatguruChalisa.css";
import guruImage from "../assets/photo24.webp";

const SatguruChalisa = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 2));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="sc__page">
      {/* Decorative background elements */}
      <div className="sc__bg-orb sc__bg-orb--1" />
      <div className="sc__bg-orb sc__bg-orb--2" />
      <div className="sc__bg-orb sc__bg-orb--3" />

      {/* Header */}
      <div className="sc__header">
        <div className="sc__header-deco">🙏</div>
        <h1 className="sc__title">Satguru Chalisa</h1>
        <div className="sc__title-underline" />
        <p className="sc__header-tag">Divine Words of the Master</p>
      </div>

      {/* Main Content */}
      <div className="sc__content">

        {/* Left: Image */}
        <div className="sc__image-box">
          <div className="sc__image-ring" />
          <img src={guruImage} alt="Satguru" className="sc__image" />
          <div className="sc__image-caption">🪔 Satguru Darshan</div>
        </div>

        {/* Right: Text */}
        <div className="sc__text-box">
          <div className="sc__page-badge">Page {page} of 2</div>

          {page === 1 && (
            <div className="sc__verse" key="page-1">
              <p className="sc__verse-heading">Doha</p>
              <p className="sc__verse-lines">
                Poojaa Satguru charan kaa, kare nitya jo dhyaan |{" "}<br />
                Tere kripaa se jai Gurubande, sahaj usii kaa praan ||
              </p>

              <div className="sc__verse-divider" />

              <p className="sc__verse-heading">Chalisa</p>
              <p className="sc__verse-lines">
                Jai jai jai Satguru jii devaa, karen jo maanav bhakti sevaa |{" "}<br />
                Sukh shaanti ghar satsaran aave, janam maran bhav rog nasaave ||{" "}<br />
                Mile bhaagya se Satguru daataa, raakhe jiiv se bhakti naataa |{" "}<br />
                Satguru naam jo bhitar gaave, adbhut tirath kaa phal paave ||
              </p>

              <div className="sc__verse-divider" />

              <p className="sc__verse-lines">
                Satguru dras rahe sukhdaai, janam janam kaa paap nasaai |{" "}<br />
                Satguru saran jiivan jo aave, Prabhu kaa pyaaraa so ban jaave ||{" "}<br />
                Satguru Raam ratan dhan khaani, daataa diin dayaalu daanii |{" "}<br />
                Saahib Satguru jiiv vidhaataa, aaye jagat bhaye vikhyaataa |
              </p>
            </div>
          )}

          {page === 2 && (
            <div className="sc__verse" key="page-2">
              <p className="sc__verse-lines">
                Satguru bhagat bane jo koi, baal na baankaa uskaa hoi |{" "}<br />
                Raakhe jo Satguru ko aage, bhoot bhram sab dekhat bhaage ||{" "}<br />
                Jehi ghar Satguru kare nivaasaa, dete prem atal vishwaasaa |{" "}<br />
                Satguru naam akhand akaashaa, kare hriday mein param prakaashaa ||
              </p>

              <div className="sc__verse-divider" />

              <p className="sc__verse-lines">
                Satguru vachan hriday jo raakhaa, man mandir mein amrit chaakhaa |{" "}<br />
                Raakhe ek jo Satguru aashaa, amarlok ghar paave vaasaa ||{" "}<br />
                Satguru vaidya hai vachan davaai, saaraa maanas rog hataai |{" "}<br />
                Satguru mahimaa jaay na varni, jiiv ko taare mangal karni ||
              </p>

              <div className="sc__verse-divider" />

              <p className="sc__verse-lines">
                Satsang tirath jo maarat gotaa, man mailaa chit chaadar dhotaa |{" "}<br />
                Satguru ek hai samarth swaami, bhedi ghat kaa antaryaami ||{" "}<br />
                Sur nagar muni sansaar mein koi, bin Satguru bhav paar na hoi |{" "}<br />
                Jo Satguru pad dhyaan lagaai, ghat mein aatam gyaan samaai ||
              </p>

              <div className="sc__verse-divider" />

              <p className="sc__verse-lines">
                Bin Satguru kaa jiiv hai nirguraa, Hari mile jo maanav saguraa |
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="sc__pagination">
        <button className="sc__pg-btn" onClick={handlePrev} disabled={page === 1}>
          ← Previous
        </button>
        <div className="sc__pg-track">
          <span className={`sc__pg-dot ${page === 1 ? "sc__pg-dot--active" : ""}`} />
          <span className={`sc__pg-dot ${page === 2 ? "sc__pg-dot--active" : ""}`} />
        </div>
        <button className="sc__pg-btn" onClick={handleNext} disabled={page === 2}>
          Next →
        </button>
      </div>

      {/* Footer */}
      <div className="sc__footer">
        <div className="sc__footer-rule" />
        <p className="sc__footer-text">🙏 Jai Gurubande Saheb Sabka 🙏</p>
      </div>
    </div>
  );
};

export default SatguruChalisa;