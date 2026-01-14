import React, { useState, useEffect } from "react";
import "./SatguruChalisa.css";
import guruImage from "../assets/photo24.webp"; // replace with your actual image

const SatguruChalisa = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleNext = () => setPage((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="arti-container">
      <h1 className="arti-title">🙏 Satguru Chalisa 🙏</h1>

      <div className="arti-content">
        {/* Left: Image */}
        <div className="arti-image-box">
          <img src={guruImage} alt="Satguru" className="arti-image" />
        </div>

        {/* Right: Text */}
        <div className="arti-text-box">
          {page === 1 && (
            <p className="arti-text">
              <b>Doha</b> <br />
              Poojaa Satguru charan kaa, kare nitya jo dhyaan | <br />
              Tere kripaa se jai Gurubande, sahaj usii kaa praan || <br /><br />

              <b>Chalisa</b> <br />
              Jai jai jai Satguru jii devaa, karen jo maanav bhakti sevaa | <br />
              Sukh shaanti ghar satsaraṇ aave, janam maran bhav rog nasaave || <br />
              Mile bhaagya se Satguru daataa, raakhe jiiv se bhakti naataa | <br />
              Satguru naam jo bhitar gaave, adbhut tirath kaa phal paave || <br /><br />

              Satguru dukh hare sukhdaai, janam janam kaa paap nasaai | <br />
              Satguru saran jiivan jo aave, Prabhu kaa pyaaraa so ban jaave || <br />
              Satguru Raam ratan dhan khaani, daataa diin dayaalu daanii | <br />
              Saahib Satguru jiiv vidhaataa, aaye jagat bhaye vikhyaataa ||
            </p>
          )}

          {page === 2 && (
            <p className="arti-text">
              Satguru bhagat bane jo koi, baal na baankaa uskaa hoi | <br />
              Raakhe jo Satguru ko aage, bhoot bhram sab dekhat bhaage || <br />
              Jehi ghar Satguru kare nivaasaa, dete prem atal vishwaasaa | <br />
              Satguru naam akhand akaashaa, kare hriday mein param prakaashaa || <br /><br />

              Raakhe ek jo Satguru aashaa, amarlok ghar paave vaasaa | <br />
              Satguru vaidya hai vachan davaai, saaraa maanas rog hataai || <br />
              Satguru mahimaa jaay na varni, jiiv ko taare mangal karni | <br />
              Satsang tirath jo maarat gotaa, man mailaa chit chaadar dhotaa || <br />
              Satguru ek hai samarth swaami, bhedi ghat kaa antaryaami || <br /><br />

              Sur nar muni sansaar mein koi, bin Satguru bhav paar na hoi | <br />
              Jo Satguru pad dhyaan lagaai, ghat mein aatam gyaan samaai || <br />
              Bin Satguru kaa jiiv hai nirguraa, Hari mile jo maanav saguraa ||
            </p>
          )}
        </div>

      </div>

      {/* Pagination */}
      <div className="arti-pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          ⬅️ Previous
        </button>
        <span>Page {page} of 2</span>
        <button onClick={handleNext} disabled={page === 2}>
          Next ➡️
        </button>
      </div>

      <div className="arti-footer">
        <p>🙏 Jai Gurubande Saheeb Sabka 🙏</p>
      </div>
    </div>
  );
};

export default SatguruChalisa;
