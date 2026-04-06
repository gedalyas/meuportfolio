import Menu from './Menu';
import React, { useEffect } from 'react';
import '../design/Projects.css';
import ProjectOne from './Projects/ProjectOne';
import FotoSelf from '../assets/images/FotoSelf.jpg';
import acoeskivi from '../assets/images/acoeskivi.jpg';
import appfinance from '../assets/images/appfinance.jpg';
import codigopdf from '../assets/images/codigopdf.png';
import FluxCompras from '../assets/images/FluxCompras.jpg';
import SitePoltrona from '../assets/images/foto-site-poltrona.png';
import fotomaos from '../assets/images/maoscom.png';
import fotofisiogabrielapedrosa from '../assets/images/fisiogabrielapedrosa.png';
import fotodeboracorretora from '../assets/images/sitedebora.png';
import fotowalneide from '../assets/images/sitewalneide.png';
import fotogiovana from '../assets/images/sitegiovana.png';
import fotositepraiapaixao from '../assets/images/sitepraiadapaixao.png';
import crmimobtech from '../assets/images/crmimobtech.png';
import jvrimoveis from '../assets/images/fotojvr.png';
import realminas from '../assets/images/realminas.png';
import laboratoriohemo from '../assets/images/sitelaboratorio-hemolabor.png';
import techzafe from '../assets/images/printtechzafe.png';
import suplementosdudu from '../assets/images/printsuplementosdudu.png';


function Projects() {
  useEffect(() => {

  }, []);

  // === Lista de projetos ===
  const projects = [
    {
      title: 'Hemolabor',
      description: 'Laboratory website built to present services, strengthen trust, and simplify access to exam results.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: laboratoriohemo,
      href: 'https://www.laboratoriosaleselanna.com.br/'
    },
    {
      title: 'Prospera — Brasil Tecnologias',
      description: 'Multi-user app with goals, limits, recurrences, and AI for financial tips.',
      tags: ['• React', '• Node', '• SQLite', '• OpenAI API', '• OpenFinance API'],
      cover: appfinance,
      href: 'https://www.prosperafinancas.com/'
    },
    {
      title: 'Imobtech CRM',
      description: 'Real estate CRM for lead management, agent conversations, AI support, and calendar workflows.',
      tags: ['• TypeScript', '• Tailwind CSS', '• React', '• N8N'],
      cover: crmimobtech,
      href: 'https://github.com/gedalyas/imobitech'
    },
    {
      title: 'Stock Analyzer',
      description: 'Technical indicators (RSI/MACD), watchlist and alerts.',
      tags: ['• Python', '• Kivy', '• yfinance', '• Matplotlib'],
      cover: acoeskivi,
      href: 'https://github.com/gedalyas/Analise-a-es.git'
    },
    {
      title: 'PDF → Excel Converter',
      description: 'Extract tables with pdfplumber and export .xlsx.',
      tags: ['• Python', '• pdfplumber', '• openpyxl', '• Pandas'],
      cover: codigopdf,
      href: 'https://github.com/gedalyas/PDFTOEXCEL.git'
    },
    {
      title: 'Fluxo de Compras',
      description: 'Purchasing system + AI agent for price research + market news.',
      tags: ['• React', '• Node', '• SQLite', '• Perplexity API', '• GoogleAPI'],
      cover: FluxCompras,
      href: 'https://github.com/gedalyas/FluxCompras.git'
    },
    {
      title: 'Website for professional nursing training.',
      description: 'Website developed for a company specializing in hospital nursing training, first aid courses, and DEA cabinet implementation across Minas Gerais.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotomaos,
      href: 'https://www.maosbr.com'
    },
    {
      title: 'RM Engenharia e Construção',
      description: 'Website for a civil engineering company focused on projects, construction management, and credibility.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: realminas,
      href: 'https://www.realminasengenharia.com.br/'
    },
    {
      title: 'Poltrona',
      description: ' Website for a furniture store, featuring product showcases, shopping cart functionality, and secure checkout process.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: SitePoltrona,
      href: 'https://www.poltronasposcirurgicas.com/'
    },
    {
      title: 'Website for Physiotherapists',
      description: 'Professional website for a physiotherapist, focused on presenting services, strengthening authority, and generating patient leads.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotofisiogabrielapedrosa,
      href: 'https://www.fisiogabrielapedrosa.com/',
    },
    {
      title: 'Real Estate Broker',
      description: 'Professional real estate website focused on property listings, advanced search filters, and lead generation.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotodeboracorretora,
      href: 'https://www.deboragarciacorretora.com/'
    },
    {
      title: 'Real Estate Broker',
      description: 'Professional real estate website focused on property listings, advanced search filters, and lead generation.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotowalneide,
      href: 'https://www.walneidemaiacorretora.com/'
    },
    {
      title: 'Real Estate Broker',
      description: 'Professional real estate website focused on property listings, advanced search filters, and lead generation.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotogiovana,
      href: 'https://www.giovanasaudeimoveis.com/'
    },
    {
      title: 'Hotel Praia da Paixão',
      description: 'Professional hotel website focused on showcasing the experience, accommodations, and driving direct reservations.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: fotositepraiapaixao,
      href: 'https://www.praiadapaixao.com.br/'
    },
    
    {
      title: 'JVR Imóveis',
      description: 'Real estate website built to showcase listings, strengthen local presence, and generate leads.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: jvrimoveis,
      href: 'https://www.jvrimoveis.com.br/'
    },
    
    
    {
      title: 'TechZafe',
      description: 'Digital studio focused on websites, systems, e-commerce, and automations for business growth.',
      tags: ['• TypeScript', '• Tailwind CSS', '• HTML', '• React'],
      cover: techzafe,
      href: 'https://www.techzafe.com/'
    },
    {
      title: 'Suplementos Dudu',
      description: 'Supplement store built to drive sales with a strong catalog, offers, and a smooth buying flow.',
      tags: ['• JavaScript', '• CSS', '• HTML', '• Liquid'],
      cover: suplementosdudu,
      href: 'https://www.suplementosdudu.com./'
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
