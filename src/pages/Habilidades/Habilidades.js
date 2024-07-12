import React from "react";
import styles from './Habilidades.css';
import { Footer } from "../../components/Footer";
import { Habilidades_Title } from "../../components/Habilidades_Title";
import { Habilidades_Content } from "../../components/Habilidades_Content/Pessoal_Content";

export function Habilidades() {
    return (
        <>
            <div id="content_habilidades">
                <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                <Habilidades_Title/>
                <Habilidades_Content/>
                <Footer/>
            </div>
        </>
    );
}