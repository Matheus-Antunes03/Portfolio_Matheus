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
        font-family: Protest;
        color: #ffffff;
        font-size: 83.7px;
        margin: 10px 0 10px 50px;
        letter-spacing: 2px;
    }

    #icons{
        display: flex;
    }

    #icon{
        width: 75px;
        height: 75px;
        margin: 18px 0 0 13px;;
    }

    #icon3{
        width: 85px;
        height: 85px;
        margin: 13px 0 0 10px;;
    }
`;

export function Pessoal_Title() {
    return (
        <Container>
            <div id="logo">
                <h1 id="name">MATHEUS ANTUNES</h1>
                <img id="m" src={require("../../images/logo.png")} />
            </div>
            <div id="icons">
                <h1 id="portfolio">PESSOAL</h1>
                <img id="icon" src={require("../../images/cerebro.png")} />
                <img id="icon" src={require("../../images/coracao.png")} />
                <img id="icon3" src={require("../../images/sorriso.png")} />
                <img id="icon" src={require("../../images/cerebro2.png")} />
                <img id="icon" src={require("../../images/coracao2.png")} />
                <img id="icon3" src={require("../../images/sorriso2.png")} />
            </div>
        </Container>
    );
}