import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <Header/>
            <SearchForm/>
            <MoviesCardList isSaved={true} />
            <Footer/>
        </>
    );
  }
  
  export default SavedMovies;