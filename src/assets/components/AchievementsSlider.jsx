import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AchievementsSlider.css";

const achievements = [
  { id: 1, text: "🏆 Won 1st prize in Logo Designing in National Tech Symposium at Guru Nanak College.", image: "/images/achievement1.jpg" },
  { id: 2, text: "🏆 Won 1st prize in UX/UI Design in National Tech Symposium at Sai Ram Institutions.", image: "/images/achievement2.jpg" },
  { id: 3, text: "🏆 Won 1st prize in UX/UI Design in National Tech Symposium at SRM University.", image: "/images/achievement3.jpg" },
  { id: 4, text: "🏆 Won 1st prize in Poster Presentation competition in SA College.", image: "/images/achievement4.jpg" },
  { id: 5, text: "🏆 Won 1st prize in Poster Making competition and Logo Designing at SRM University.", image: "/images/achievement5.jpg" },
  { id: 6, text: "🥈 Won 2nd prize in Design Decode contest at Eeswari Engineering College.", image: "/images/achievement6.jpg" },
  { id: 7, text: "💻 Participated in Web Design event at Hindustan College and coded a website in under 3 hours.", image: "/images/achievement7.jpg" },
];

const AchievementsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="achievements-section"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="section-title">Achievements</h2>
      <div className="slider-container">
        <div className="slideshow-container">
          <AnimatePresence>
            <motion.div
              key={achievements[currentIndex].id}
              className="slide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={achievements[currentIndex].image}
                alt={`achievement-${currentIndex + 1}`}
                className="achievement-image"
              />
              <p className="achievement-text">{achievements[currentIndex].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementsSlider;
