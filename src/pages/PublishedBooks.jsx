import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./PublishedBooks.css";
import book1 from "../assets/guruji.webp";
import book2 from "../assets/guruji.webp";
import book3 from "../assets/guruji.webp";

/* Image map — keyed by book id, language-agnostic */
const BOOK_IMAGES = { 1: book1, 2: book2, 3: book3, 4: book1, 5: book2, 6: book3, 7: book1 };

const PublishedBooks = () => {
  const { t } = useTranslation();

  const rawBooks = t("publishedBooks.books", { returnObjects: true });

  /* Attach the correct image to each book at render time */
  const books = rawBooks.map((book) => ({
    ...book,
    image: BOOK_IMAGES[book.id] ?? book1,
  }));

  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const booksPerPage = 6;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const gradient =
      "radial-gradient(ellipse 65% 45% at 8% 0%, rgba(179,0,89,0.07) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 92% 100%, rgba(255,64,129,0.07) 0%, transparent 60%)";
    document.documentElement.style.minHeight = "100%";
    document.documentElement.style.background = "#fdf8f9";
    document.body.style.minHeight = "100vh";
    document.body.style.background = "#fdf8f9";
    document.body.style.backgroundImage = gradient;
    return () => {
      document.documentElement.style.minHeight = "";
      document.documentElement.style.background = "";
      document.body.style.minHeight = "";
      document.body.style.background = "";
      document.body.style.backgroundImage = "";
    };
  }, []);

  /* Build categories from translated book data */
  const categories = [t("publishedBooks.cat_all"), ...new Set(books.map((b) => b.category))];

  const filteredBooks =
    selectedCategory === t("publishedBooks.cat_all")
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const booksVisible = selectedCategory !== "" && currentBooks.length > 0;

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (booksVisible) {
      html.style.overflowX = "hidden";
      html.style.overflowY = "auto";
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";
    } else {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [booksVisible]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pb2-page">
      {/* Decorative background orbs */}
      <div className="pb2-orb pb2-orb--tl" />
      <div className="pb2-orb pb2-orb--br" />

      {/* Header */}
      <div className="pb2-header">
        <span className="pb2-eyebrow">{t("publishedBooks.eyebrow")}</span>
        <h1 className="pb2-title">{t("publishedBooks.title")}</h1>
        <div className="pb2-divider">
          <span className="pb2-divider__line" />
          <span className="pb2-divider__gem">✦</span>
          <span className="pb2-divider__line" />
        </div>
      </div>

      {/* Category Filter */}
      <div className="pb2-filter">
        <div className="pb2-filter__wrap">
          <span className="pb2-filter__label">{t("publishedBooks.filter_label")}</span>
          <select
            id="pb2CategorySelect"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="pb2-filter__select"
          >
            {selectedCategory === "" && (
              <option value="" disabled hidden>
                {t("publishedBooks.filter_placeholder")}
              </option>
            )}
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <span className="pb2-filter__arrow">&#8964;</span>
        </div>
      </div>

      {/* Books Grid */}
      <div className="pb2-grid">
        {currentBooks.map((book, index) => (
          <div
            className="pb2-card"
            key={book.id}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="pb2-card__img-wrap">
              <img src={book.image} alt={book.title} className="pb2-card__img" />
              <div className="pb2-card__img-shine" />
            </div>
            <div className="pb2-card__body">
              <span className="pb2-card__tag">{book.category}</span>
              <p className="pb2-card__title">{book.title}</p>
              <p className="pb2-card__author">{book.author}</p>
            </div>
            <button className="pb2-card__btn" onClick={() => setSelectedBook(book)}>
              {t("publishedBooks.btn_open")}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {selectedCategory !== "" && filteredBooks.length > booksPerPage && (
        <div className="pb2-pagination">
          <button
            className="pb2-pagination__btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {t("publishedBooks.pg_prev")}
          </button>
          <span className="pb2-pagination__info">
            {currentPage}{" "}
            <span className="pb2-pagination__sep">/</span>{" "}
            {totalPages}
          </span>
          <button
            className="pb2-pagination__btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {t("publishedBooks.pg_next")}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedBook && (
        <div className="pb2-modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="pb2-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pb2-modal__close" onClick={() => setSelectedBook(null)}>
              ✕
            </button>
            <div className="pb2-modal__left">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="pb2-modal__img"
              />
              <div className="pb2-modal__year-badge">{selectedBook.year}</div>
            </div>
            <div className="pb2-modal__right">
              <span className="pb2-modal__tag">{selectedBook.category}</span>
              <h2 className="pb2-modal__title">{selectedBook.title}</h2>
              <div className="pb2-modal__meta">
                <div className="pb2-modal__row">
                  <span className="pb2-modal__key">{t("publishedBooks.modal_key_author")}</span>
                  <span className="pb2-modal__val">{selectedBook.author}</span>
                </div>
                <div className="pb2-modal__row">
                  <span className="pb2-modal__key">{t("publishedBooks.modal_key_publisher")}</span>
                  <span className="pb2-modal__val">{selectedBook.publisher}</span>
                </div>
                <div className="pb2-modal__row">
                  <span className="pb2-modal__key">{t("publishedBooks.modal_key_pages")}</span>
                  <span className="pb2-modal__val">{selectedBook.pages}</span>
                </div>
                <div className="pb2-modal__row">
                  <span className="pb2-modal__key">{t("publishedBooks.modal_key_year")}</span>
                  <span className="pb2-modal__val">{selectedBook.year}</span>
                </div>
              </div>
              <a
                href={selectedBook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pb2-modal__read-btn"
              >
                {t("publishedBooks.modal_read_btn")}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedBooks;