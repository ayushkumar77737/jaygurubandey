import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./About.css";

const AboutDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { section, currentPage } = location.state || {};

  if (!section) {
    return (
      <div className="about-page">
        <h2>Section Not Found</h2>
        <button onClick={() => navigate("/about")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="about-page">
      <section className={section.className}>
        <div className={`${section.className.split("-")[1]}-photo`}>
          <img src={section.photo} alt={section.title} />
        </div>
        <div className={`${section.className.split("-")[1]}-text`}>
          <h2>{section.title}</h2>
          {section.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {/* Back Button */}
          <button
            className="know-more-btn"
            onClick={() =>
              navigate("/about", { state: { currentPage } })
            }
          >
            ← Back
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
