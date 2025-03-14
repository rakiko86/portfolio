import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard"; // Assurez-vous d'avoir un composant ProjectCard
import "../styles/pages/index.scss";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import("../assets/data/projects.js");
        setData(data.default);
      } catch (err) {
        setError("Erreur lors du chargement des projets");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Chargement des projets...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="projects-section">
      <h2>Projets</h2>
      <div className="projects">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
