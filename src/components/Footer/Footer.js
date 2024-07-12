import React from 'react';
import styles from './Footer.css';

export function Footer() {
    return (
        <div id="footer_content">
            <p id="data">matheus_pol@hotmail.com</p>
            <img id="logo_footer" src={require("../../images/logo.png")} />
            <p id="barcode">Matheus</p>
        </div>
    );
}