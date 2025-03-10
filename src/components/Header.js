import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import "../styles/pages/index.scss";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(location.pathname + location.hash);

    useEffect(() => {
        setActiveLink(location.pathname + location.hash);
    }, [location.pathname, location.hash]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const offsetTop = section.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        setActiveLink("/#" + sectionId);
        setMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                scrollToSection(sectionId);
                window.history.replaceState(null, "", `/#${sectionId}`);
            }, 500);
        } else {
            scrollToSection(sectionId);
            window.history.replaceState(null, "", `/#${sectionId}`);
        }
    };

    return (
        <header>
            <nav>
                <h1 id="logo">HARRAT Rekia</h1>

                <div className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <Link 
                            to="/" 
                            className={activeLink === "/" ? "active" : ""}
                            onClick={() => setActiveLink("/")}
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="/#about-section" 
                            onClick={(e) => handleSectionClick(e, "about-section")}
                            className={activeLink === "/#about-section" ? "active" : ""}
                        >
                            À propos
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/#contact-section" 
                            onClick={(e) => handleSectionClick(e, "contact-section")}
                            className={activeLink === "/#contact-section" ? "active" : ""}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/#projects-section" 
                            onClick={(e) => handleSectionClick(e, "projects-section")}
                            className={activeLink === "/#projects-section" ? "active" : ""}
                        >
                            Projets
                        </a>
                    </li>
                    <li><DarkMode /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
