import React, { useState, useEffect } from "react";
import "./PublishedBooks.css";
import book1 from "../assets/guruji.jpg";
import book2 from "../assets/guruji.jpg";
import book3 from "../assets/guruji.jpg";

const PublishedBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const books = [
    {
      id: 1,
      title: "Guru Kripa – The Divine Grace",
      author: "Param Pujya Satguru Ji",
      publisher: "Divine Publications",
      pages: 120,
      year: 2021,
      image: book1,
      link: "https://drive.google.com/file/d/1EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 2,
      title: "Path of Devotion",
      author: "Param Pujya Satguru Ji",
      publisher: "Eklavya Foundation",
      pages: 95,
      year: 2020,
      image: book2,
      link: "https://drive.google.com/file/d/2EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 3,
      title: "Inner Light of the Soul",
      author: "Param Pujya Satguru Ji",
      publisher: "Spiritual Path Trust",
      pages: 140,
      year: 2019,
      image: book3,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 4,
      title: "Divine Pathway",
      author: "Param Pujya Satguru Ji",
      publisher: "Spiritual Wisdom Press",
      pages: 150,
      year: 2022,
      image: book1,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 5,
      title: "Journey Within",
      author: "Param Pujya Satguru Ji",
      publisher: "Eternal Light Publications",
      pages: 110,
      year: 2023,
      image: book2,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 6,
      title: "The Sacred Teachings",
      author: "Param Pujya Satguru Ji",
      publisher: "Truth Path Foundation",
      pages: 130,
      year: 2021,
      image: book3,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
    },
    {
      id: 7,
      title: "Wisdom Beyond Time",
      author: "Param Pujya Satguru Ji",
      publisher: "Divine Publications",
      pages: 115,
      year: 2024,
      image: book1,
      link: "https://drive.google.com/file/d/3EXAMPLE_ID/view?usp=sharing",
    },
  ];

  // Pagination Logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="books-page">
      <h1 className="books-title">📚 Published Books</h1>

      <div className="books-row">
        {currentBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <p className="book-name"><strong>Name:</strong> {book.title}</p>
            <p className="book-author"><strong>Author:</strong> {book.author}</p>
            <button className="book-link" onClick={() => setSelectedBook(book)}>Read More</button>
          </div>
        ))}
      </div>

      {/* Pagination: Prev Page X of Y Next */}
      <div className="pagination">
        <button className="page-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>⬅ Prev</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className="page-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next ➡</button>
      </div>

      {/* Popup Modal */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={selectedBook.image} alt={selectedBook.title} className="modal-image" />
            </div>
            <div className="modal-right">
              <h2>{selectedBook.title}</h2>
              <p><strong>Author:</strong> {selectedBook.author}</p>
              <p><strong>Publisher:</strong> {selectedBook.publisher}</p>
              <p><strong>Total Pages:</strong> {selectedBook.pages}</p>
              <p><strong>Year:</strong> {selectedBook.year}</p>
              <a href={selectedBook.link} target="_blank" rel="noopener noreferrer" className="read-btn">📖 Read Book</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedBooks;
