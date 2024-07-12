import React from 'react';
import styles from './Experiencias_Title.css';

export function Experiencias_Title() {
    return (
        <div>
            <div id="nome_logo">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons_experiencias">
                <h1 id="experiencias">E XP E R i ÊN C iA S</h1>
                <img id="icon_experiencias" src={require("../../images/brilho2.png")} />
                <img id="icon_experiencias" src={require("../../images/brilho3.png")} />
                <img id="icon_experiencias" src={require("../../images/brilho4.png")} />
                <img id="icon_experiencias" src={require("../../images/brilho2.png")} />
                <img id="icon_experiencias" src={require("../../images/brilho3.png")} />
                <img id="icon_experiencias" src={require("../../images/brilho4.png")} />
            </div>
        </div>
    );
}