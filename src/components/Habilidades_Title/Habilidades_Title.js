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
        font-family: Storybook;
       color: #202020;
        font-size: 83.7px;
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #ffffff;
        font-size: 83.7px;
        margin: 0 0 0 58px;
        letter-spacing: 2px;
    }

    #icons{
        display: flex;
    }

    #icon{
        width: 75px;
        height: 75px;
        margin: 6px 0 0 13px;;
    }

    #icon3{
        width: 70px;
        height: 70px;
        margin: 21px 0 0 13px;;
    }
`;

export function Habilidades_Title() {
    return (
        <Container>
            <div id="logo">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons">
                <h1 id="portfolio">HABILIDADES</h1>
                <img id="icon" src={require("../../images/olho_mundo.png")} />
                <img id="icon" src={require("../../images/olho.png")} />
                <img id="icon" src={require("../../images/olho2.png")} />
                <img id="icon3" src={require("../../images/olho3.png")} />
            </div>
        </Container>
    );
}