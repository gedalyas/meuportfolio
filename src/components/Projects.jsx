import Menu from './Menu';
import React, { useEffect } from 'react';
import '../design/Projects.css';
import ProjectOne from './Projects/ProjectOne';
import FotoSelf from '../assets/images/FotoSelf.jpg';

function Projects() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  // === Lista de projetos (exemplos) ===
  const projects = [
    {
      title: 'FinFlow — Finanças Pessoais',
      description: 'App multiusuário com metas, limites, recorrências e IA para dicas financeiras.',
      tags: ['• React', '• Node', '• SQLite'],
      cover: FotoSelf, // troque por sua imagem real
      href: 'https://github.com/gedalyas/finflow'
    },
    {
      title: 'Nutri S3 — E-commerce',
      description: 'Loja focada em suplementos para cavalos atletas com SEO e Merchant Center.',
      tags: ['• Next.js', '• Stripe', '• SEO'],
      cover: FotoSelf, // troque por sua imagem real
      href: 'https://nutris3.com.br'
    },
    {
      title: 'Stock Analyzer',
      description: 'Indicadores técnicos (RSI/MACD), watchlist e alertas.',
      tags: ['• Python', '• Kivy', '• yfinance'],
      cover: FotoSelf, // troque por sua imagem real
      href: 'https://github.com/gedalyas/stock-analyzer'
    },
    {
      title: 'Portfolio (Este site)',
      description: 'SPA com animações, grid responsivo e cards interativos.',
      tags: ['• React', '• styled-components', '• UX'],
      cover: FotoSelf
    },
    {
      title: 'Assistente Financeiro (IA)',
      description: 'Leitura de gastos do usuário e estratégias de economia.',
      tags: ['• OpenAI', '• Chat', '• Tokenização'],
      cover: FotoSelf
    },
    {
      title: 'PDF → Excel Converter',
      description: 'Extração de tabelas com pdfplumber e exportação .xlsx.',
      tags: ['• Python', '• pdfplumber', '• openpyxl'],
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
