import logo from "./img/logo-pequeno.png";
import PerguntaInicial from "./PerguntaInicial";
import DeckFlip from "./DeckFlip"
import React from "react";


function Perguntas() {

    const [perguntas, setPerguntas] = React.useState([
        { tipo: 1, questao: "O que é JSX? ", resposta: "Uma extensão de linguagem do JavaScript" },
        { tipo: 1, questao: "O React é __? ", resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { tipo: 1, questao: "Componentes devem iniciar com __ ", resposta: "letra maiúscula" },
        { tipo: 1, questao: " Podemos colocar __ dentro do JSX? ", resposta: " expressões" },
        { tipo: 1, questao: "O ReactDOM nos ajuda __? ", resposta: "interagindo com a DOM para colocar componentes React na mesma" },
        { tipo: 1, questao: " Usamos o npm para __?", resposta: "gerenciar os pacotes necessários e suas dependências" },
        { tipo: 1, questao: "Usamos props para __? ", resposta: "passar diferentes informações para componentes" },
        { tipo: 1, questao: "Usamos estado (state) para __? ", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
    ].sort(() => Math.random() - 0.5));

    

    function changeDeck(indice) {
        
        perguntas[indice].tipo = 2;
        
        setPerguntas(perguntas.map(x => x))

    }




    return (
        <div class="perguntas">
            <p><img src={logo} alt="logo"></img> ZapRecall</p>
            {perguntas.map((x, i) => {
                if (x.tipo === 1) {
                    return <PerguntaInicial indice={i} changeDeck={changeDeck} />
                } else {
                    return <DeckFlip questao={x.questao} resposta={x.resposta}/>;
                }
            })}
        </div>
    );

}

export default Perguntas;