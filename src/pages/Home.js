import React from 'react';

import Heros from '../components/Heros';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import BackToUp from '../components/BackToUp';
import '../styles/pages/index.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Heros />
                <About />

                <div className="skills-section">
                    <h1>Mes compétences</h1>
                    <Skills />
                </div>

                <Projects />
                <Contact />
            </div>
            <BackToUp/>
            <Footer />
            
        </div>
    );
};

export default Home;
