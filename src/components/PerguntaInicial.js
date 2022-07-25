
function PerguntaInicial({indice, changeDeck}){

    return(
        <div class="deckInicio"  onClick={() => changeDeck(indice)}>
        <p>{"Pergunta " + (indice + 1)} </p>
        <ion-icon name="play-outline"></ion-icon>
        </div>
    );

}

export default PerguntaInicial;