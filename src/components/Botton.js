import party from "./img/party.png"
import sad from "./img/sad.png"

function Botton({ contPerguntas = 0, respPergunta = 8, icons, home}) {

    let confirma = "";
    let button = "";

    for (let i = 0; i < icons.length; i++) {
        if (icons[i] === "close-circle") {
            confirma = false;
        } 

    }

    let textFinal = "";
    if (contPerguntas === respPergunta && confirma) {
        textFinal = <div>
            <div><img src={party} alt="logo"></img><span>Parabéns</span></div>
            <p>Você não esqueceu de <br /> nenhum flashcard!</p>
        </div>;
        button =<div className="button-botton" onClick={() => home()}><p>REINICIAR RECALL</p></div>;
    } else if (contPerguntas === respPergunta) {
        textFinal = <div>
            <div><img src={sad} alt="logo"></img><span>Putz...</span></div>
            <p>Ainda faltam alguns...<br />
                Mas não desanime!</p>
        </div>;
        button=<div className="button-botton" onClick={() => home()}><p>REINICIAR RECALL</p></div>;
    }









    return (
        <div className="botton">

            {textFinal}
            <p>{`${contPerguntas}/${respPergunta} CONCLUIDOS`}</p>
            <div className="icons">
                {icons.map(x => <ion-icon name={x}></ion-icon>)}
            </div>

            {button}

        </div>
    )

}

export default Botton;