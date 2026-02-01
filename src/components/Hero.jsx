import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Olá, meu nome é</p>
          <h1 className="hero-name">Fabricio <span className="gradient-text">Cesar</span></h1>
          <h2 className="hero-title">Desenvolvedor de Software</h2>
          <p className="hero-description">
            Desenvolvendo o futuro com Java & JavaScript. Apaixonado por tecnologia, resolução de problemas e por construir ferramentas que facilitem o dia a dia das pessoas.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-outline">Fale comigo!</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob-gradient"></div>
          {/* Placeholder for User Photo */}
          <div className="hero-image">
            <img src="/imagem_minha.jpeg" alt="Fabricio Cesar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
