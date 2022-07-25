import React from "react";
function DeckFlip({questao, resposta}) {
    
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
                    <div className="red"><p>Não<br/>lembrei</p></div>
                    <div className="yellow"><p>Quase não<br/>lembrei</p></div>
                    <div className="green"><p>Zap!</p></div>
                </div>
            </div>
        </div>

    );
}

export default DeckFlip;
