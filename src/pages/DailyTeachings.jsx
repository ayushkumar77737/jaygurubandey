import React from "react";
import "./DailyTeachings.css";

const teachings = [
  {
    day: 1,
    question: "What is the true purpose of human life?",
    answer:
      "According to Guruji’s teachings, the true purpose of human life is self-realization, inner purification, and union with the divine through devotion, discipline, and service."
  },
  {
    day: 2,
    question: "Why is devotion important in spiritual life?",
    answer:
      "Devotion softens the heart and creates a direct connection with the divine. Guruji teaches that sincere devotion brings peace, clarity, and grace."
  },
  {
    day: 3,
    question: "What does seva mean in the ashram?",
    answer:
      "Seva means selfless service performed without ego or expectation. In the ashram, seva purifies the mind and strengthens spiritual discipline."
  },
  {
    day: 4,
    question: "How does silence help spiritual growth?",
    answer:
      "Silence calms the mind and allows inner awareness to grow. Guruji emphasizes silence as a doorway to deeper meditation."
  },
  {
    day: 5,
    question: "What is the role of discipline in spiritual practice?",
    answer:
      "Discipline creates stability in life. Guruji teaches that regular practice leads to inner strength and steady progress."
  },
  {
    day: 6,
    question: "Why should one control desires?",
    answer:
      "Uncontrolled desires disturb peace. Guruji guides that moderation and contentment lead to lasting happiness."
  },
  {
    day: 7,
    question: "What is true faith?",
    answer:
      "True faith is unwavering trust in the divine path shown by the Guru, even during difficulties."
  },
  {
    day: 8,
    question: "How does meditation transform life?",
    answer:
      "Meditation purifies thoughts, reduces suffering, and awakens inner joy, as taught by Guruji."
  },
  {
    day: 9,
    question: "Why is humility essential on the spiritual path?",
    answer:
      "Humility removes ego and opens the heart to divine wisdom."
  },
  {
    day: 10,
    question: "What is the meaning of surrender?",
    answer:
      "Surrender means trusting the divine will completely and letting go of fear and control."
  },
  {
    day: 11,
    question: "How should one face difficulties?",
    answer:
      "Guruji teaches that difficulties are lessons meant to strengthen faith and patience."
  },
  {
    day: 12,
    question: "Why is gratitude important?",
    answer:
      "Gratitude keeps the mind positive and attracts divine grace."
  },
  {
    day: 13,
    question: "What is true happiness?",
    answer:
      "True happiness comes from inner peace, not from external possessions."
  },
  {
    day: 14,
    question: "Why is satsang valuable?",
    answer:
      "Satsang uplifts consciousness and keeps one aligned with truth."
  },
  {
    day: 15,
    question: "How does the Guru guide a seeker?",
    answer:
      "The Guru removes ignorance and shows the path through wisdom and compassion."
  },
  {
    day: 16,
    question: "What is the power of chanting?",
    answer:
      "Chanting purifies the mind and invokes divine vibrations."
  },
  {
    day: 17,
    question: "Why should one practice patience?",
    answer:
      "Patience allows spiritual growth to unfold naturally."
  },
  {
    day: 18,
    question: "What is inner purity?",
    answer:
      "Inner purity means freedom from negative thoughts and selfish intentions."
  },
  {
    day: 19,
    question: "Why is simplicity encouraged in the ashram?",
    answer:
      "Simplicity reduces distractions and enhances spiritual focus."
  },
  {
    day: 20,
    question: "What is self-awareness?",
    answer:
      "Self-awareness is the ability to observe thoughts and actions consciously."
  },
  {
    day: 21,
    question: "How does compassion help spiritually?",
    answer:
      "Compassion expands the heart and brings one closer to divine love."
  },
  {
    day: 22,
    question: "Why is consistency important?",
    answer:
      "Consistent practice creates deep spiritual transformation."
  },
  {
    day: 23,
    question: "What is detachment?",
    answer:
      "Detachment means living in the world without being bound by it."
  },
  {
    day: 24,
    question: "How does truthfulness shape character?",
    answer:
      "Truthfulness strengthens integrity and inner peace."
  },
  {
    day: 25,
    question: "Why should one avoid ego?",
    answer:
      "Ego blocks spiritual growth and creates separation."
  },
  {
    day: 26,
    question: "What is divine grace?",
    answer:
      "Divine grace is the unseen support that guides and protects the seeker."
  },
  {
    day: 27,
    question: "Why is forgiveness important?",
    answer:
      "Forgiveness frees the heart from pain and resentment."
  },
  {
    day: 28,
    question: "What is inner strength?",
    answer:
      "Inner strength comes from faith, discipline, and devotion."
  },
  {
    day: 29,
    question: "How does self-control help?",
    answer:
      "Self-control brings clarity, balance, and peace."
  },
  {
    day: 30,
    question: "What is the ultimate teaching of Guruji?",
    answer:
      "Live with love, truth, devotion, and selfless service."
  }
];

const DailyTeachings = () => {
  const today = new Date().getDate();
  const index = (today - 1) % 30;
  const teaching = teachings[index];

  return (
  <div className="daily-teachings-page">
    <div className="daily-content">

      {/* Daily Teaching Card */}
      <div className="daily-card">
        <span className="day-badge">Day {teaching.day}</span>
        <h2 className="daily-question">{teaching.question}</h2>
        <p className="daily-answer">{teaching.answer}</p>
      </div>

      {/* Guruji's Message (ADD HERE) */}
      <div className="daily-extra">
        <h3 className="extra-title">Guruji’s Message</h3>
        <p className="extra-text">
          Walk the path of truth with patience and devotion. Every step taken
          with faith brings you closer to inner peace.
        </p>
      </div>

    </div>
  </div>
);
};

export default DailyTeachings;
