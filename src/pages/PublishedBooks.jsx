import React, { useEffect } from "react";
import "./PublishedBooks.css";
import book1 from "../assets/guruji.jpg"; // replace with your actual book images
import book2 from "../assets/guruji.jpg";
import book3 from "../assets/guruji.jpg";

const PublishedBooks = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const books = [
    {
      id: 1,
      title: "Guru Kripa – The Divine Grace",
      description:
        "A soul-enriching book exploring the teachings and blessings of our beloved Satguru.",
      image: book1,
      link: "#", // optional: add buy or read link
    },
    {
      id: 2,
      title: "Path of Devotion",
      description:
        "An inspiring journey through bhakti, faith, and surrender towards spiritual awakening.",
      image: book2,
      link: "#",
    },
    {
      id: 3,
      title: "Inner Light of the Soul",
      description:
        "A profound collection of reflections and wisdom from the Guru’s discourses.",
      image: book3,
      link: "#",
    },
  ];

  return (
    <div className="books-page">
      <h1 className="books-title">📚 Published Books</h1>
      <p className="books-subtitle">
        Discover the sacred writings and divine messages shared through these published works.
      </p>

      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-image-wrapper">
              <img src={book.image} alt={book.title} className="book-image" />
            </div>
            <h3 className="book-title">{book.title}</h3>
            <p className="book-description">{book.description}</p>
            {book.link && (
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="book-link"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishedBooks;
