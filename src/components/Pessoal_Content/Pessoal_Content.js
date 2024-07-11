import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #container{
        width: 90%;
        height: 1030px;
        border: 3px #ffffff solid;
        margin: auto;
        padding: 0;
    }

    #top{
        display: flex;
        position: relative;
        text-align: center;
        width: 100%;
    }

    #me{
        width: 300px;
        margin: 30px 0 0 32px;
    }

    #img1{
        width: 200px;
        margin: 30px 0 0 32px;
    }

    #img2{
        width: 400px;
        margin: 30px 0 0 32px;
    }

    #brilho{
        width: 100px;
        position: absolute;
        bottom: -70px;
        left: 40px;
    }

    #texto{
        font-family: Manolete;
        font-size: 100px;
        color: #ffffff;
        position: absolute;
        bottom: -100px;
        left: 280px;
        -webkit-transform:scale(1.5,1);
    }

    #brilho2{
        width: 100px;
        position: absolute;
        bottom: -60px;
        right: 40px;
    }

    #me2{
        width: 965px;
        margin: 30px 0 0 32px;
    }

    #container_sobre{
        margin: 30px 0 0 32px;
        border: 3px solid #ffffff;
        display: flex;
        width: 965px;
        height: 400px;
    }

    #sobre_icons{
        margin: 20px 0 0 20px;
        border: 3px solid #ffffff;
        width: 100px;
        height: 355px;
        padding: 0 10px 10px 10px;
    }

    #icon{
        width: 75px;
        border: 2px solid #ffffff;
        margin-top: 5px;
    }

    #icon2{
        width: 75px;
        margin-top: 5px;
    }

    #sobre_texto{
        color: #ffffff;
        font-family: TTAutonomous;
        font-size: 30px;
        margin: 20px 0 0 20px;
        text-align: justify;
        width: 790px;
    }
`
export function Pessoal_Content() {
    return (
        <Container>
            <div id="container">
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
                        <img id="icon" src={require("../../images/mundo.png")} />
                        <img id="icon2" src={require("../../images/triangulo.png")} />
                        <img id="icon" src={require("../../images/redemoinho.png")} />
                        <img id="icon2" src={require("../../images/planeta.png")} />
                    </div>
                    <h1 id="sobre_texto">Nasci em Jaraguá do Sul - Santa Catarina em 29 de maio de 2003, tenho 21 anos</h1>
                </div>
            </div>
        </Container>
    );
}