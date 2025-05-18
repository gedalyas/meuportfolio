import React, { useEffect } from 'react';
import '../design/AboutMe.css';
import Menu from './Menu';
import FotoPrimeira from '../assets/images/FotoPrimeira.jpg';
import fotfut from '../assets/images/fotfut.jpg';
import fotorj from '../assets/images/fotorj.jpg';
import fotoufv from '../assets/images/fotoufv.jpg';
import Spot from './Spot';
import '../design/Spot.css';
import WebIcon from './WebIcon';
import IaIcon from './IaIcon';
import DataIcon from './DataIcon';
import AutIcon from './AutIcon';

function AboutMe() {
  // ...existing code...
useEffect(() => {
  const images = document.querySelectorAll('.img');
  const aboutRightSecP = document.querySelector('.about-rightsec p');
  const skillsH2 = document.querySelector('.about-skills h2');
  const skillsP = document.querySelector('.about-skills p');

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
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="about-container">
      <Menu />
      <div className="about-main">
        <div className="about-left">
          <h2>About Me</h2>
          <div className="underline">
            <div className="line short"></div>
            <div className="line long"></div>
          </div>
          <p>A brief introduction about me and my interest.</p>
          <button className="scroll-button">Scroll Down</button>
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
            <img src={fotoufv} alt="Imagem 1" className="img img1" />
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
      <Spot />
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
    </div>
  );
}

export default AboutMe;