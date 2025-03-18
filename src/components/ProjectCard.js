import React, { useState } from "react";
import CarouselModal from "./CarouselModal"; // Importation du composant modale
import "../styles/pages/index.scss";

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Gestion de l'ouverture avec la touche "Enter"
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setShowModal(true);
    }
  };

  return (
    <>
      <div
        className="project-card"
        onClick={() => setShowModal(true)}
        onKeyDown={handleKeyPress} // Ajout du support clavier
        role="button" // Indique que cet élément est interactif
        tabIndex={0} // Permet de naviguer dessus avec "Tab"
        aria-label={`Voir le projet ${project.title}`} // Améliore l’accessibilité
      >
        <div className="cover-container">
          <img src={project.cover} alt={`Aperçu du projet ${project.title}`} decoding="async" />
        </div>
        <h3>{project.title}</h3>
      </div>

      {/* Affichage conditionnel de la modale */}
      {showModal && (
        <CarouselModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;
