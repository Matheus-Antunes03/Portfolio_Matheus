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
                <h1 id="sobre_texto">Nasci em Jaraguá do Sul - Santa Catarina em 29 de maio de 2003, tenho 21 anos</h1>
            </div>
        </div>
    );
}