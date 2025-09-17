import React from "react";
import projectData from "../data/projectData"; 

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack.join(", ")}
            </p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
