import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Vérifie si le mode sombre est sauvegardé dans le localStorage
    useEffect(() => {
      const storedMode = localStorage.getItem('dark-mode') === 'enabled';
      setIsDarkMode(storedMode);
      if (storedMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, []);
  
    // Fonction pour changer le mode sombre
    const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      if (newMode) {
        localStorage.setItem('dark-mode', 'enabled');
        document.body.classList.add('dark-mode');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
        document.body.classList.remove('dark-mode');
      }
    };
  
    return (
        <div> 
           
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;