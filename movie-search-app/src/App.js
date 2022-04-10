import { useState } from 'react'

import './App.css';

import SearchMovies from './components/SearchMovies';
import DisplayMovies from './components/DisplayMovies'

function App() {
  const [searchTitle, setInputValue] = useState();
  const [movies, setMovies] = useState([
    { imdbID: "", 
    poster: "", 
    title: "", 
    year:"" }
  ]);



  return (
    <div className="App">
      <SearchMovies setMovies = {setMovies} searchTitle = {searchTitle} setInputValue= {setInputValue} />
      <DisplayMovies movies = {movies}/>
    </div>
  );
}

export default App;
