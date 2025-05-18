import React from 'react';
import '../design/Home.css';
import SocialIcons from './SocialIcons';
import Localization from './Localization';
import Card from './Card';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
import Menu from'./Menu';

function Home() {
    return (
        <div className="tela-bem-vindo">
            <h1 className="frase-animada">
                {"Hello there , my name is".split("").map((letra, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.05}s` }} >
                        {letra}
                    </span>
                ))}
            </h1>

            <p className="intro-text frase-animada">
                {"Davi  Almeida".split("").map((letra, index) => (
                    <span key={index} style={{ animationDelay: `${(index + 25) * 0.05}s` }} >
                        {letra}
                    </span>
                ))}
            </p>

            <p className="additional-text frase-animada">
                {"App developer in Brazil".split("").map((letra, index) => (
                    <span key={index} style={{ animationDelay: `${(index + 50) * 0.05}s` }} >
                        {letra}
                    </span>
                ))}
            </p>

            <div className="icones-container">
                <Card />
                <CardTwo />
                <CardThree />
            </div>
            <SocialIcons />
            <Localization />
            <Menu/>
        </div>
    );
}

export default Home;
