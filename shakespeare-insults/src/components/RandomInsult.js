
import { useState } from 'react'

function RandomInsult (props) {
    
    const {array}  = props;
    console.log(array);
    const [randomInsult, setRandomInsult] = useState([]);

    function randomizeInsult () {
        let rndNumber = Math.floor(Math.random() * array.length);
        console.log(array[rndNumber]);
        setRandomInsult(array[rndNumber]);
    }
    return(
        <article> 
            
            {/* <button onClick={ randomInsult }>Random insult</button>
       <h1>{  randomInsult.insult} - {randomInsult.play} </h1> */}
        </article>
    )
}

export default RandomInsult;
