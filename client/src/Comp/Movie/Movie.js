import "./Movie.css"

function Movie(props) {
    const {movie,selectMovie} = props;
    return (
            // <article className="card">
            //     <img src={movie.Poster} alt="Sample photo" />
            //         <div className="text">
            //             <h5 style={{height: "100px"}}>{movie.Title}</h5>
            //             <p>{movie.Plot}</p>
            //             <button>Here's how</button>
            //         </div>
            // </article>
        <img src={movie.Poster} alt="Sample photo" onClick={() => selectMovie(movie)} />


    )
}



export default Movie;