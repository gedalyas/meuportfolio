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
    }
  }, []);

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
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
          <ProjectOne />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Projects;
