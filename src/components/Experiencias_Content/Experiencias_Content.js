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

    #malwee{
        display: flex;
    }

    #malwee_logo{
        width: 300px;
        height: 400px;
        margin: 30px 0 0 30px;
    }

    #malwee_descricao{
        text-align: justify;
    }

    #titulo_malwee{
        color: #ffffff;
        font-family: Manolete;
        float: right;
        margin: 23px 5px 0 0;
    }

    #texto_malwee{
        color: #ffffff;
        font-family: TTAutonomous;
        font-size: 20px;
        margin: 95px 5px 0 20px;
    }

    #ano_malwee{
        height: 400px;
        margin: 30px 18px 0 10px;
    }

    #divisao{
        width: 94.5%;
        height: 110px;
        border: 3px #ffffff solid;
        display: flex;
        margin: 30px auto 30px auto;
        padding: 0;
    }

    #grid{
        width: 400px;
        height: 100px;
        margin-top: 3px;
    }

    #recomendacao{
        color: #ffffff;
        font-family: TTAutonomous;
        font-size: 20px;
        margin: 7px 0 0 0;
        text-align: justify;
    }

    #cast{
        display: flex;
    }

    #ano_cast{
        height: 400px;
        margin: 0 0 0 20px;
    }

    #titulo_cast{
        color: #ffffff;
        font-family: Manolete;
        float: left;
        margin: 0 0 0 20px;
    }

    #texto_cast{
        color: #ffffff;
        font-family: TTAutonomous;
        font-size: 20px;
        margin: 70px 10px 0 20px;
        text-align: justify;
    }

    #cast_logo{
        width: 300px;
        height: 400px;
        margin: 0 30px 0 10px;
    }
`
export function Experiencias_Content() {
    return (
        <Container>
            <div id="container">
                <div id="malwee">
                    <img id="malwee_logo" src={require("../../images/malwee_logo.jpg")} />
                    <div id="malwee_descricao">
                        <h1 id="titulo_malwee">MALWEE</h1>
                        <p id="texto_malwee">Trabalhei na empresa têxtil Malwee como jovem aprendiz, cursando Desenvolvedor de Sistemas em paralelo no SENAI. A partir de dezembro de 2021, iniciei no cargo de Programador ABAP, atuei em manutenção de códigos, desenvolvimento de programas, realização de demandas em contato direto com
                        os usuários e programação de etiquetas Zebra ZPL.</p>
                    </div>
                    <img id="ano_malwee" src={require("../../images/ano_malwee.png")} />
                </div>
                <div id="divisao">
                <img id="grid" src={require("../../images/grid.png")} />
                <h1 id="recomendacao">Ao final do meu contrato de Jovem Aprendiz com a Malwee, através da recomendação dos meus superiores, ingressei na empresa Cast.</h1>
                <img id="brilho" src={require("../../images/brilho.png")} />
                </div>
                <div id="cast">
                    <img id="ano_cast" src={require("../../images/ano_cast.png")} />
                    <div>
                        <h1 id="titulo_cast">CAST</h1>
                        <p id="texto_cast">Trabalhei na Cast, uma empresa de consultoria, como Programador ABAP Trainee. Atuei no suporte, atendimento de chamados e demandas, manutenção de códigos e desenvolvimento
                        de programas e no projeto de implantação do SAP S4/HANA para a empresa Docol. Trabelhei de forma remota, porém, estive presencial 2 vezes na Docol em Joinville durante o projeto.</p>
                    </div>
                    <img id="cast_logo" src={require("../../images/cast_logo.jpg")} />
                </div>
            </div>
        </Container>
    );
}