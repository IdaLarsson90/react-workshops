import MovieCard from "./MovieCard";

export default function DisplayMovies (props) {
  const showAll = props.movies.map((movie) => {
    return <MovieCard imdbID= {movie.imdbID} 
    poster = {movie.Poster} year= {movie.Year} title = 
    {movie.Title}/>
  });

  return (
      <main>
        { showAll }
      </main>
  )
}