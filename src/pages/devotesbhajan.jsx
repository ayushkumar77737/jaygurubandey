import React, { useState } from "react";
import "./devotesbhajan.css";

const bhajanData = {
  "Ankit Ji": [
    {
      id: 1,
      title: "Ankit Ji Bhajan 1",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 2,
      title: "Ankit Ji Bhajan 2",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 3,
      title: "Ankit Ji Bhajan 3",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 4,
      title: "Ankit Ji Bhajan 4",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 5,
      title: "Ankit Ji Bhajan 5",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 6,
      title: "Ankit Ji Bhajan 6",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 7,
      title: "Ankit Ji Bhajan 7",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 8,
      title: "Ankit Ji Bhajan 8",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 9,
      title: "Ankit Ji Bhajan 9",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 10,
      title: "Ankit Ji Bhajan 10",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 11,
      title: "Ankit Ji Bhajan 11",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
  ],
  "Rohit Ji": [
    {
      id: 1,
      title: "Rohit Ji Bhajan 1",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 2,
      title: "Rohit Ji Bhajan 2",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 3,
      title: "Rohit Ji Bhajan 3",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 4,
      title: "Rohit Ji Bhajan 4",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
  ],
  "Pooja Ji": [
    {
      id: 1,
      title: "Pooja Ji Bhajan 1",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 2,
      title: "Pooja Ji Bhajan 2",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 3,
      title: "Pooja Ji Bhajan 3",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
    {
      id: 4,
      title: "Pooja Ji Bhajan 4",
      embedUrl: "https://www.youtube.com/embed/r0dnXD8iT9Q",
    },
  ],
};

const DevotesBhajan = () => {
  const [selectedSinger, setSelectedSinger] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 6;
  const videos = selectedSinger ? bhajanData[selectedSinger] : [];

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="devotes-bhajan">
      <h1 className="devotes-title">
        <span className="emoji">🙏</span>
        <span className="title-text">Guruji Devotees Bhajan Seva</span>
        <span className="emoji">🙏</span>
      </h1>


      {/* Dropdown */}
      <div className="devotes-dropdown">
        <select
          value={selectedSinger}
          onChange={(e) => {
            setSelectedSinger(e.target.value);
            setCurrentPage(1);
          }}
        >
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

      {/* Video Grid */}
      <div className="devotes-video-grid">
        {!selectedSinger && (
          <p className="devotes-hint">
            Please select a devotee to view bhajans 🙏
          </p>
        )}

        {currentVideos.map((video) => (
          <div key={video.id} className="devotes-video-card">
            <iframe
              src={video.embedUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {selectedSinger && totalPages > 1 && (
        <div className="devotes-pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ← Prev
          </button>

          <span className="devotes-page-circle">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default DevotesBhajan;