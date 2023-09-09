import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <Header/>
            <main className="main">
                <SearchForm/>
                <MoviesCardList isSaved={true} />
            </main>
            <Footer/>
        </>
    );
  }
  
  export default SavedMovies;