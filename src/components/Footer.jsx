import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
  return (
    <footer id="contact" className="section">
      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Vamos construir algo incrível?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>Sinta-se à vontade para me contatar através das redes sociais.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href={portfolioData.socials.email} className="btn btn-primary">Enviar E-mail</a>
        </div>

        <p style={{ marginTop: '4rem', fontSize: '0.85rem', color: '#555' }}>
          © 2026 {portfolioData.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
