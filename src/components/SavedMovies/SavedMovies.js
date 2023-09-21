import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies( { handleSearchMovies, check, handleDurationChange, message, messageSearch, myMovies, handleDelete, loading, auth } ) {
    
    return (
        <>
            <Header auth={auth}/>
            <main className="main">
                <SearchForm handleSearchMovies={handleSearchMovies} check={check} isSaved={true} message={message} handleDurationChange={handleDurationChange}/>
                {loading? <Preloader/> : <MoviesCardList isSaved={true} movies={myMovies} myMovies={myMovies}  handleDelete={handleDelete}/>}
                <span className='movies__error'>{messageSearch}</span>
            </main>
            <Footer/>
        </>
    );
  }
  
  export default SavedMovies;