import React from "react";
import styles from './Experiencias.css';
import { Experiencias_Title } from "../../components/Experiencias_Title";
import { Footer } from "../../components/Footer";
import { Experiencias_Content } from "../../components/Experiencias_Content/Experiencias_Content";

export function Experiencias() {
    return (
        <>
            <div id="content_experiencias">
                <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                <Experiencias_Title/>
                <Experiencias_Content/>
                <Footer/>
            </div>
        </>
    );
}