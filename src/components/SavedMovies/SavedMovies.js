import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
    return (
        <>
            <Header/>
            <main className="main">
                <section className='movies'>
                    <SearchForm/>
                    <MoviesCardList isSaved={true} />
                </section>
            </main>
            <Footer/>
        </>
    );
  }
  
  export default SavedMovies;