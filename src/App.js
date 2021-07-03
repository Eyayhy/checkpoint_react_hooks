import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { moviesList } from './MoviesData';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';

function App() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRating, setsearchRating] = useState(0);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);
  const handleSearch = (e) => setSearchTitle(e.target.value);

  return (
    <div className='container' style={{paddingTop:'50px'}}>

      <Filter
        handleSearch={handleSearch}
        setsearchRating={setsearchRating}
        searchRating={searchRating}
      />
      <MovieList
        moviesArray={
          searchTitle
            ? movieList.filter((movie) =>
                movie.title.toLowerCase().includes(searchTitle.toLowerCase())
              )
            : searchRating> 1
            ? movieList.filter((movie) => movie.rate >= searchRating)
            : movieList
        }
      />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;