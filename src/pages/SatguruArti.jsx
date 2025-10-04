import React, { useState, useEffect } from "react";
import "./SatguruArti.css";
import guruImage from "../assets/photo24.jpg"; // replace with actual path

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
              Aarti daas sada karein Prabhu ji, Satguru daar tumharo, <br />
              Bina thaal kapoor deep ke, gagan dekh ujiyaaro. ॥ <br /><br />
              Virah se vyakulat jaay wahan par, premee prem sahaari, <br />
              Shabd dhvani suneen surati sudha ras, man-man sudhi bisaree. ॥ <br /><br />
              Kar se kripaa karo Swami ji, mile premtam pyaare, <br />
              Nij sukh pag tale charanaagat, man maaya sab haare. ॥ <br /><br />
              Naam desh jahaan toor nirantar, aatho pahar nihaaro, <br />
              Gyaan kee Ganga bhakti ka saagar, jaaye hans milaaree. ॥ <br /><br />
              Jai Gurubande Param Purush Prabhu, santan ko gahi toro, <br />
              Alakh anaamee agam agochar, Jai Gurubande hamaare. ॥ <br />
            </p>
          )}

          {page === 2 && (
            <p>
              <b>(2)</b> <br />
              Aarti Satgurudev Prabhu kee, hoye baarambaar re manvaa — chal saache darbaara. ॥ <br /><br />
              Kaal akaal se mukti mile, Jai Gurubande paar re manvaa... ॥ <br /><br />
              Brahma Vishnu Maheshvar, kar seva karta re manvaa... ॥ <br /><br />
              Koti-koti sooraj chandra jahaan, bhoomi pahaad hazaar re manvaa... ॥ <br /><br />
              Noor desh jahaan naam nirantar, bahata amrit dhaar re manvaa... ॥ <br /><br />
              Paarbrahm jahaan Manasarovar, hanson kaa sansaar re manvaa... ॥ <br /><br />
              Bhavar gupha kee gupt gali mein, banshee kee jhankaar re manvaa... ॥ <br /><br />
              Satlok ke prem nagar mein, hanson kaa sanskaar re manvaa... ॥ <br /><br />
              Jai Gurubande Satguru Saahib, karte sabse pyaar re manvaa... ॥ <br />
            </p>
          )}

          {page === 3 && (
            <p>
              <b>(3)</b> <br />
              Akhand mandalakar jyoti, sam rahi Satlok, <br />
              Jeev dekhi Jai Gurubande, mile jagat ka shok. ॥ <br /><br />
              Satguru bad Govind nahi, nam liye or kahaya, <br />
              Peedhi-peedhi Jai Gurubande, bir milne ki bataya. ॥ <br /><br />
              Sant samaanan sabse uttam, mann bhakton mann laya, <br />
              Bhajon-bhajon Jai Gurubande, Hari darshan ka paaya. ॥ <br />
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
        <p>🙏 Jai Guru Bandey Saheeb Sabka 🙏</p>
      </div>
    </div>
  );
};

export default SatguruArti;
