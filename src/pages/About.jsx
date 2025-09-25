import React, { useState } from "react";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const sectionsPerPage = 3;

  // All sections data in an array for easier pagination
  const sections = [
    {
      id: 1,
      className: "about-journey",
      photo: guruji,
      title: "Guruji’s Journey",
      text: [
        "Guruji’s life is a sacred journey of devotion, wisdom, and service to humanity...",
        "Through years of meditation, study of scriptures, and divine experiences, Guruji blossomed into a beacon of spiritual knowledge...",
        "Today, countless seekers look to him for guidance. His life reminds us that true greatness lies not in wealth or recognition, but in humility, compassion, and surrender to the Divine will."
      ],
    },
    {
      id: 2,
      className: "about-vision",
      photo: vision,
      title: "Ashram’s Vision & Values",
      text: [
        "The Ashram is not merely a place; it is a living sanctuary where seekers find peace, purpose, and spiritual nourishment...",
        "Rooted deeply in the timeless wisdom of the Vedanta, the Ashram reminds every soul that the Divine exists equally in all beings...",
        "Above all, the Ashram’s values inspire seekers to live with integrity, compassion, and gratitude, transforming daily life into a spiritual journey."
      ],
    },
    {
      id: 3,
      className: "about-daily",
      photo: daily,
      title: "Daily Life at the Ashram",
      text: [
        "The rhythm of the Ashram flows in harmony with nature and the Divine. Each day begins before sunrise...",
        "The mornings are often filled with study of scriptures, discourses, and selfless service...",
        "Evenings in the Ashram are illuminated by satsangs, bhajans, and meditation..."
      ],
    },
    {
      id: 4,
      className: "about-teachings",
      photo: guruji,
      title: "Teachings of Guruji",
      text: [
        "Guruji’s teachings are timeless treasures of wisdom, guiding seekers toward self-realization and compassion...",
        "His discourses often highlight the importance of balancing worldly duties with spiritual practices...",
        "These teachings continue to inspire countless souls, guiding them to find strength in challenges, peace in silence, and purpose in service."
      ],
    },
    {
      id: 5,
      className: "about-seva",
      photo: vision,
      title: "Community & Seva",
      text: [
        "Seva, or selfless service, is the heartbeat of the Ashram...",
        "Beyond the Ashram walls, seva extends to society through food distribution, health camps, and education programs...",
        "Guruji often says, 'The hands that serve are holier than the lips that pray.'"
      ],
    },
    {
      id: 6,
      className: "about-festivals",
      photo: daily,
      title: "Festivals & Celebrations",
      text: [
        "The Ashram is filled with colors of joy during spiritual festivals — celebrated with prayers, music, and community feasts...",
        "Festivals here are not just about rituals; they are opportunities to experience the Divine in togetherness...",
        "These celebrations remind us that spirituality is not a solitary journey but a shared path..."
      ],
    },
  ];

  // Pagination Logic
  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;
  const currentSections = sections.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sections.length / sectionsPerPage);

  return (
    <div className="about-page">
      {/* Intro */}
      <section className="about-intro">
        <h1>In the Light of Guruji’s Grace</h1>
        <p className="subtext">“This ashram is not just a place—it is a presence.”</p>
      </section>

      {/* Render Paginated Sections */}
      {currentSections.map((sec) => (
        <section key={sec.id} className={sec.className}>
          <div className={`${sec.className.split("-")[1]}-photo`}>
            <img src={sec.photo} alt={sec.title} />
          </div>
          <div className={`${sec.className.split("-")[1]}-text`}>
            <h2>{sec.title}</h2>
            {sec.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          ⬅ Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default About;
