function RandomInsult (props) {
    const {insult, play} = props;
 
    function randomizeInsult () {
        let rndNumber = Math.floor(Math.random() * 10);
        return rndNumber;
    }


    return(
        <article> 
            <h2>{insult}</h2>
            <button>Random insult</button>
        </article>
    )
}

export default RandomInsult;