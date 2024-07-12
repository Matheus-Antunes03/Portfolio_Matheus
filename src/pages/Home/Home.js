import React from "react";
import styles from './Home.css';
import { Home_Title } from "../../components/Home_Title";
import { Home_Content } from "../../components/Home_Content/Home_Content";
import { Footer } from "../../components/Footer";

export function Home() {
    return (
        <>
            <div id="content_home">
                <Home_Title/>
                <Home_Content/>
                <Footer/>
            </div>
        </>
    );
}