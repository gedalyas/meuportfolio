import React, { useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa';
import FotoSetup from '../assets/images/FotoSetup.jpg';
import "../design/Contact.css";
import Menu from './Menu';

function Contact() {
  // Bloqueia scroll só enquanto a página de contato está ativa
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <main className="contact-container" role="main">
      <Menu />

      <section className="contact-left" aria-labelledby="contact-title">
        <h2 id="contact-title"><strong>Get in Touch</strong></h2>
        <p>Let’s connect! Find me on the platforms below:</p>

        <nav className="contact-icons" aria-label="Social links">
          <a
            href="https://www.instagram.com/davisouto.a?igsh=MWttZzdqZjBocXRwdw=="
            target="_blank" rel="noopener noreferrer"
            className="icon-link" aria-label="Instagram de Davi Souto"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/davi-alsouto"
            target="_blank" rel="noopener noreferrer"
            className="icon-link" aria-label="LinkedIn de Davi Souto"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:davialsouto@gmail.com"
            className="icon-link" aria-label="Enviar email para davialsouto@gmail.com"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/5531993112726?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os"
            target="_blank" rel="noopener noreferrer"
            className="icon-link" aria-label="WhatsApp de Davi Souto"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://github.com/gedalyas"
            target="_blank" rel="noopener noreferrer"
            className="icon-link" aria-label="GitHub de Davi Souto"
          >
            <FaGithub />
          </a>
        </nav>
      </section>

      <aside className="contact-right">
        <img
          src={FotoSetup}
          alt="Foto do meu setup de trabalho"
          className="setup-image"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </aside>
    </main>
  );
}

export default Contact;
