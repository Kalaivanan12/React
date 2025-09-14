import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>E-Farming App</h3>
          <p>A mobile app for efficient farming system.</p>
        </div>
        <div className="project-card">
          <h3>CarVilla Website</h3>
          <p>A car dealership website template with React & CSS.</p>
        </div>
        <div className="project-card">
          <h3>OLX Clone</h3>
          <p>Marketplace app with frontend & backend separation.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
