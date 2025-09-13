import Menu from './Menu';
import React, { useEffect } from 'react';
import '../design/Projects.css';
import ProjectOne from './Projects/ProjectOne';
import FotoSelf from '../assets/images/FotoSelf.jpg';
import acoeskivi from '../assets/images/acoeskivi.jpg';
import appfinance from '../assets/images/appfinance.jpg';
import dashboardfinancias from '../assets/images/dashboardfinancias.jpg';
import meuport from '../assets/images/meuport.png';



function Projects() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  // === Lista de projetos ===
  const projects = [
    {
      title: 'PowerFin — Finanças Pessoais',
      description: 'App multiusuário com metas, limites, recorrências e IA para dicas financeiras.',
      tags: ['• React', '• Node', '• SQLite', '• OpenAI API', '• OpenFinance API'],
      cover: appfinance,
      href: 'https://github.com/gedalyas/financas-pessoais.git'
    },
    {
      title: 'Stock Analyzer',
      description: 'Indicadores técnicos (RSI/MACD), watchlist e alertas.',
      tags: ['• Python', '• Kivy', '• yfinance', '• Matplotlib'],
      cover: acoeskivi,
      href: 'https://github.com/gedalyas/stock-analyzer'
    },
    {
      title: 'Portfolio',
      description: 'Site com animações, grid responsivo, cards interativos e agente de IA.',
      tags: ['• React', '• styled-components', '• UX', '• Gemini AI API'],
      cover: meuport,
      href: 'https://github.com/gedalyas/meuportfolio.git'
    },
    {
      title: 'FinDavid',
      description: 'Dashboard financeiro com gráficos, metas e personalização para usuarios.',
      tags: ['• HTML', '• CSS'],
      cover: dashboardfinancias,
      href: 'https://github.com/gedalyas/FinDavid.git'
    },
    {
      title: 'PDF → Excel Converter',
      description: 'Extração de tabelas com pdfplumber e exportação .xlsx.',
      tags: ['• Python', '• pdfplumber', '• openpyxl', '• Pandas'],
      cover: FotoSelf,
      href: 'https://github.com/gedalyas/pdf-to-excel'
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-left">
        <div className="profile-container">
          <img src={FotoSelf} alt="Minha foto" className="profile-photo" />
          <div className="social-icons">
            <a href="https://github.com/gedalyas" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/davi-alsouto" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:davialsouto@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="projects-right">
        <h1>Recent Projects </h1>
        <h2>and Achievements</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectOne
              key={i}
              title={p.title}
              description={p.description}
              tags={p.tags}
              cover={p.cover}
              href={p.href}
            />
          ))}
        </div>

        <Menu />
      </div>
    </div>
  );
}

export default Projects;
