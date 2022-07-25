
function DeckDisable({indice, icon}){

    let nameIcon = icon;
    // cor ="red-icon"; 
    // <ion-icon name="close-circle"></ion-icon>
    // cor ="yellow-icon"; 
    // <ion-icon name="alert-circle"></ion-icon>
    // cor ="green-icon"; 
    // <ion-icon name="checkmark-circle"></ion-icon>

    

    return(
        <div className = {"deckInicio "+ icon} >
        <p>{"Pergunta " + (indice + 1)} </p>
        <ion-icon name={nameIcon}></ion-icon>

        </div>
    );

}

export default DeckDisable;