import React from "react";
import "../design/Home.css";
import SocialIcons from "../components/SocialIcons";
import Localization from "../components/Localization";
import Menu from "../components/Menu";
import UnifiedCard from "../components/UnifiedCard";
import { TbWorldCode } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { AiFillOpenAI } from "react-icons/ai";

export default function Home() {
  return (
    <div className="tela-bem-vindo">
      <div className="home-content">
        {/* BLOCO HERO = títulos + cards (verticalmente centralizados) */}
        <section className="hero" aria-label="Introdução e atalhos">
          <h1 className="frase-animada">
            {"Hello there , my name is".split("").map((letra, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                {letra}
              </span>
            ))}
          </h1>

          <p className="intro-text frase-animada">
            {"Davi  Almeida".split("").map((letra, index) => (
              <span key={index} style={{ animationDelay: `${(index + 25) * 0.05}s` }}>
                {letra}
              </span>
            ))}
          </p>

          <p className="additional-text frase-animada">
            {"App developer in Brazil".split("").map((letra, index) => (
              <span key={index} style={{ animationDelay: `${(index + 50) * 0.05}s` }}>
                {letra}
              </span>
            ))}
          </p>

          <div className="icones-container">
            <UnifiedCard icon={<TbWorldCode />} backText="Web Dev" />
            <UnifiedCard icon={<GoGraph />} backText="Data Scientist" />
            <UnifiedCard icon={<AiFillOpenAI />} backText="IA Developer" />
          </div>
        </section>

        {/* Meta */}
        <SocialIcons />
        <Localization />
      </div>

      {/* Menu lateral */}
      <Menu />
    </div>
  );
}
