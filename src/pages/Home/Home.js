import React from "react";
import styled from 'styled-components';
import { Home_Title } from "../../components/Home_Title";
import { Home_Content } from "../../components/Home_Content/Home_Content";
import { Footer } from "../../components/Footer";

const Container = styled.div`
    #content{
        background-color: #202020;
        width: 100%;
        height: 1300px;
        margin: 0;
        padding: 50px 100px 100px 100px;
    }
`;

export function Home() {
    return (
        <>
            <Container>
                <div id="content">
                    <Home_Title/>
                    <Home_Content/>
                    <Footer/>
                </div>
            </Container>
        </>
    );
}