import React from "react";
import styles from './Pessoal.css';
import { Footer } from "../../components/Footer";
import { Pessoal_Title } from "../../components/Pessoal_Title";
import { Pessoal_Content } from "../../components/Pessoal_Content";

export function Pessoal() {
    return (
        <>
            <div id="content_pessoal">
                <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                <Pessoal_Title/>
                <Pessoal_Content/>
                <Footer/>
            </div>
        </>
    );
}