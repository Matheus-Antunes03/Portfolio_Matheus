import React from 'react';
import styles from './Pessoal_Title.css';

export function Pessoal_Title() {
    return (
        <div>
            <div id="logo_pessoal">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons">
                <h1 id="pessoal">PESSOAL</h1>
                <img id="icon" src={require("../../images/cerebro.png")} />
                <img id="icon" src={require("../../images/coracao.png")} />
                <img id="icon3" src={require("../../images/sorriso.png")} />
                <img id="icon" src={require("../../images/cerebro2.png")} />
                <img id="icon" src={require("../../images/coracao2.png")} />
                <img id="icon3" src={require("../../images/sorriso2.png")} />
            </div>
        </div>
    );
}