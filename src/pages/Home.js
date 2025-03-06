import React from 'react';

import Heros from '../components/Heros';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import '../styles/pages/index.scss';
const Home = () => {
    return (
        
        <div>
            <main>
           
            
    <div>

    <Heros />
    </div>
    <div>
        
    <About/>
    </div>
   
        
    <div>
    <h1>Mes compétences</h1>
            <Skills/>
    </div>
            <div>
            <Projects/>
            </div>
            <div>
            <Contact/>
            </div>
            
    </main>
        
           
           
            
    <footer>
    <Footer/>
    </footer>
           
           
                
               
           
           
        
            
          
            
        </div>
    );
};

export default Home;