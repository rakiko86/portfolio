import React, { useState } from "react";
import "../styles/pages/index.scss";

const CarouselModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.pictures.length) % project.pictures.length
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ✖
        </button>

        <h3>{project.title}</h3>

        <div className="carousel">
          <button className="prev" onClick={prevSlide}>
            &lt;
          </button>

          <img
            src={project.pictures[currentIndex]}
            alt={`${project.title} - ${currentIndex + 1}`}
          />

          <button className="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>

        <p>{project.text}</p>
        <a
          className="project-link"
          href={project.Url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
};

export default CarouselModal;
