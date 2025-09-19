import Menu from './Menu';
import React, { useEffect } from 'react';
import '../design/Projects.css';
import ProjectOne from './Projects/ProjectOne';
import FotoSelf from '../assets/images/FotoSelf.jpg';
import acoeskivi from '../assets/images/acoeskivi.jpg';
import appfinance from '../assets/images/appfinance.jpg';
import dashboardfinancias from '../assets/images/dashboardfinancias.jpg';
import meuport from '../assets/images/meuport.png';
import codigopdf from '../assets/images/codigopdf.png';



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
      description: 'Multi-user app with goals, limits, recurrences, and AI for financial tips.',
      tags: ['• React', '• Node', '• SQLite', '• OpenAI API', '• OpenFinance API'],
      cover: appfinance,
      href: 'https://github.com/gedalyas/financas-pessoais.git'
    },
    {
      title: 'Stock Analyzer',
      description: 'Technical indicators (RSI/MACD), watchlist and alerts.',
      tags: ['• Python', '• Kivy', '• yfinance', '• Matplotlib'],
      cover: acoeskivi,
      href: 'https://github.com/gedalyas/Analise-a-es.git'
    },
    {
      title: 'Portfolio',
      description: 'Website with animations, responsive grid, interactive cards, and AI agent.',
      tags: ['• React', '• styled-components', '• UX', '• Gemini AI API'],
      cover: meuport,
      href: 'https://github.com/gedalyas/meuportfolio.git'
    },
    {
      title: 'FinDavid',
      description: 'Financial dashboard with graphs, goals, and customization for users.',
      tags: ['• HTML', '• CSS'],
      cover: dashboardfinancias,
      href: 'https://github.com/gedalyas/FinDavid.git'
    },
    {
      title: 'PDF → Excel Converter',
      description: 'Extract tables with pdfplumber and export .xlsx.',
      tags: ['• Python', '• pdfplumber', '• openpyxl', '• Pandas'],
      cover: codigopdf,
      href: 'https://github.com/gedalyas/PDFTOEXCEL.git'
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
