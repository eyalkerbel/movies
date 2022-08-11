import "./ListMovies.css"
import Movie from "../Movie/Movie";

function ListMovies(props) {

    return (
        <main className="cards">
            {  props.movies?.map(movie => {
                return <Movie movie={movie} selectMovie={props.selectMovie} />
            }) }

        </main>
    );
}

export default ListMovies;