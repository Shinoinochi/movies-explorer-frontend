import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList( { isSaved } ) {
    return (
        <ul className='cards'>
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