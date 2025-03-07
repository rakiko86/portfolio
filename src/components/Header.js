import React from "react";
import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import "../styles/pages/index.scss";

const Header = () => {
    const location = useLocation(); // Détecte la page actuelle

    return (
        <header>
            <nav>
                <div className="logo">
                    <Link to="/" className="logo">HARRAT Rekia</Link>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link 
                            to="/" 
                            className={location.pathname === "/" ? "active" : ""}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={location.pathname === "/about" ? "active" : ""}
                        >
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={location.pathname === "/contact" ? "active" : ""}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects" 
                            className={location.pathname === "/projects" ? "active" : ""}
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
