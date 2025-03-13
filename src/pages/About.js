import React, { useState } from 'react';
import "../styles/pages/index.scss"; // Assurez-vous d'importer le fichier CSS
import CarouselProjects from '../components/CarouselProjects'; // Ou le carrousel de feedback que tu utilises
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    const [showCarousel, setShowCarousel] = useState(false); // État pour gérer l'affichage du carrousel

    // Fonction pour basculer l'affichage du carrousel
    const toggleCarousel = () => {
        setShowCarousel(prevState => !prevState);
    };

    return ( 
        <section id="about-section">
            <div className='about'> 
                
            <h2>À propos de moi</h2>
            
            <div className="about-container">
                <p>
                    Ayant un parcours qui combine la rigueur et la patience acquises dans la pâtisserie, ainsi que le sens des priorités et la pédagogie de mon expérience en enseignement, me permet aujourd'hui de concevoir des projets web avec méthode et créativité, en apportant des solutions innovantes et de qualité. Mon objectif est de continuer à fusionner mes différentes passions et compétences dans un environnement dynamique et collaboratif.
                </p>
            </div>
            </div>
            <div className='feedback'>
            {/* Le bouton qui bascule l'affichage du carrousel */}
            <button className='feedbackBut' onClick={toggleCarousel}>
                   <FontAwesomeIcon icon={showCarousel ? faChevronUp : faChevronDown} />
            </button>

            {/* Affiche ou masque le carrousel en fonction de l'état */}
            {showCarousel && <CarouselProjects/>}
            
            </div> 
        </section>
    );
};

export default About;
