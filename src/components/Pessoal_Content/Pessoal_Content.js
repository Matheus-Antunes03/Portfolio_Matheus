import React from 'react';
import styles from './Pessoal_Content.css';

export function Pessoal_Content() {
    return (
        <div id="container_pessoal">
            <div id="images">
                <div id="top">
                    <img id="img1" src={require("../../images/img1.png")} />
                    <img id="me" src={require("../../images/me.png")} />
                    <img id="img2" src={require("../../images/img2.png")} />
                    <img id="brilho" src={require("../../images/brilho4.png")} />
                    <h1 id="texto">SOBRE MIM</h1>
                    <img id="brilho2" src={require("../../images/brilho4.png")} />
                </div>
                <img id="me2" src={require("../../images/me2.png")} />
            </div>
            <div id="container_sobre">
                <div id="sobre_icons">
                    <img id="icon1" src={require("../../images/mundo.png")} />
                    <img id="icon2" src={require("../../images/triangulo.png")} />
                    <img id="icon1" src={require("../../images/redemoinho.png")} />
                    <img id="icon2" src={require("../../images/planeta.png")} />
                </div>
                <h1 id="sobre_texto">Nasci em Jaraguá do Sul - Santa Catarina, em 29 de maio de 2003, moro aqui desde então, tenho 21 anos. Sou apaixonado por arte, de todo todo tipo, principalmente música e desenho. Porém também gosto de lógica, por isso me atraí pela programação. Minha parte favorita da programação é o front-end e o design, já que consigo misturar a lógica com a arte. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na faculdade UniSenai.</h1>
            </div>
            <div id="container_desenhos">
                <div id="icons_desenho">
                    <img id="icon_desenho" src={require("../../images/lua.png")} />
                    <img id="icon_desenho" src={require("../../images/nuvem.png")} />
                    <img id="icon_desenho" src={require("../../images/brilho5.png")} />
                    <h1 id="desenhos">Desenhos</h1>
                    <img id="icon_desenho" src={require("../../images/brilho5.png")} />
                    <img id="icon_desenho" src={require("../../images/nuvem.png")} />
                    <img id="icon_desenho" src={require("../../images/lua.png")} />
                </div>
                <h1 id="texto_desenhos">O principal hobbie que tenho é desenhar. Sempre fui muito elogiado pela minha criatividade e adoro explorá-la desenhando. Quando surge uma inspiração muito forte, coloco ela no papel e vou desenvolvendo.</h1>
                <div id="desenhos_images">
                    <img id="bruxa" src={require("../../images/bruxa.jpg")} />
                    <img id="jodio" src={require("../../images/jodio.png")} />
                    <img id="weather" src={require("../../images/weather.jpg")} />
                    <img id="akkira" src={require("../../images/akkira.png")} />
                </div>
            </div>
        </div>
    );
}