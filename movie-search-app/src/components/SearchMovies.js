

export default function SearchMovies (props) {
    const {setMovies, searchTitle, setInputValue} = props;
    
    async function getMovies () {
        const response = await fetch(`http://www.omdbapi.com/?apikey=37fe945a&s=${searchTitle}`);
        const data = await response.json();  
        setMovies(data.Search);
        console.log(data.Search)
    }
       
    function handleChange (event) {
        setInputValue(event.target.value)
     }

    function search (event) {
        event.preventDefault();
        getMovies();
    }

    return (
        <form onSubmit={search}>
            <label htmlFor="search">Sök efter titel: </label>
            <input id="search" type="text" placeholder="Skriv här" onChange={handleChange}/>
            <button> Sök </button>
        </form>
    )
}