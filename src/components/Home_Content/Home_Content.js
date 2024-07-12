import React from 'react';
import styles from './Home_Content.css';

export function Home_Content() {
    return (
        <div id="container_home">
            <div id="top_page">
                <img id="barcode_home" src={require("../../images/barcode.png")} />
                <img id="barcode_home" src={require("../../images/barcode.png")} />
                <h1 id="introducao">Este é um projeto de um portfólio para a aula de Desenvolvimento WEB do professor Elton Zierhut. Desenvolvido em React com o design brutalismo.</h1>
                <div id="icons_home">
                    <img id="icon_home" src={require("../../images/mundo.png")} />
                    <img id="icon_home" src={require("../../images/sistema.png")} />
                    <img id="icon_home" src={require("../../images/roda.png")} />
                </div>
            </div>
            <div id="container2">
                <img id="hands" src={require("../../images/hands.png")} />
                <h1 id="descricao">Neste site falarei sobre minhas experiências profissionais, trabalhos que desenvolvi, em quais áreas e habilidades me destaco e também sobre meu pessoal.</h1>
                <img id="mola" src={require("../../images/mola.png")} />
            </div>
            <div id="buttons">
                <a id="button" href="./experiencias"><img id="button_icon" src={require("../../images/estrelas.png")} />EXPERIÊNCIAS</a>
                <a id="button" href="./habilidades"><img id="button_icon" src={require("../../images/olho.png")} />HABILIDADES</a>
                <a id="button" href="./pessoal"><img id="button_icon" src={require("../../images/cabeca.png")} />PESSOAL</a>
            </div>
            <div id="olhos_trabalhos">
                <img id="olhos" src={require("../../images/olhos.png")} />
                <h1 id="trabalhos">Meus Trabalhos</h1>
            </div>
        </div>
    );
}