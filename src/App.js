import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import Projects from './pages/Projects';
import Home from './pages/Home';
import Header from './components/Header';
import './styles/pages/index.scss';
const App = () => {
    
    return (
        <div> 
           
            <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                </main>
               <footer>&copy; 2025 HARRAT Rekia</footer>
            </BrowserRouter>
        </div>
    );
};

export default App;