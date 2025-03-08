import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import "../styles/pages/index.scss";

const Header = () => {
    const location = useLocation(); // Détecte la page actuelle
    const [menuOpen, setMenuOpen] = useState(false); // ✅ État du menu hamburger

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav>
                <h1 className="logo">
                    <Link to="/" id="logo">HARRAT Rekia</Link>
                </h1>

                {/* ✅ Bouton Hamburger */}
                <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* ✅ Liste des liens avec classe dynamique pour l'affichage mobile */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={location.pathname === "/" ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={location.pathname === "/about" ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={location.pathname === "/contact" ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects" 
                            className={location.pathname === "/projects" ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            Projets
                        </Link>
                    </li>
                    <li><DarkMode /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
