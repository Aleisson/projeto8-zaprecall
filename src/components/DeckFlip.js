import React from "react";
function DeckFlip({indice,questao, resposta, finalDeck}) {
    
    const[vira,setVira] = React.useState("deckFlip");

  

    return (

        <div className={vira} onClick={() => setVira("deckFlip virada")}>
            <div className="front-face face">
                <p>{questao}</p>
                <ion-icon  name="repeat-outline"></ion-icon>
            </div>
            <div className="back-face face">
                <p>{resposta}</p>
                <div>
                    <div onClick={() => finalDeck(indice,"close-circle")}    className="red"><p>Não<br/>lembrei</p></div>
                    <div onClick={() => finalDeck(indice,"alert-circle")} className="yellow"><p>Quase não<br/>lembrei</p></div>
                    <div onClick={() => finalDeck(indice,"checkmark-circle")}  className="green"><p>Zap!</p></div>
                </div>
            </div>
        </div>

    );
}

export default DeckFlip;
