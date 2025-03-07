import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Flèche vers le haut
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // Flèche vers le bas
import '../styles/pages/index.scss';

const BackToUp = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Détecter la position de défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        setIsBottom(true);
      } else if (window.scrollY === 0) {
        setIsBottom(false);
      }

      // Ajouter ou enlever la classe 'visible' en fonction de la position de défilement
      if (window.scrollY > 200) {
        setIsVisible(true);  // Apparition du bouton après 200px de défilement
      } else {
        setIsVisible(false); // Masquer le bouton si moins de 200px de défilement
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour faire défiler vers le haut ou le bas
  const scrollHandler = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div>
      <IconButton 
        className={`back-to-up ${isVisible ? 'visible' : ''}`} 
        onClick={scrollHandler}
      >
        {isBottom ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </div>
  );
};

export default BackToUp;
