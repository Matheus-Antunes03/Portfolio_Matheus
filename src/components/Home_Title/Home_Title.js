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
        font-family: Suntage;
        color: #202020;
        font-size: 83.7px;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #ffffff;
        margin: 0 0 0 58px;
        letter-spacing: 0.5px;
    }

    #icons{
        display: flex;
    }

    #grid{
        width: 315px;
        height: 85px;
    }

    #div_linhas{
        width: 118px;
    }

    #linhas{
        color: #ffffff;
        font-size: 25px;
        margin: -15px 0 0 0;
        word-break: break-all;
        line-height: 0.7;
    }
`;

export function Home_Title() {
    return (
        <Container>
            <div id="logo">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons">
                <h1 id="portfolio">PORTFOLIO</h1>
                <img id="grid" src={require("../../images/grid.png")} />
                <div id="div_linhas">
                    <p id="linhas">_______________________________________________________</p>
                </div>
            </div>
        </Container>
    );
}