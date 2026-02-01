import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <div className="logo">
          <span className="gradient-text">&lt;PortfolioDev /&gt;</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="#projects">Projetos</a></li>
        </ul>
        <a href="#contact" className="btn btn-outline">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
