import ImgLogo from "./img/logo.png"


function Home({next}) {

    
    return (
        <div class="home">
            <img src={ImgLogo} alt="logo"/>
            <p>ZapRecall</p>
            <div onClick={() => next()} class ="button"><span>Iniciar Recall!!</span></div>
        </div>
    );

}

export default Home;