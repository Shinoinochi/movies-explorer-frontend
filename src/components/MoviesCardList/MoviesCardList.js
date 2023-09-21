import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { isSaved, number, movies, myMovies, saveMovie, handleDelete } ) {

    return (
        <ul className='cards'>
            {movies.slice(0, number).map((movie) =>
                <MoviesCard key={isSaved? movie._id : movie.id} isSaved={isSaved} movie={movie} myMovies={myMovies} saveMovie={saveMovie} handleDelete={handleDelete}/>
            )}
        </ul>
    );
  }
  
  export default MoviesCardList;