import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #logo{
        display: flex;
    }

    #name{
        font-family: Blacklisted;
        color: #ffffff;
        margin: 0 0 0 58px;
        font-size: 110px;
    }

    #m{
        width: 113px;
        height: 113px;
        border: solid 2px #ffffff;
        padding: 10px;
        margin-left: 18px;
    }
    
    #portfolio{
        font-family: NewRomantics;
        color: #ffffff;
        font-size: 83.7px;
        margin: 0 0 0 58px;
    }

    #icons{
        display: flex;
        margin-top: 10px;
    }

    #icon{
        width: 74px;
        height: 75px;
    }
`;

export function Experiencias_Title() {
    return (
        <Container>
            <div id="logo">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons">
                <h1 id="portfolio">E XP E R i ÊN C iA S</h1>
                <img id="icon" src={require("../../images/brilho2.png")} />
                <img id="icon" src={require("../../images/brilho3.png")} />
                <img id="icon" src={require("../../images/brilho4.png")} />
                <img id="icon" src={require("../../images/brilho2.png")} />
                <img id="icon" src={require("../../images/brilho3.png")} />
                <img id="icon" src={require("../../images/brilho4.png")} />
            </div>
        </Container>
    );
}