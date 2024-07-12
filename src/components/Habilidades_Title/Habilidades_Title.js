import React from 'react';
import styles from './Habilidades_Title.css';

export function Habilidades_Title() {
    return (
        <div>
            <div id="logo_habilidades">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons_habilidades">
                <h1 id="habilidades">HABILIDADES</h1>
                <img id="icon_habilidades" src={require("../../images/olho_mundo.png")} />
                <img id="icon_habilidades" src={require("../../images/olho.png")} />
                <img id="icon_habilidades" src={require("../../images/olho2.png")} />
                <img id="icon3_habilidades" src={require("../../images/olho3.png")} />
            </div>
        </div>
    );
}