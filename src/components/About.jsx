import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">Sobre <span className="gradient-text">Mim</span></h2>
      <div style={{
        maxWidth: '800px',
        fontSize: 'clamp(1rem, 4vw, 1.2rem)',
        color: 'var(--text-secondary)',
        lineHeight: '1.8'
      }}>
        <p>{portfolioData.about}</p>
      </div>
    </section>
  );
};

export default About;
