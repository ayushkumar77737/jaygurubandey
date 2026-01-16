import React, { useState, useEffect } from "react";
import "./SatguruArti.css";
import guruImage from "../assets/photo24.webp"; // replace with actual path

const SatguruArti = () => {
  const [page, setPage] = useState(1);

  // Scroll to top when component mounts or page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]); // dependency ensures scrolling happens on page change

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="arti-container">
      <h1 className="arti-title">🙏 Satguru Aarti 🙏</h1>

      <div className="arti-content">
        {/* Left: Image */}
        <div className="arti-image-box">
          <img src={guruImage} alt="Satguru" className="arti-image" />
        </div>

        {/* Right: Text */}
        <div className="arti-text-box">
          {page === 1 && (
            <p>
              <b>(1)</b> <br />
              Aarti daas sada karen Prabhu ji,Satguru dwar tumhare | <br />
              Bina thaal kapoor deep ke,gagan dekh ujiyare || <br /><br />
              Virah se vyakul jaay wahan par,premi prem sahare | <br />
              Shabd dhvani sune soorati sudha ras,tan-man sudhi bisaare || <br /><br />
              Kar se kripa karen Swami ji,mile priyatam pyare | <br />
              Nij sukh wahan mile charanamut,man maya sab haare || <br /><br />
              Naam desh jahan noor nirantar,aatho pahar nihaare | <br />
              Gyaan ki Ganga bhakti ka saagar,jaaye hans milore || <br /><br />
              Jai Gurubande param purush Prabhu,santan ko gahi taare | <br />
              Alakh Anami Agam Agochar,Jai Gurubande hamaare || <br />
            </p>
          )}

          {page === 2 && (
            <p>
              <b>(2)</b> <br />
              Aarti Satgurudev Prabhu ki, hoye barambar re manva Chal sache darbara | <br /><br />
              Kaal akaal se mukti mile, Jai Gurubande paar re manva... <br /><br />
              Brahma Vishnu Maheshwar, kar seva Kartaar re manva... <br /><br />
              Kotin suraj chandra jahan, bhoomi pahaad hajaar re manva... <br /><br />
              Noor desh jahan naam nirantar, bahta amrit dhaar re manva... <br /><br />
              Parbrahm jahan Manasarovar, hanson ka sansaar re manva... <br /><br />
              Bhavar gufa ki gupt gali mein, banshi ki jhankaar re manva... <br /><br />
              Satlok ke prem nagar mein, hanson ki sarkar re manva... <br /><br />
              Jai Gurubande Satguru Saheb, karte sabse pyaar re manva... <br />
            </p>
          )}

          {page === 3 && (
            <p>
              <b>(3)</b> <br />
              Akhand mandalakar jyoti, sam rahi Satlok | <br />
              Jeev dekhi Jai Gurubande, mite jagat ka shok ॥ <br /><br />
              Satguru bad Govind nahi nabh se pare kahaya | <br />
              Peechhe-peechhe Jai Gurubande, Hari milne ko bataya ॥ <br /><br />
              Sant samagam sabse achha mat bhatko manlaya | <br />
              Bhajate-bhajate Jai Gurubande, Hari darshan ko paaya ॥ <br />
            </p>
          )}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="arti-pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          ⬅️ Previous
        </button>
        <span>Page {page} of 3</span>
        <button onClick={handleNext} disabled={page === 3}>
          Next ➡️
        </button>
      </div>

      <div className="arti-footer">
        <p>🙏 Jai Gurubande Saheeb Sabka 🙏</p>
      </div>
    </div>
  );
};

export default SatguruArti;
