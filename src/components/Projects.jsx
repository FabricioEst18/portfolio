import React from 'react';
import { portfolioData } from '../data';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Meus <span className="gradient-text">Projetos</span></h2>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              {/* Add image here if needed */}
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
