import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    #footer_content{
        display: flex;
        justify-content: space-between;
        width: 970px;
        margin: auto;
    }

    #data{
        color: #ffffff;
        font-family: Mom;
        margin: 0;
    }

    #logo{
        width: 80px;
        display: block;
        margin: 10px auto auto auto;
    }

    #barcode{
        color: #ffffff;
        font-family: Barcode;
        font-size: 60px;
        margin: -15px 0 0 0;
    }
`;

export function Footer() {
    return (
        <Container>
            <div id="footer_content">
                <p id="data">29O52OO3/1OO72O24</p>
                <img id="logo" src={require("../../images/logo.png")} />
                <p id="barcode">ghjkl</p>
            </div>
        </Container>
    );
}