import React from 'react';
import styles from './Experiencias_Content.css';

export function Experiencias_Content() {
    return (
        <div id="container_experiencias">
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
            <img id="grid_experiencia" src={require("../../images/grid.png")} />
            <h1 id="recomendacao">Ao final do meu contrato de Jovem Aprendiz com a Malwee, através da recomendação dos meus superiores, ingressei na empresa Cast.</h1>
            <img id="brilho_experiencias" src={require("../../images/brilho.png")} />
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
    );
}