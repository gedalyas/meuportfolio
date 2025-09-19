import React from "react";
import "../design/Home.css";
import SocialIcons from "../components/SocialIcons";
import Menu from "../components/Menu";
import UnifiedCard from "../components/UnifiedCard";
import { TbWorldCode } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { AiFillOpenAI } from "react-icons/ai";

export default function Home() {
  return (
    <div className="tela-bem-vindo">
      <div className="home-content">
        {/* BLOCO HERO = títulos + cards */}
        <section className="hero" aria-label="Introduction and shortcuts">
          {/* Texto contínuo (traduz corretamente) */}
          <h1 className="frase-animada type" style={{ ["--n"]: 24 }}>
            Hello there, my name is
          </h1>

          {/* Nome sem tradução */}
          <p className="intro-text">
            <span className="notranslate" translate="no">Davi Almeida</span>
          </p>

          <p className="additional-text fadein">
            App developer in Brazil
          </p>

          <div
            className="icones-container notranslate"
            translate="no"
          >
            <UnifiedCard icon={<TbWorldCode />} backText="Web Dev" />
            <UnifiedCard icon={<GoGraph />} backText="Data Scientist" />
            <UnifiedCard icon={<AiFillOpenAI />} backText="AI Developer" />
          </div>

        </section>

        <SocialIcons />
      </div>
      <Menu />
    </div>
  );
}
