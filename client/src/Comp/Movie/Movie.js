import "./Movie.css"

function Movie(props) {
    const {movie,selectMovie} = props;
    return (
        <img src={movie.Poster} alt="Sample photo" onClick={() => selectMovie(movie)} />
    )
}



export default Movie;