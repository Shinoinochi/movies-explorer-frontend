import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header/>
            <main className="main">
                <SearchForm/>
                    <MoviesCardList isSaved={false}/>
                <button className='more-button'>Ещё</button>
            </main>
            <Footer/>
        </>
    );
  }
  
  export default Movies;