import React from "react";
import "./About.css";
import guruji from "../assets/guruji.jpg";
import vision from "../assets/vision.jpg";
import daily from "../assets/journey.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Sacred Introduction */}
      <section className="about-intro">
        <h1>In the Light of Guruji’s Grace</h1>
        <p className="subtext">“This ashram is not just a place—it is a presence.”</p>
      </section>

      {/* Guruji’s Journey */}
      <section className="about-journey">
        <div className="journey-photo">
          <img src={guruji} alt="Guruji" />
        </div>
        <div className="journey-text">
          <h2>Guruji’s Journey</h2>
          <p>
            Guruji’s life is a sacred journey of devotion, wisdom, and service to humanity.
            Born in simplicity and humility, his early years reflected discipline, compassion,
            and an unshakable faith in dharma. With a heart filled with love for all beings,
            he embraced the path of spirituality and self-realization, devoting every moment
            to the higher purpose of guiding souls toward light and truth.
            <br /><br />
            Through years of meditation, study of scriptures, and divine experiences, Guruji
            blossomed into a beacon of spiritual knowledge. His words are not merely lessons
            but reflections of his lived wisdom — each teaching carrying the fragrance of
            compassion, the strength of truth, and the serenity of inner peace.
          </p>
        </div>
      </section>

      {/* Ashram Vision & Values */}
      <section className="about-vision">
        <div className="vision-photo">
          <img src={vision} alt="Vision" />
        </div>
        <div className="vision-text">
          <h2>Ashram’s Vision & Values</h2>
          <p>
            The Ashram is not merely a place; it is a living sanctuary where seekers find peace, purpose, and spiritual nourishment. Its vision is to serve as a guiding light for all who yearn to rise above the distractions of the material world and connect with the eternal truth within.
            <br /><br />
            Rooted deeply in the timeless wisdom of the Vedanta — the philosophy of oneness — the Ashram reminds every soul that the Divine exists equally in all beings. Through the path of Bhakti Yoga, seekers cultivate devotion and unconditional love, softening the heart and opening the way to Divine grace. Through Karma Yoga, they learn the art of selfless service, discovering that true fulfillment comes not in taking, but in giving.
          </p>
        </div>
      </section>

      {/* Daily Life at the Ashram */}
      <section className="about-daily">
        <div className="daily-photo">
          <img src={daily} alt="Daily" />
        </div>
        <div className="daily-text">
          <h2>Daily Life at the Ashram</h2>
          <p>
            The rhythm of the Ashram flows in harmony with nature and the Divine. Each day begins before sunrise, when the stillness of dawn is embraced with sacred chants and prayers that awaken the spirit. As the sun rises, seekers gather for meditation, immersing themselves in silence and inner reflection, aligning their hearts with peace and clarity.
            <br /><br />
            The mornings are often filled with study of scriptures, discourses, and selfless service — whether it be tending to the gardens, preparing prasad, or supporting the needs of fellow seekers. Every action, no matter how small, is performed with mindfulness and devotion, transforming daily duties into acts of worship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
