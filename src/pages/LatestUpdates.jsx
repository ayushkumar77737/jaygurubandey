import React, { useState, useEffect } from "react";
import "./LatestUpdates.css";
import guruji1 from "../assets/guruji.webp";
import photo16 from "../assets/photo16.jpg";
import photo19 from "../assets/photo19.jpg";

const updates = [
  {
    id: 1,
    title: "New Book Release",
    date: "25 Oct 2025",
    description: "Our latest book is out now! Grab your copy today.",
  },
  {
    id: 2,
    title: "Website Update",
    date: "20 Oct 2025",
    description: "New features added to the website for a smoother experience.",
  },
  {
    id: 3,
    title: "Event Announcement",
    date: "15 Oct 2025",
    description: "Join us for our upcoming event this month.",
  },
];

// 🔄 List of images to rotate
const updateImages = [guruji1, photo16, photo19];

const LatestUpdates = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % updateImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="latest-updates-page">
      <h1 className="page-title">Latest Updates</h1>
      <div className="updates-layout">
        <div className="updates-left">
          <img
            src={updateImages[currentImage]}
            alt="Updates Banner"
            className="fade-image"
          />
        </div>
        <div className="updates-right">
          {updates.map((update) => (
            <div className="update-item" key={update.id}>
              <h2>{update.title}</h2>
              <p className="update-date">{update.date}</p>
              <p>{update.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
