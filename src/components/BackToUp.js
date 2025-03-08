import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Flèche vers le haut
import '../styles/pages/index.scss';

const BackToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Détecter la position de défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastThreshold = window.scrollY > 200;
      setIsVisible(scrolledPastThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour faire défiler vers le haut
  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      className={`back-to-up ${isVisible ? 'visible' : ''}`}
      onClick={scrollHandler}
      aria-label="Revenir en haut de la page"
    >
      <ArrowUpwardIcon />
    </IconButton>
  );
};

export default BackToUp;
