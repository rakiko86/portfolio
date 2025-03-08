import React, { useState } from "react";
import CarouselModal from "./CarouselModal"; // Importation du composant modale
import "../styles/pages/index.scss";

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div 
                className="project-card" 
                onClick={() => setShowModal(true)} // Ouvre la modale
            >
                <div className="cover-container">
                    <img src={project.cover} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
            </div>

            {/* Affichage conditionnel de la modale */}
            {showModal && (
                <CarouselModal 
                    project={project} 
                    onClose={() => setShowModal(false)} // Ferme la modale
                />
            )}
        </>
    );
};

export default ProjectCard;
