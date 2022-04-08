
import { useState } from 'react'

function RandomInsult (props) {
    const {array}  = props;

    const [randomInsult, setRandomInsult] = useState([]);

    function randomizeInsult () {
        let rndNumber = Math.floor(Math.random() * array.length);
        console.log(array[rndNumber]);
        setRandomInsult(array[rndNumber]);
    }

    return(
        <article> 
            <button onClick={ randomizeInsult }>Insult me please</button>
            <h1>{ randomInsult.insult} - {randomInsult.play} </h1>
        </article>
    )
}

export default RandomInsult;
