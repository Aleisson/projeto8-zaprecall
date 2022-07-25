import ImgLogo from "./img/logo.png"


function Home({nextPergunta1}) {

    
    return (
        <div class="pergunta">
            <img src={ImgLogo} alt="logo"/>
            <p>ZapRecall</p>
            <div onClick={() => nextPergunta1()} class ="button"><span>Iniciar Recall!!</span></div>
        </div>
    );

}

export default Home;