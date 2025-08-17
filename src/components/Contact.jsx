import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';
import FotoSetup from'../assets/images/FotoSetup.jpg';
import "../design/contact.css";
import Menu from './Menu';
import {useEffect} from 'react';

function Contact() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return() => {
      document.body.style.overflow = "auto";
    };
  },[]);  
  return (
    <div className="contact-container">
      <Menu />
      <div className="contact-left">
        <h2><strong>Get in Touch</strong></h2>
        <p>Let’s connect! Find me on the platforms below:</p>
        <div className="contact-icons">
          <a href="https://www.instagram.com/davisouto.a?igsh=MWttZzdqZjBocXRwdw==" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/davi-alsouto" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin />
          </a>
          <a href="mailto:davialsouto@gmail.com" className="icon-link">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/5531993112726?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20serviços" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/gedalyas" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <img src={FotoSetup} alt="My Setup" className="setup-image" />
      </div>
    </div>
  );
}

export default Contact;
