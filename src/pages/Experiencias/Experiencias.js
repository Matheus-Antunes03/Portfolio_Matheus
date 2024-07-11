import React from "react";
import styled from 'styled-components';
import { Experiencias_Title } from "../../components/Experiencias_Title";
import { Footer } from "../../components/Footer";
import { Experiencias_Content } from "../../components/Experiencias_Content/Experiencias_Content";

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

export function Experiencias() {
    return (
        <>
            <Container>
                <div id="content">
                    <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                    <Experiencias_Title/>
                    <Experiencias_Content/>
                    <Footer/>
                </div>
            </Container>
        </>
    );
}