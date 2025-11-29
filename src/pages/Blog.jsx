import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Blog.css";
import blog1a from "../assets/photo4.jpg";
import blog1b from "../assets/photo25.jpg";
import blog2a from "../assets/photo3.jpg";
import blog2b from "../assets/photo27.jpg";
import blog2c from "../assets/photo28.jpg";
import blog2d from "../assets/photo29.jpg";
import blog3a from "../assets/photo5.jpg";
import blog3b from "../assets/photo26.jpg";
import blog3c from "../assets/photo30.jpg";

const Blog = () => {
  const location = useLocation();
  const savedPage = location.state?.currentPage || 1;
  const [currentPage, setCurrentPage] = useState(savedPage);
  const [currentImages, setCurrentImages] = useState({});

  const posts = [
    {
      id: 1,
      images: [blog1a, blog1b],
      title: "Guru Purnima 2025",
      date: "6 July 2025",
      author: "Ashram Team",
      description: [
        "A sacred gathering was held where devotees wholeheartedly expressed their gratitude to Guruji for guiding them on their spiritual journey with wisdom, compassion, and blessings.",
        "The event included devotional songs, meditation sessions, and heartfelt offerings, creating a divine atmosphere filled with love and unity."
      ]
    },
    {
      id: 2,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "Satsang At Ashram",
      date: "10 Aug 2025",
      author: "Ashram Team",
      description: [
        "An immersive retreat was organized in the serene ashram environment, filled with devotional songs, meditation, and discourses.",
        "The satsang inspired seekers to walk the path with clarity and remain grounded in faith and devotion."
      ]
    },
    {
      id: 3,
      images: [blog3a, blog3b, blog3c],
      title: "Bhajan",
      date: "26 Jan 2025",
      author: "Devotees",
      description: [
        "This was a soulful evening of bhajan and satsang where family, friends, and neighbors gathered to chant together, filling the atmosphere with divine vibrations.",
        "The chanting created collective energy that uplifted every participant, bringing deep inner peace."
      ]
    },
    {
      id: 4,
      images: [blog1a, blog1b],
      title: "Seva and Service",
      date: "15 Feb 2025",
      author: "Ashram Volunteers",
      description: [
        "Devotees engaged in seva activities including cleanliness drives, food distribution, and helping the needy.",
        "These actions reminded everyone that service to mankind is true service to the Divine."
      ]
    },
    {
      id: 5,
      images: [blog2a, blog2b, blog2c, blog2d],
      title: "Meditation Retreat",
      date: "20 Mar 2025",
      author: "Ashram Team",
      description: [
        "A three-day meditation retreat was held to help seekers dive deep into silence and rejuvenate the mind.",
        "Participants experienced inner peace while being in the serene presence of Guruji."
      ]
    },
    {
      id: 6,
      images: [blog3a, blog3b, blog3c],
      title: "Festival of Lights",
      date: "12 Nov 2025",
      author: "Community",
      description: [
        "The ashram was decorated beautifully with diyas and flowers as devotees gathered for prayers, bhajans, and celebrations.",
        "The evening was filled with joy, love, and spiritual bliss."
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const updated = { ...prev };
        posts.forEach((post) => {
          updated[post.id] = ((prev[post.id] || 0) + 1) % post.images.length;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [posts]);

  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-container">
      <h2 className="blog-title">🌸 The Spiritual Voyage 🌸</h2>
      <p className="blog-subtitle">
        Teachings, events, and experiences from the spiritual journey.
      </p>

      <div className="blog-grid">
        {currentPosts.map(post => (
          <div key={post.id} className="blog-card">
            <img
              src={post.images[currentImages[post.id] || 0]}
              alt={post.title}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>

              {/* ✅ Only first paragraph preview */}
              <p className="blog-desc">
                {post.description[0].slice(0, 100)}...
              </p>

              <Link
                to={`/blog/${post.id}`}
                state={{ currentPage }}
                className="read-more-btn"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ Previous</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next ➡</button>
      </div>
      <div className="blog-bottom-buttons">
        <Link to="/explore" className="blog-pill-btn">
          🔍 Explore Ashram
        </Link>

        <Link to="/testimonies" className="blog-pill-btn">
          🔱 Testimonies
        </Link>
      </div>


    </div>
  );
};

export default Blog;
