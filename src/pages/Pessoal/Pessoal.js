import React from "react";
import styled from 'styled-components';
import { Footer } from "../../components/Footer";
import { Pessoal_Title } from "../../components/Pessoal_Title";
import { Pessoal_Content } from "../../components/Pessoal_Content";

const Container = styled.div`
    #content{
        background-color: #202020;
        width: 100%;
        height: 1500px;
        margin: 0;
        padding: 40px 100px 100px 100px;
    }

    #voltar{
        width: 70px;
        margin-left: -50px;
    }
`;

export function Pessoal() {
    return (
        <>
            <Container>
                <div id="content">
                    <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                    <Pessoal_Title/>
                    <Pessoal_Content/>
                    <Footer/>
                </div>
            </Container>
        </>
    );
}