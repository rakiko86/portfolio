import React from "react";
import { useState } from "react";
import projects from "../assets/data/projects";
import "../styles/pages/index.scss";

const CarouselProjects = () => {
  const allFeedbacks = projects.flatMap((project) =>
    (project.feedback || []).map((feedback) => ({
      id: feedback.id,
      site: feedback.site,
      note: feedback.note,
      mentor: feedback.mentor,
    }))
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (allFeedbacks.length === 0) {
    return <p>Aucun feedback disponible.</p>;
  }

  // Navigation précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allFeedbacks.length - 1 : prevIndex - 1
    );
  };

  // Navigation suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allFeedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFeedback = allFeedbacks[currentIndex];

  return (
    <div className="feedback-carousel-container">
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <h4>{currentFeedback.mentor}</h4>
            <img
              src={currentFeedback.note}
              alt={`Feedback ${currentFeedback.id}`}
              className="feedback-image"
            />
            <a
              className="mentor-link"
              href={currentFeedback.site}
              target="_blank"
              rel="noopener noreferrer"
            >
            Voir son site
            </a>
          </div>
        </div>

        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarouselProjects;
