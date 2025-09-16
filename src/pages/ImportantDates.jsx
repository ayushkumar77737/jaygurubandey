import React from "react";
import "./ImportantDates.css";
import satsangImg from "../assets/photo24.jpg"; // ✅ Replace with your image

const ImportantDates = () => {
  return (
    <div className="important-dates-container">
      {/* Heading at top */}
      <div className="content-section top">
        <h2>Important Dates</h2>
      </div>

      {/* Photo in the middle */}
      <div className="image-section">
        <img src={satsangImg} alt="Important Event" />
      </div>

      {/* Dates after photo */}
      <div className="content-section bottom">
        <div className="dates-box">
          <p>
            🔔 <strong>Chitauna Dham, Varanasi (Headquarters)</strong> – Every month on <strong>1, 2, 15, 16, 25 and 26</strong><br />
            📞 Contact: 7080224214, 7080224215, 7080224216
          </p>

          <p>
            📅 <strong>Jai Gurubande Jan Kalyan Ashram (Ballia)</strong> – Every month on <strong>5</strong><br />
            📞 Contact: 8858437503, 6388001542
          </p>

          <p>
            📅 <strong>Nagawa Ashram (Ghazipur)</strong> – Every month on <strong>4 and 19</strong><br />
            📞 Contact: 7080224203
          </p>

          <p>
            📅 <strong>Mirzapur Ashram</strong> – Every month on <strong>3</strong><br />
            📞 Contact: 7651881816
          </p>

          <p>
            📅 <strong>Shivramapur (At the residence of Shri Girja Prasad Yadav Ji)</strong> – Every month on <strong>27</strong><br />
            📞 Contact: 8738868292
          </p>

          <p>
            📅 <strong>Sidhagar Ghat Ashram (Ghazipur)</strong> – Every month on <strong>23</strong><br />
            📞 Contact: 8808305735, 9793900455
          </p>

          <p>
            📅 <strong>Gorakhpur Ashram</strong> – Every month on <strong>21 and 22</strong><br />
            📞 Contact: 9935908011
          </p>

          <p>
            📅 <strong>Jai Gurubande Ashram, Nagle (Mumbai)</strong> – Every month from <strong>6 to 10</strong><br />
            📞 Contact: 9819560938
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
