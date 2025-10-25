import React from "react";
import "./LatestUpdates.css";
import updatesImage from "../assets/guruji.jpg"; // Left-side image

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

const LatestUpdates = () => {
  return (
    <div className="latest-updates-page">
      <h1 className="page-title">Latest Updates</h1>
      <div className="updates-layout">
        <div className="updates-left">
          <img src={updatesImage} alt="Updates Banner" />
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
