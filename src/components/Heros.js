import React from 'react';
import TypingEffect from './TypingEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/pages/index.scss';

const Heros = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-container">
                    <img src="./mine.webp" alt="Portrait de Rekia Harrat" className="profile-img" />
                    <div className="left-side">
                        <p><TypingEffect /></p>
                    </div>
                    <div className="right-side">
                        <div className="download-cv">
                            <a href="./src/files/CV.pdf" download="" className="download-button" aria-label="Télécharger mon CV">
                                CV
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/rekia-harrat-65829b22b/" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span className="sr-only"></span>
                            </a>
                            <a href="https://github.com/rakiko86" target="_blank" rel="noopener noreferrer" aria-label="Mon profil GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="sr-only"></span>
                            </a>
                            <a href="mailto:rekia.harrat86@gmail.com" aria-label="Envoyer un email">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heros;
