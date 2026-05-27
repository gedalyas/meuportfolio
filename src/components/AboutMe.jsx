import React, { useEffect, useRef } from 'react';
import '../design/AboutMe.css';
import Menu from './Menu';
import FotoPrimeira from '../assets/images/FotoPrimeira.jpg';
import fotorj from '../assets/images/fotorj.jpg';
import fotopraia from '../assets/images/fotopraia.jpg';
import WebIcon from './WebIcon';
import IaIcon from './IaIcon';
import DataIcon from './DataIcon';
import AutIcon from './AutIcon';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import logodavi from '../assets/images/logo-redonda.png';

const languages = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Next.js', 'TailwindCSS', 'MySQL', 'PostgreSQL', 'Python', 'VBA',
  'Pandas', 'Yfinance', 'Matplotlib',
];

const tools = [
  'Git', 'GitHub', 'Figma', 'Canva', 'VSCode', 'Excel',
  'Jupyter', 'Apache NetBeans', 'MySQL Workbench', 'Power BI', 'Thunder Client',
];

function AboutMe() {
  const whoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = 'auto'; };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="about-container">
        <Menu />

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-text">
            <span className="hero-badge">Software Engineer</span>
            <h1>About Me</h1>
            <div className="hero-underline">
              <span className="hu-short" />
              <span className="hu-long" />
            </div>
            <p>A brief introduction about me and my interests.</p>
            <button
              className="scroll-btn"
              onClick={() => whoRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scroll Down ↓
            </button>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrap">
              <img src={FotoPrimeira} alt="Davi Almeida" />
            </div>
          </div>
        </section>

        {/* WHO I AM */}
        <section className="who-section" ref={whoRef}>
          <div className="who-left reveal">
            <h2 className="who-title">Who I Am?</h2>
            <div className="photos-grid">
              <img src={fotorj}    alt="Rio de Janeiro" className="col-img" />
              <img src={fotopraia} alt="Praia"          className="col-img" />
            </div>
            <div className="who-cards">
              <div className="who-card">
                <span className="wc-icon">💼</span>
                <div>
                  <strong>Software Engineer</strong>
                  <p>TECHzafe · 2025–Present</p>
                </div>
              </div>
              <div className="who-card">
                <span className="wc-icon">🎓</span>
                <div>
                  <strong>CS Student</strong>
                  <p>União Acadêmica · 2024–2027</p>
                </div>
              </div>
            </div>
          </div>

          <div className="who-right reveal">
            <h2>Davi Almeida</h2>
            <p>
              Hey, I'm <strong>Davi Almeida</strong>, a <strong>Software Engineer</strong> from
              Brazil. I currently work at <strong>TECHzafe</strong>, building{' '}
              <strong>websites, e-commerce platforms, systems, automations, and integrations</strong>{' '}
              for different business contexts.
            </p>
            <p>
              My experience involves creating projects from scratch, structuring digital solutions
              that help companies strengthen their online presence, improve operations, and support
              sales processes with more efficiency.
            </p>
            <p>
              I work with <strong>React, Node.js, JavaScript, APIs, and integrations</strong>,
              focusing on solutions that combine technical structure, practical usability, and real
              business application.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section">
          <div className="section-header reveal">
            <h2>Skills &amp; Expertise</h2>
            <p>Explore some skills I'm proficient in to deliver high-quality solutions.</p>
          </div>
          <div className="skills-grid reveal">
            <WebIcon />
            <IaIcon />
            <DataIcon />
            <AutIcon />
          </div>
        </section>

        {/* LANGUAGES & TOOLS */}
        <section className="tech-section">
          <div className="tech-block reveal">
            <h2>Languages &amp; Frameworks</h2>
            <div className="tag-list">
              {languages.map((l) => <span key={l} className="tag">{l}</span>)}
            </div>
          </div>
          <div className="tech-block reveal">
            <h2>Tools</h2>
            <div className="tag-list">
              {tools.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE */}
        <section className="timeline-section">
          <div className="tl-col reveal">
            <h2 className="tl-title">Education</h2>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot" />
                <div className="tl-body">
                  <h3>College União Acadêmica de Minas Gerais</h3>
                  <span className="tl-period">2024 – 2027</span>
                  <p>Bachelor's in Computer Science</p>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot" />
                <div className="tl-body">
                  <h3>Network Defense – Cisco</h3>
                  <span className="tl-period">2025</span>
                  <p>Network monitoring, access control, firewalls, cloud security and encryption.</p>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot" />
                <div className="tl-body">
                  <h3>Figma Course – Catholic University of Brasília</h3>
                  <p>Prototype creation and design for commercial projects.</p>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot" />
                <div className="tl-body">
                  <h3>Gestor AIA</h3>
                  <p>Applied AI: prompts, agents, n8n/APIs, ROI, real projects and playbooks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tl-col reveal">
            <h2 className="tl-title tl-title--exp">Experience</h2>
            <div className="timeline">
              <div className="tl-item">
                <div className="tl-dot tl-dot--exp" />
                <div className="tl-body">
                  <h3>Software Engineer – TECHzafe</h3>
                  <span className="tl-period">2025 – Present</span>
                  <p>
                    Building websites, e-commerce, systems, automations, and integrations.
                    React, Node.js, JavaScript, Shopify, APIs.
                  </p>
                </div>
              </div>
              <div className="tl-item">
                <div className="tl-dot tl-dot--exp" />
                <div className="tl-body">
                  <h3>Purchasing Manager – JK Casa dos Parafusos</h3>
                  <span className="tl-period">2023 – Present</span>
                  <p>
                    Demand analysis, inventory planning, SQL/VBA automation in Excel for data
                    storage, manipulation, and visualization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <div className="quote-section">
          <div className="quote-inner">
            <span className="quote-mark">&#8220;</span>
            <blockquote className="quote-text">
              <p>There are no limits to what you can accomplish</p>
              <p>except the limits you place on your own thinking.</p>
            </blockquote>
          </div>
        </div>

        {/* CTA */}
        <section className="cta-section reveal">
          <h2>Ready to create something amazing?</h2>
          <div className="cta-row">
            <div className="cta-card">
              <Link to="/projects">
                <span className="cta-icon">🚀</span>
                <h3>Explore My Work</h3>
                <p>See detailed case studies</p>
              </Link>
            </div>
            <div className="cta-card">
              <Link to="/contact">
                <span className="cta-icon">✨</span>
                <h3>Start a Project</h3>
                <p>Let's build together</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="main-footer">
          <div className="footer-inner">
            <img src={logodavi} alt="Logo Davi Almeida" className="footer-logo" />
            <div className="footer-social">
              <a href="https://github.com/gedalyas" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github" />
              </a>
              <a href="http://www.linkedin.com/in/davi-alsouto" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:davialsouto@email.com" className="social-link">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Davi Almeida. All rights reserved.</p>
        </footer>
      </div>

      <Chat />
    </>
  );
}

export default AboutMe;
