import React from 'react';
import { portfolioData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Conhecimentos <span className="gradient-text">Técnicos</span></h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {portfolioData.skills.map((skill, index) => (
          <div key={index} style={{
            padding: '1rem',
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'var(--transition-fast)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-color)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={{ fontSize: '1rem' }}>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
