import React from 'react';
import styles from './Home_Title.css';

export function Home_Title() {
    return (
            <div>
                <div id="logo_home">
                    <h1 id="name">MATHEUS ANTUNES</h1>
                    <img id="m" src={require("../../images/logo.png")} />
                </div>
                <div id="icons">
                    <h1 id="portfolio">PORTFOLIO</h1>
                    <img id="grid_home" src={require("../../images/grid.png")} />
                    <div id="div_linhas">
                        <p id="linhas_home">__________________________________________________________________</p>
                    </div>
                </div>
            </div>
    );
}