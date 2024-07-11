import React from "react";
import styled from 'styled-components';
import { Footer } from "../../components/Footer";
import { Habilidades_Title } from "../../components/Habilidades_Title";
import { Habilidades_Content } from "../../components/Habilidades_Content/Pessoal_Content";

const Container = styled.div`
    #content{
        background-color: #202020;
        width: 100%;
        height: 1700px;
        margin: 0;
        padding: 40px 100px 100px 100px;
    }

    #voltar{
        width: 70px;
        margin-left: -50px;
    }
`;

export function Habilidades() {
    return (
        <>
            <Container>
                <div id="content">
                    <a href="./home"><img id="voltar" src={require("../../images/voltar.png")} /></a>
                    <Habilidades_Title/>
                    <Habilidades_Content/>
                    <Footer/>
                </div>
            </Container>
        </>
    );
}