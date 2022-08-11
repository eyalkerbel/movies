import logo from './logo.svg';
import './App.css';
import React from "react";
import SearchInput from "./Comp/SearchInput/SearchInput";
import debounce from 'lodash.debounce';
import {fetchSearchResults} from "./utils/utils";
import ListMovies from "./Comp/ListMoveis/LIstMovies";
import MovieModal from "./Comp/MovieModal/MovieModal";
import movie from "./Comp/Movie/Movie";



const fetchData = async (query, cb) => {
    const res = await fetchSearchResults(query);
    cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
}, 1000);

function App() {
    const [initialMovies, setInitialMovies] = React.useState(null);
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    React.useEffect(() => {
        if (query !== '') {
            debouncedFetchData(query, res => {
                let movieArray = []
                movieArray.push(res)
                setResults(movieArray);
            });
        }
    }, [query]);



  React.useEffect(() => {
    fetch("/init-api")
        .then((res) => res.json())
        .then((data) => {
            setInitialMovies(data.data)
        });
  }, []);
  const selectMovie = (movie) => {
      setSelectedMovie(movie)
      setIsOpen(true)
  }
  const closeModal = () => {
      setIsOpen(false)
  }

  return (
      <React.Fragment>
    <div className="App">
      <SearchInput
          value={query}
          onChangeText={e => {
            setQuery(e.target.value);
          }}
      />
        <ListMovies  selectMovie={(movie) => selectMovie(movie)} movies={query !== '' ? results : initialMovies} />
    </div>
    <MovieModal isOpen={isOpen} closeModal={() => closeModal()} movie={selectedMovie} />
      </React.Fragment>
);
}

export default App;
