import React from 'react';
import styles from './Habilidades_Content.css';

export function Habilidades_Content() {
    return (
        <div id="container_habilidades">
            <img id="homem" src={require("../../images/homem.jpg")} />
            <div id="ingles">
                <div id="ingles_rastro">
                    <h1 id="titulo_ingles">Inglês</h1>
                    <img id="rastro" src={require("../../images/rastro.jpg")} />
                </div>
                <p id="texto_ingles">Através da internet, consegui aprender inglês e hoje possuo fala e escrita avançados. Desde os 8 anos, quando comecei a acessar a internet, sempre gostei de consumir músicas internacionais, deste jeito absorvi muitas palavras da língua inglesa e cantar junto ajudou muito na minha pronúncia. Tive a mesma experiência com os jogos, absorvendo tudo que lia. Mais velho, comecei a assisir todas as mídias somente legendadas, foi quando tive um grande salto no meu nível de inglês e até hoje sigo me desenvolvendo nesta língua.</p>
            </div>
            <img id="homem" src={require("../../images/homem2.jpg")} />
            <div id="ti">
                <div id="ti_rastro">
                    <img id="barcode_ti" src={require("../../images/barcode_ti.jpg")} />
                    <h1 id="titulo_ti">T.I.</h1>
                </div>
                <p id="texto_ti">Desde que descobri o que era um computador, sempre tive curiosidade de entender como ele funciona e quais são as suas possibilidades. Em 2018, fiz o curso Montagem e Manutenção de Computadores e Redes Locais no Senai como jovem aprendiz, onde entendi todo o funcionamento do hardware de um computador. Em 2021 e 2022, fiz outro jovem aprendiz no Senai, desta vez de Desenvolvedor de Sistemas, em parceria com a empresa Malwee, onde aprendi a programar, conheci as linguagens Java, Pyhton, Javascript, React, HTML, CSS e MySQL. Trabalhando no T.I. da Malwee, aprendi a programar com a linguagem ABAP, o que fiz por 1 ano. Após sair da Malwee, em 2023, continuei a programar em ABAP na empresa Cast por 1 ano, onde desenvolvi a fundo meus conhecimentos sobre SAP e ABAP. Agora na faculdade, que iniciei em 2023, tenho aprofundado muito meus conhecimentos em todas as linguagens que já conhecia e em outras áreas da T.I.</p>
            </div>
            <img id="homem" src={require("../../images/homem3.jpg")} />
        </div>
    );
}