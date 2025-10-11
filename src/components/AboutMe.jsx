import React, { useEffect } from 'react';
import '../design/AboutMe.css';
import Menu from './Menu';
import FotoPrimeira from '../assets/images/FotoPrimeira.jpg';
import fotfut from '../assets/images/fotfut.jpg';
import fotorj from '../assets/images/fotorj.jpg';
import fotopraia from '../assets/images/fotopraia.jpg';
import WebIcon from './WebIcon';
import IaIcon from './IaIcon';
import DataIcon from './DataIcon';
import AutIcon from './AutIcon';
import { Link } from 'react-router-dom';
import Chat from './Chat';

function AboutMe() {
  useEffect(() => {
    // Bloqueia apenas o scroll horizontal
    document.body.style.overflowX = "hidden";

    return () => {
      // Libera o scroll horizontal quando o componente for desmontado
      document.body.style.overflowX = "auto";
    };
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll('.img');
    const aboutRightSecP = document.querySelector('.about-rightsec p');
    const skillsH2 = document.querySelector('.about-skills h2');
    const skillsP = document.querySelector('.about-skills p');
    const langH2 = document.querySelector('.about-lang h2');
    const toolsH2 = document.querySelector('.about-tools h2');
    const langP = document.querySelector('.about-lang p');
    const toolsP = document.querySelector('.about-tools p');
    const educationH2 = document.querySelector('.about-education h2');
    const educationH3 = document.querySelectorAll('.about-education h3');
    const educationP = document.querySelectorAll('.about-education p');
    const experienceH2 = document.querySelector('.about-experience h2');
    const experienceH3 = document.querySelectorAll('.about-experience h3');
    const experienceP = document.querySelectorAll('.about-experience p');
    const mainSeven = document.querySelector('.main-seven');
    const seeProjects = document.querySelector('.see-projects');
    const seeContact = document.querySelector('.see-contact');

    const handleScroll = () => {
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          img.classList.add('visible');
        }
      });

      if (aboutRightSecP) {
        const rect = aboutRightSecP.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          aboutRightSecP.classList.add('visible');
        }
      }

      if (skillsH2) {
        const rect = skillsH2.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          skillsH2.classList.add('visible');
        }
      }

      if (skillsP) {
        const rect = skillsP.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          skillsP.classList.add('visible');
        }
      }
      if (langH2) {
        const rect = langH2.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          langH2.classList.add('visible');
        }
      }

      if (toolsH2) {
        const rect = toolsH2.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          toolsH2.classList.add('visible');
        }
      }
      if (langP) {
        const rect = langP.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          langP.classList.add('visible');
        }
      }
      if (toolsP) {
        const rect = toolsP.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          toolsP.classList.add('visible');
        }
      }
      if (educationH2) {
        const rect = educationH2.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          educationH2.classList.add('visible');
        }
      }
      if (experienceH2) {
        const rect = experienceH2.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          experienceH2.classList.add('visible');
        }
      }
      educationH3.forEach((h3) => {
        const rect = h3.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          h3.classList.add('visible');
        }
      });
      educationP.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          p.classList.add('visible');
        }
      });
      experienceH3.forEach((h3) => {
        const rect = h3.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          h3.classList.add('visible');
        }
      });
      experienceP.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          p.classList.add('visible');
        }
      });
      if (mainSeven) {
        const rect = mainSeven.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          mainSeven.classList.add('visible');
        }
      }
      if (seeProjects) {
        const rect = seeProjects.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          seeProjects.classList.add('visible');
        }
      }
      if (seeContact) {
        const rect = seeContact.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          seeContact.classList.add('visible');
        }
      }

    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: 670, // para mudar o tanto do scroll, basta alterar esse valor
      left: 0,
      behavior: 'smooth'
    });
  };

  
  return (
    // 2. USE UM FRAGMENTO DO REACT (<>) PARA ENVOLVER TUDO
    <>
      {/* SEU CÓDIGO DA PÁGINA FICA EXATAMENTE COMO ESTAVA, DENTRO DESTE DIV */}
      <div className="about-container">
        <header className="main-header">

        </header>

        <Menu />
        <div className="about-main">
          <div className="about-left">
            <h2>About Me</h2>
            <div className="underline">
              <div className="line short"></div>
              <div className="line long"></div>
            </div>
            <p>A brief introduction about me and my interest.</p>
            <button className="scroll-button" onClick={scrollDown}>Scroll Down</button>
          </div>

          <div className="about-right">
            <img src={FotoPrimeira} alt="Minha foto" className="about-image" />
          </div>
        </div>


        <div className="about-mainsecond">
          <div className="about-who">
            <h2>Who I Am?</h2>
            <div className="underline-sec">
              <div className="line short-sec"></div>
              <div className="line long-sec"></div>
            </div>
            <div className="collage-container">
              <img src={fotopraia} alt="Imagem 1" className="img img1" />
              <img src={fotorj} alt="Imagem 2" className="img img2" />
              <img src={fotfut} alt="Imagem 3" className="img img3" />
            </div>
          </div>

          <div className="about-rightsec">
            <h2>Davi Almeida</h2>
            <p>
              Hey there, I’m <strong>Davi Almeida</strong>, a <strong>tech enthusiast</strong> and <strong>aspiring Web Developer</strong>. Originating from Brazil, in the city of Ipatinga, I’m currently embarking on a fascinating journey at <strong>Unileste University</strong>, where I’m pursuing my degree in <strong>Computer Science</strong>.
              My passion for technology and coding knows no bounds. I’m constantly exploring new areas like design, data science, and the ever-evolving world of AI. I believe that in today’s fast-paced digital landscape, being a <strong>lifelong learner</strong> is not just a choice but a necessity.
              Outside of tech, I’m passionate about sports, especially soccer, fitness, and competitive games. These activities fuel my drive, discipline, and teamwork, which I also carry into my professional life.
              Let’s connect and explore this dynamic world of tech (and maybe even sports) together!
            </p>
          </div>
        </div>
        <div className="about-mainthird">
          <div className="about-skills">
            <h2>Skills and Expertise</h2>
            <p>Explore some skills I'm proficient in to deliver high-quality solutions.</p>
            <div className="area-icons">
              <WebIcon />
              <IaIcon />
              <DataIcon />
              <AutIcon />
            </div>
          </div>
        </div>
        <div className="about-mainquard">
          <div className="about-lang">
            <h2>LANGUAGE & FRAMEWORK</h2>
            <p><strong>HTML</strong> | <strong>CSS</strong> | <strong>javascript</strong> | Typescript | <strong>React</strong> | NodeJS | TailwindCSS | <strong>MySQL</strong> |
              PostgreSQL | MongoDB | <strong>Python</strong> | VBA | <strong>R</strong> | Pandas | Quantib | Yfinance | Matplotlib </p>

          </div>
          <div className="about-tools">
            <h2>TOOLS</h2>
            <p><strong>Git</strong> | <strong>GitHub</strong> | <strong>Figma</strong> | Canva | <strong>VSCode</strong> | <strong>Excel</strong> | <strong>Jupyter</strong> | Apache Net Beans | <strong>MySql Workbench</strong> | Power Bi</p>

          </div>
        </div>
        <div className="about-mainfive">
          <div className="about-education">
            <div className="underline-five">
              <div className="line short-five"></div>
              <div className="line long-five"></div>
            </div>
            <h2>Education</h2>
            <ul>
              <li>
                <h3>College União Acadêmica de Minas Gerais</h3>
                <p>Bachelor’s in Computer Science (2024 - 2027)</p>
              </li>
              <li>
                <h3>Network Defense Course - Cisco</h3>
                <p>Network monitoring and protection techniques, including access control, firewalls, cloud security and encryption. Assessing and responding to security alerts. (2025)</p>
              </li>
              <li>
                <h3>Figma Course – Catholic University of Brasília</h3>
                <p>Training in prototype creation and design for commercial projects and prototypes.</p>
              </li>
            </ul>
          </div>
          <div className="about-experience">
            <div className="underline-fivetwo">
              <div className="line short-fivetwo"></div>
              <div className="line long-fivetwo"></div>
              <h2>Experience</h2>
              <ul>
                <li>
                  <h3>Purchasing Manager - Enterprise Comercial JK Casa dos Parafusos</h3>
                  <p>I work in purchasing management with a focus on demand analysis and defining commercial strategies based on seasonality, with the aim of optimizing inventory and maximizing profits throughout the year. I develop automation solutions using SQL for data storage and manipulation, integrating with VBA in Excel for efficient extraction and visualization of information, facilitating strategic decision-making. (2023 - presente)</p>
                </li>
                <li>
                  <h3>Web Developer - Freelancer</h3>
                  <p> Development of a small business focused on creating custom software solutions for clients, with involvement in all stages of the process from client acquisition to final delivery of results.
                    Current project: building an industrial monitoring system that integrates sensors installed on a partner company's machine with an API, using the incoming data for real-time visualization.
                    Python is used for handling API data, and React is used for the front-end interface.(2025)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-six">
          <h2>
            <strong>"There are no limits to what you can accomplish</strong>
          </h2>
          <p>except the limits you place on your own thinking."</p>
        </div>
        <div className="main-seven">
          <h1>Ready to create something amazing?</h1>
          <div className="path-container">
            <div className="main-seven-row">
              <div className="cta-card" data-path="left">
                <Link to="/projects">
                  <span className="icon">🚀</span>
                  <h2>Explore My Work</h2>
                  <p>See detailed case studies</p>
                </Link>
              </div>
              <div className="cta-card light" data-path="right">
                <Link to="/contact">
                  <span className="icon">✨</span>
                  <h2>Start a Project</h2>
                  <p>Let's build together</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">DA</span>
              <p className="footer-tagline">Turning ideas into digital experiences</p>
            </div>

            <div className="footer-social">
              <a href="https://github.com/gedalyas" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="http://www.linkedin.com/in/davi-alsouto" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:davialsouto@email.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Davi Almeida. All rights reserved.</p>
          </div>
        </footer>

      </div>

      
      <Chat />
    </>
  );
}

export default AboutMe;