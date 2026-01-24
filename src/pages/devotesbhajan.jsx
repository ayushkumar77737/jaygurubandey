import React, { useState } from "react";
import "./devotesbhajan.css";

const bhajanData = {
  "Ankit Ji": [
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
  ],
  "Rohit Ji": [
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
  ],
  "Pooja Ji": [
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
    "https://www.youtube.com/embed/r0dnXD8iT9Q",
  ],
};

const DevotesBhajan = () => {
  const [selectedSinger, setSelectedSinger] = useState("");

  return (
    <div className="devotes-bhajan">
      <h1 className="devotes-bhajan__title">
        🙏 Guruji Devotees Bhajan Seva 🙏
      </h1>

      <div className="devotes-bhajan__dropdown">
        <select
          value={selectedSinger}
          onChange={(e) => setSelectedSinger(e.target.value)}
        >
          {/* ✅ FIXED PLACEHOLDER */}
          <option value="" disabled hidden>
            -- Select Devotee Singer --
          </option>

          {Object.keys(bhajanData).map((singer) => (
            <option key={singer} value={singer}>
              {singer}
            </option>
          ))}
        </select>
      </div>

      <div className="devotes-bhajan__videos">
        {!selectedSinger && (
          <p className="devotes-bhajan__hint">
            Please select a singer to view bhajans 🙏
          </p>
        )}

        {selectedSinger &&
          bhajanData[selectedSinger].map((video, index) => (
            <div className="devotes-bhajan__card" key={index}>
              <iframe
                src={video}
                title={`Guruji Bhajan ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DevotesBhajan;