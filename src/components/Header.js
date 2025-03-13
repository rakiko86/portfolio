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
        e.preventDefault();  // Prevent default behavior (reload)
        setActiveLink("/#" + sectionId);
        setMenuOpen(false);

        if (location.pathname !== "/") {
            navigate("/");  // Navigate to the home page
            setTimeout(() => {
                scrollToSection(sectionId);
                window.history.replaceState(null, "", `/#${sectionId}`); // Update URL without reload
            }, 500);
        } else {
            scrollToSection(sectionId);  // Smooth scroll to section
            window.history.replaceState(null, "", `/#${sectionId}`); // Update URL without reload
        }
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <h1 id="logo">HARRAT Rekia</h1>
                </div>
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
    onClick={(e) => {
        e.preventDefault();
        console.log("Clic sur Accueil"); // Vérification du clic
        setActiveLink("/");
        setMenuOpen(false);

        if (location.pathname !== "/") {
            console.log("Redirection vers /");
            navigate("/");
        } else {
            console.log("Déjà sur /, on remonte en haut");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }}
>
    Accueil
</Link>


                    </li>
                    <li>
                        <Link 
                            to="/#about-section" 
                            onClick={(e) => handleSectionClick(e, "about-section")}
                            className={activeLink === "/#about-section" ? "active" : ""}>
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/#projects-section" 
                            onClick={(e) => handleSectionClick(e, "projects-section")}
                            className={activeLink === "/#projects-section" ? "active" : ""}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/#contact-section" 
                            onClick={(e) => handleSectionClick(e, "contact-section")}
                            className={activeLink === "/#contact-section" ? "active" : ""}>
                            Contact
                        </Link>
                    </li>
                    <li><DarkMode /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
