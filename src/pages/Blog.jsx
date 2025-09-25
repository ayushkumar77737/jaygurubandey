import React, { useState, useEffect } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [review, setReview] = useState({ name: "", message: "", rating: 0 });
  const [reviews, setReviews] = useState({});
  const [currentImages, setCurrentImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const posts = [
    { id: 1, images: [blog1a, blog1b], title: "Guru Purnima 2025", date: "6 July 2025", author: "Ashram Team", description: "A sacred gathering was held where devotees wholeheartedly expressed their gratitude to Guruji..." },
    { id: 2, images: [blog2a, blog2b, blog2c, blog2d], title: "Satsang At Ashram", date: "10 Aug 2025", author: "Ashram Team", description: "An immersive retreat was organized in the serene ashram environment..." },
    { id: 3, images: [blog3a, blog3b, blog3c], title: "Bhajan", date: "26 Jan 2025", author: "Devotees", description: "This was a soulful evening of bhajan and satsang where family, friends, and neighbors..." },
    { id: 4, images: [blog1a, blog1b], title: "Seva and Service", date: "15 Feb 2025", author: "Ashram Volunteers", description: "Devotees engaged in seva activities including cleanliness drives, food distribution..." },
    { id: 5, images: [blog2a, blog2b, blog2c, blog2d], title: "Meditation Retreat", date: "20 Mar 2025", author: "Ashram Team", description: "A three-day meditation retreat was held to help seekers dive deep into silence..." },
    { id: 6, images: [blog3a, blog3b, blog3c], title: "Festival of Lights", date: "12 Nov 2025", author: "Community", description: "The ashram was decorated beautifully with diyas and flowers as devotees gathered..." },
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!review.name || !review.message || review.rating === 0) return;

    setReviews((prev) => ({
      ...prev,
      [selectedPost.id]: [...(prev[selectedPost.id] || []), { ...review }],
    }));

    setReview({ name: "", message: "", rating: 0 });
    setIsModalOpen(false);
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>★</span>
    ));

  return (
    <div className="blog-container">
      <h2 className="blog-title">🌸 The Spiritual Voyage 🌸</h2>
      <p className="blog-subtitle">
        Teachings, events, and experiences from the spiritual journey.
      </p>

      <div className="blog-grid">
        {currentPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img
              src={post.images[currentImages[post.id] || 0]}
              alt={post.title}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="blog-meta">📅 {post.date} | 👤 {post.author}</p>
              <p className="blog-desc">{post.description}</p>

              {reviews[post.id] && reviews[post.id].length > 0 && (
                <div className="review-list">
                  <h4>Devotees' Reviews:</h4>
                  {reviews[post.id].map((r, index) => (
                    <div key={index} className="review-item">
                      <strong>{r.name}</strong> {renderStars(r.rating)}
                      <p>{r.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Previous / Next Pagination */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>⬅ Previous</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next ➡</button>
      </div>

      {/* Modal for review */}
      {isModalOpen && selectedPost && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Share Your Review for "{selectedPost.title}"</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={review.name}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your review..."
                value={review.message}
                onChange={handleChange}
                required
              />
              <div style={{ marginBottom: "10px" }}>
                <strong>Rating: </strong>
                {[1,2,3,4,5].map((i) => (
                  <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                      color: i <= review.rating ? "#FFD700" : "#ccc",
                      marginRight: "5px",
                    }}
                  >★</span>
                ))}
              </div>
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
