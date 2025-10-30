import React from "react";
import "./Spotlight.css";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "The Times – Spreading Light Through Peace",
    date: "July 2025",
    description:
      "A featured article in The Times highlighting our mission of compassion and unity across the world.",
    image: "https://via.placeholder.com/400x250", // replace with real image
    link: "#",
  },
  {
    id: 2,
    title: "The Daily Herald – Journey of Spiritual Awakening",
    date: "June 2025",
    description:
      "An inspiring article showcasing the global reach of our peace and mindfulness programs.",
    image: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const interviews = [
  {
    id: 1,
    title: "Podcast – The Inner Path to Peace",
    date: "March 2025",
    description:
      "A deep and reflective conversation on mindfulness and how spiritual awakening transforms daily life.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // sample video
    link: "#",
  },
  {
    id: 2,
    title: "Global Talk – Finding Balance in Modern Times",
    date: "April 2025",
    description:
      "An enlightening interview with Guruji about maintaining peace and balance amidst daily challenges.",
    video: "https://www.w3schools.com/html/movie.mp4", // sample video
    link: "#",
  },
];

const Spotlight = () => {
  const navigate = useNavigate();

  return (
    <div className="spotlight-page">
      <h1 className="spotlight-title">🌟 Media Spotlight</h1>
      <p className="spotlight-description">
        Explore our most impactful articles and interviews that share our message
        of peace, spirituality, and compassion with the world.
      </p>

      {/* ===== Articles Section ===== */}
      <section className="spotlight-section">
        <h2 className="section-title">📰 Articles</h2>
        <div className="spotlight-grid">
          {articles.map((item) => (
            <div key={item.id} className="spotlight-card">
              <img
                src={item.image}
                alt={item.title}
                className="spotlight-image"
              />
              <div className="spotlight-content">
                <h3 className="spotlight-heading">{item.title}</h3>
                <p className="spotlight-date">{item.date}</p>
                <p className="spotlight-text">{item.description}</p>
                <a
                  href={item.link}
                  className="spotlight-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Interviews Section ===== */}
      <section className="spotlight-section">
        <h2 className="section-title">🎙️ Interviews</h2>
        <div className="spotlight-grid">
          {interviews.map((item) => (
            <div key={item.id} className="spotlight-card">
              <video
                controls
                className="spotlight-video"
                poster="https://via.placeholder.com/400x250"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="spotlight-content">
                <h3 className="spotlight-heading">{item.title}</h3>
                <p className="spotlight-date">{item.date}</p>
                <p className="spotlight-text">{item.description}</p>
                <a
                  href={item.link}
                  className="spotlight-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch / Listen →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Spotlight;
