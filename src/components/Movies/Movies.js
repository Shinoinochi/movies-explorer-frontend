import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header/>
            <SearchForm/>
                <MoviesCardList isSaved={false}/>
            <button className='more-button'>Ещё</button>
            <Footer/>
        </>
    );
  }
  
  export default Movies;