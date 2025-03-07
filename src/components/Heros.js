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
                <img src="./src/images/mine.webp" alt="me" className="profile-img" />
                    <div className="left-side">
                    <p><TypingEffect /></p>
                        
                        
                    </div>
                    <div className="right-side">
                        <div className="download-cv">
                            <a href="./src/files/CV.pdf" download>
                                <button className="download-button">CV</button>
                            </a>
                        </div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/rekia-harrat-65829b22b/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/rakiko86" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> 
                            </a>
                            <a href="mailto:rekia.harrat86@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heros;
