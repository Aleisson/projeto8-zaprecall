import Home from "./Home";
import React from "react";
import Perguntas from "./Perguntas";

function App() {

    // const [cont, setCont] = React.useState(0);
    const [page,setpage] = React.useState(<Home nextPergunta1={nextPergunta1}/>)

    function nextPergunta1(){
        setpage(<Perguntas />)
    }

    

    return (
    
        <div class="content">
            {<Perguntas />}
        </div>
    
    );

}

export default App;