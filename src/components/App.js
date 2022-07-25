import Home from "./Home";
import React from "react";
import Perguntas from "./Perguntas";

function App() {

    // const [cont, setCont] = React.useState(0);
    const [page,setpage] = React.useState(<Home next={next}/>)

    function next(){
        setpage(<Perguntas home={home}/>)
    }

    function home(){
        setpage(<Home next={next}/>)
    }
    

    return (
    
        <div class="content">
            {page}
        </div>
    
    );

}

export default App;