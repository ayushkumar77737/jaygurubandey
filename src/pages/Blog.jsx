import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";   // ✅ Import Link
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
  const [currentImages, setCurrentImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    { id: 1, images: [blog1a, blog1b], title: "Guru Purnima 2025", date: "6 July 2025", author: "Ashram Team", description: "A sacred gathering was held where devotees wholeheartedly expressed their gratitude to Guruji for guiding them on their spiritual journey with wisdom, compassion, and blessings..." },
    { id: 2, images: [blog2a, blog2b, blog2c, blog2d], title: "Satsang At Ashram", date: "10 Aug 2025", author: "Ashram Team", description: "An immersive retreat was organized in the serene ashram environment, filled with devotional songs, meditation, and deep spiritual discourses that inspired seekers to walk the path with clarity..." },
    { id: 3, images: [blog3a, blog3b, blog3c], title: "Bhajan", date: "26 Jan 2025", author: "Devotees", description: "This was a soulful evening of bhajan and satsang where family, friends, and neighbors gathered to chant together, filling the atmosphere with divine vibrations and collective energy of devotion..." },
    { id: 4, images: [blog1a, blog1b], title: "Seva and Service", date: "15 Feb 2025", author: "Ashram Volunteers", description: "Devotees engaged in seva activities including cleanliness drives, food distribution, and helping the needy, reminding everyone that service to mankind is true service to the Divine..." },
    { id: 5, images: [blog2a, blog2b, blog2c, blog2d], title: "Meditation Retreat", date: "20 Mar 2025", author: "Ashram Team", description: "A three-day meditation retreat was held to help seekers dive deep into silence, rejuvenate the mind, and experience inner peace while being in the serene presence of Guruji..." },
    { id: 6, images: [blog3a, blog3b, blog3c], title: "Festival of Lights", date: "12 Nov 2025", author: "Community", description: "The ashram was decorated beautifully with diyas and flowers as devotees gathered for prayers, bhajans, and celebrations, creating an atmosphere of joy, love, and spiritual bliss..." },
  ];

  // Slideshow effect
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

  // Pagination logic
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
              
              <p className="blog-desc">
                {post.description.slice(0, 100)}...
              </p>
              
              <Link to={`/blog/${post.id}`} className="read-more-btn">
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
    </div>
  );
};

export default Blog;
