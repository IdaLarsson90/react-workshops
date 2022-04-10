export default function MovieCard (props) {
    return (
       <article className="card">
           <img src={props.poster} />
           <h3 className="title">{ props.title }</h3>
           <p className="year"> {props.year} </p>
           <small className="imdbID">{ props.imdbID }</small>
           
           
       </article> 
    ) 
}