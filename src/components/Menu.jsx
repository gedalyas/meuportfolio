import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconHome from '../components/icones/IconHome';
import IconAbout from '../components/icones/IconAbout';
import IconProjects from '../components/icones/IconProjects';
import IconContact from '../components/icones/IconContact';
import '../design/Menu.css';

const Menu = () => {
  const location = useLocation();

  return (
    <div className="nav">
      <div className="container">
        <Link to="/" className={`btn ${location.pathname === '/' ? 'active' : ''}`}>
          <IconHome />
        </Link>
        <Link to="/about" className={`btn ${location.pathname === '/about' ? 'active' : ''}`}>
          <IconAbout />
        </Link>
        <Link to="/projects" className={`btn ${location.pathname === '/projects' ? 'active' : ''}`}>
          <IconProjects />
        </Link>
        <Link to="/contact" className={`btn ${location.pathname === '/contact' ? 'active' : ''}`}>
          <IconContact />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
