import React from "react";
import Heros from "../components/Heros";
import About from "../pages/About";
import Projects from "../pages/Projects";
import ContactUs from "../pages/ContactUs";
import Skills from "../components/Skills";
import BackToUp from "../components/BackToUp";
import "../styles/pages/index.scss";

const Home = () => {
  return (
    <div className="home">
      <Heros />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
      <BackToUp />
    </div>
  );
};

export default Home;
