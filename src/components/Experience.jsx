import React from 'react';
import { portfolioData } from '../data';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="education" className="section container">
      <h2 className="section-title">Experiência & <span className="gradient-text">Formação</span></h2>

      <div className="timeline">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4 className="gradient-text">{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="education-grid">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="edu-card">
            <h3>{edu.degree}</h3>
            <p className="gradient-text">{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
