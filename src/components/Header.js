import React, { useState } from 'react';
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import '../styles/pages/index.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav>
                {/* Logo à gauche */}
                <div className="logo">
                    <Link to="/">HARRAT Rekia</Link>
                </div>

                {/* Bouton Menu Hamburger */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                    <span className={isOpen ? "bar open" : "bar"}></span>
                </div>

                {/* Navigation : affichage dynamique */}
                <ul className={isOpen ? "nav-links open" : "nav-links"}>
                    <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>À propos</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/projects" onClick={toggleMenu}>Projets</Link></li>
                    <li><DarkMode /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
