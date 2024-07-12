import React from 'react';
import styles from './Habilidades_Content.css';

export function Habilidades_Content() {
    return (
        <div id="container_habilidades">
            <div id="ingles">
                <div id="ingles_rastro">
                    <h1 id="titulo_ingles">Inglês</h1>
                    <img id="rastro" src={require("../../images/rastro.jpg")} />
                </div>
                <p id="texto_ingles">Através da internet, consegui aprender inglês e hoje possuo fala e escrita avançados. Desde os 8 anos, quando comecei a acessar a internet, sempre gostei de consumir músicas internacionais, deste jeito absorvi muitas palavras da língua inglesa e cantar junto ajudou muito na minha pronúncia. Tive a mesma experiência com os jogos, absorvendo tudo que lia. Mais velho, comecei a assisir todas as mídias somente legendadas, foi quando tive um grande salto no meu nível de inglês e até hoje sigo me desenvolvendo nesta língua.</p>
            </div>
            <div>

            </div>
        </div>
    );
}