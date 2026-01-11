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
            <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
              <b>(1)</b> <br />
              Pooja Satguru Charan Ka, Karen Nat Jo Dhyanan | <br />
              Tare Kripa Se, Jai Guru Bande, Sahaj Usi Ka Paran | <br />
              Shraddha Bhakt Bada Re Manav, Man Karo Majbootan | <br />
              Jai Guru Bande Satguru Ko, Ishwar Jano Dootan | <br /><br />

              Satguru Ram Ratan Run Kani, Daata Deen Daal Udani | <br />
              Saheb Satguru Jeev Ubaraata, Aaye Jagat Me Bhay Bhakataan | <br />
              Satguru Bhakt Bane Jo Koi, Baal Nawa Ka Uska Hoi | <br />
              Rakhe Jo Satguru Ko Aage, Bhoot Bhav Sab Dekhat Bhaage | <br /><br />

              Jeh Ghar Satguru Karen Nivasa, Det Prem Atal Vishwasa | <br />
              Satguru Naam Athaah Tasha, Kare Hriday Mein Param Prakasha | <br />
              Satguru Bachan Hid Jo Rakha, Man Me Dhar Me Amrit Chakha | <br />
              Rakhe Ek Jo Satguru Aasa, Amar Lok Ghar Bhavi Vaasa | <br />
            </p>
          )}

          {page === 2 && (
            <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
              <b>(2)</b> <br />
              Satguru Vaid Hai Bachan Dawaai, Saara Manas Rog Hataai | <br />
              Satguru Mahima Jaye Na Barni, Jeevan Ko Taare Mangal Karni | <br />
              Satsang Teer Jo Maarat Gota, Man Me Lachat Chadar Rota | <br />
              Satguru Ek Hai Samarth Swami, Bhedi Ghat Ka Ant Aatmaami | <br /><br />

              Suru, Naru, Manu Sansar Mein Koi, Bin Satguru Bhav Paar Na Hoi | <br />
              Jo Satguru Pad Dhyan Lagai, Ghat Mein Aatma Jaan Samai | <br />
              Bin Satguru Ka Jeevan Garua Bhaari, Mile Jo Manav Saguara | <br />
              Satguru Sharir Charan Jo Paaya, Param Anand Hriday Mein Aaya | <br /><br />

              Satguru Kripa Hota Hai Jahan Par, Ram Kripa Karte Hai Tahan Par | <br />
              Satguru Ne Sab Dev Samaaya, Khol Bhkuti Dwaar Jalaya | <br />
              Satguru Naam Se Rati Maaya, Samumrat Daas Param Sukh Paaya | <br />
              Jo Satguru Ko Eesh Banaaya, Kaal Nahin Achar Kar Jaaya | <br />
            </p>
          )}

          {page === 3 && (
            <p style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>
              <b>(3)</b> <br />
              Sakal Jeev Eeshwar Ka Ansha, Satguru Sangat Kare Sab Asha | <br />
              Ansh Deh Mein Rahte Bandi, Hansan Karat Bhajan Aanandan | <br />
              Jo Satguru Ka Kane Bhakt, So Paave Sneh Ki Shakti Detan | <br />
              Satguru Prem Ka Paani, Nikal Mukh Se Murur Hi Vaarin | <br /><br />

              Guru Satguru Ka Babal Lagaave, Ghat Ka Bhed Vahi Sab Paave | <br />
              Satguru Saar Shabad Ke Daani, Mukti Moksh Barse Sab Faani | <br /><br />

              Satguru Shabad Akhand Apaara, Saakha Sab Daal Ek Sahara | <br />
              Deen Daal Se Bheetar Parkha, Kasar Hua Shwas Ka Charkha | <br />
              Amar Lok Satguru Ka Aasan, Baithe Vahin Laga Simhaasan | <br />
              Roop Dekhi Anant Sundar Dekha, Daas Adhyayan Samundran | <br /><br />

              Hriday Sheesh Bana Jo Daani, Mahima Satguru Sab Ka Jaani | <br />
              Aagam Alag Se Paar Ram, Dekhat Sant Hai Naam Naman | <br />
              Jo Satguru Ko Nishchid Dhaave, Naam Amar Jag Mein Ho Jaave | <br />
              Jo Satguru Ka Padhe Chalisa, Jai Guru Bande Det Hai Aseesa | <br /><br />

              Jai Guru Bande Det Hai Aseesa, Jo Satguru Ka Padha Chalisa | <br />
              Ghat Mein Prem Ka Paath Khole, Kripa Se Jai Guru Bande Jod Chetan Ka Gharan | <br />
            </p>
          )}
        </div>
      </div>

      {/* Pagination */}
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

export default SatguruChalisa;
