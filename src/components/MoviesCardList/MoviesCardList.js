import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { isSaved } ) {
    return (
        <ul className='movies'>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
            <MoviesCard isSaved={isSaved}/>
        </ul>
    );
  }
  
  export default MoviesCardList;