import React from 'react';
import styled from 'styled-components';

const Container = styled.div`        
    #container{
        width: 90%;
        height: 930px;
        border: 3px #ffffff solid;
        display: block;
        margin: auto;
        padding: 0;
    }

    #top_page{
        display: flex;
    }

    #barcode{
        width: 100px;
        height: 95px;
        margin: 5px 0 0 3px;
    }

    #introducao{
        font-family: TTAutonomous;
        color: #ffffff;
        font-size: 20px;
        margin: 10px 10px 0 10px;
        width: 557px;
        height: 100px;
        text-align: justify;
    }

    #icons{
        width: 240px;
        height: 100px;
        margin-top: 13px;
    }

    #icon{
        width: 80px;
    }

    #container2{
        width: 90%;
        height: 220px;
        border: 3px #ffffff solid;
        display: flex;
        margin: 30px auto auto auto;
        padding: 0;
    }

    #hands{
        width: 300px;
        height: 180px;
        margin: 20px 0 0 20px;
    }

    #descricao{
        font-family: TTAutonomous;
        color: #ffffff;
        font-size: 20px;
        margin: 20px 0 0 20px;
        width: 530px;
        height: 100px;
        text-align: justify;
    }

    #mola{
        width: 160px;
        height: 190px;
        margin: 10px 10px 0 10px;
    }

    #buttons{
        width: 90%;
        height: 160px;
        display: flex;
        margin: 50px auto auto auto;
        padding: 0;
        justify-content: space-between;
    }

    #button{
        width: 150px;
        height: 150px;
        background-color: #202020;
        outline: none;
        border: 4px solid #ffffff;
        cursor: pointer;
        transition: 0.3s;
        color: #ffffff;
        text-align: center;
        font-family: Manolete;
        font-size: 19px;
    }

    #button:hover{
        border: 4px solid #aa00ff;
        background-color: #aa00ff;
        transform: translateY(-10px);
        box-shadow: #4300ca 0 7px 29px 0;
    }

    #button_icon{
        width: 80px;
        height: 80px;
        transition: 0.2s;
        margin: 10px 0 10px 0;
    }

    buttonslabel{
        display: flex;
    }

    #olhos_trabalhos{
        display: flex;
        position: relative;
        text-align: center;
        width: 100%;
    }

    #olhos{
        width: 90%;
        display: block;
        margin: 50px auto auto auto;
    }

    #trabalhos{
        color: #ffffff;
        position: absolute;
        bottom: -65px;
        left: 140px;
        font-family: Protest;
    }
`

export function Home_Content() {
    return (
        <Container>
            <div id="container">
                <div id="top_page">
                    <img id="barcode" src={require("../../images/barcode.png")} />
                    <img id="barcode" src={require("../../images/barcode.png")} />
                    <h1 id="introducao">Este é um projeto de um portfólio para a aula de Desenvolvimento WEB do professor Elton Zierhut. Desenvolvido em React com o design brutalismo.</h1>
                    <div id="icons">
                        <img id="icon" src={require("../../images/mundo.png")} />
                        <img id="icon" src={require("../../images/sistema.png")} />
                        <img id="icon" src={require("../../images/roda.png")} />
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
        </Container>
    );
}