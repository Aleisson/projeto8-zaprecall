
function PerguntaInicial({indice, valor}){

    return(
        <div class="deckInicio">
        <p>{"Pergunta " + (indice + 1)} </p>
        <ion-icon name="play-outline"></ion-icon>
        </div>
    );

}

export default PerguntaInicial;