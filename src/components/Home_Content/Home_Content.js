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
                <img id="rede" src={require("../../images/rede.png")} />
                <a id="button" href="./habilidades"><img id="button_icon" src={require("../../images/olho.png")} />HABILIDADES</a>
                <img id="rede" src={require("../../images/rede.png")} />
                <a id="button" href="./pessoal"><img id="button_icon" src={require("../../images/cabeca.png")} />PESSOAL</a>
            </div>
            <div id="olhos_trabalhos">
                <img id="olhos" src={require("../../images/olhos.png")} />
                <h1 id="trabalhos">Meus Trabalhos</h1>
            </div>
            <div id="ontime">
            <img id="ontime_logotipo" src={require("../../images/logotipo_ontime.jpg")} />
            <h1 id="introducao_ontime">Ontime é um projeto criado na faculdade para o concurso INOVA, uma competição nacional para projetos acadêmicos que trazem soluções inovadoras para problemas da sociedade. A ideia da OnTime é um aplicativo que conecta estabelecimentos e clientes, os estabelecimentos cadastrariam seus produtos que estão próximos á data de validade e os clientes poderiam comprá-los com os grandes descontos oferecidos pelos estabelecimentos, reduzindo desperdício, gerando lucro ao estabelecimento e levando alimentos mais baratos ao consumidor. Atualmente, o grupo OnTime passou para a fase nacional.</h1>
                <div id="app_images">
                    <img id="ontime_app" src={require("../../images/ontime1.png")} />
                    <img id="ontime_app" src={require("../../images/ontime2.png")} />
                    <img id="ontime_app" src={require("../../images/ontime3.png")} />
                    <img id="ontime_app" src={require("../../images/ontime4.png")} />
                </div>
                <h1 id="texto_ontime">Meu papel na OnTime que gostaria de destacar aqui, além de participar da idealização e todo o processo do projeto, é a criação e programação do design da nossa marca. As imagens acima são do protótipo criado por mim utilizando o site Figma, já a imagem abaixo, é o projeto WEB da OnTime, onde programei a API utilizando Javascript, banco de dados MySQL e Postman. Também programei a idealizei a grande maioria do design, utilizando React, HTML, CSS e Javascript. A OnTime versão WEB, possui um CRUD de clientes, estabelecimentos, produtos e pedidos funcional, integrando front-end, back-end e banco de dados.</h1>
                <img id="ontime_web" src={require("../../images/ontime5.png")} />
            </div>
            
        </div>
    );
}