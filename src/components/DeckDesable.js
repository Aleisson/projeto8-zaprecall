
function DeckDisable({indice, cor}){

    let nameIcon = "";
    // cor ="red-icon"; 
    // <ion-icon name="close-circle"></ion-icon>
    // cor ="yellow-icon"; 
    // <ion-icon name="alert-circle"></ion-icon>
    // cor ="green-icon"; 
    // <ion-icon name="checkmark-circle"></ion-icon>

    if(cor === "red-icon" ){nameIcon = "close-circle"}
    if(cor === "yellow-icon" ){nameIcon = "alert-circle"}
    if(cor === "green-icon" ){nameIcon = "checkmark-circle"}



    return(
        <div className = {"deckInicio "+ cor} >
        <p>{"Pergunta " + (indice + 1)} </p>
        <ion-icon name={nameIcon}></ion-icon>

        </div>
    );

}

export default DeckDisable;