import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';

function Movies({ movies, check, setCheck, message, searchWord, messageSearch, handleSearchMovies, saveMovie, myMovies, auth, loading }) {
    const [number, setNumber] = React.useState(0);
    const [addNumber, setAddNumber] = React.useState(0);
    const [moviesCount, setMoviesCount] = React.useState(0);

    React.useEffect(() => {
        if(window.screen.width > 997) {
            setNumber(12);
            setAddNumber(3);
        }
        if(window.screen.width < 998 && window.screen.width > 630) {
            setNumber(8);
            setAddNumber(2);
        }
        if(window.screen.width < 630) {
            setNumber(5);
            setAddNumber(1);
        }
      }, [window.screen.width]);
      React.useEffect(() => {
        if (check) {
            setMoviesCount(movies.filter(movie => movie.duration <= 40).length);
        }
        else {
            setMoviesCount(movies.length);
        }
      }, [check]);
    function count() {
        setNumber(number + addNumber);
    }

    return (
        <>
            <Header auth={auth}/>
            <main className="main">
                <section className='movies'>
                    <SearchForm handleSearchMovies={handleSearchMovies} check={check} setCheck={setCheck} searchWord={searchWord} isSaved={false} message={message}/>
                        {loading? <Preloader/> : <MoviesCardList isSaved={false} check={check} number={number} movies={movies} myMovies={myMovies} saveMovie={saveMovie}/>}
                        <span className='movies__error'>{messageSearch}</span>
                    <button className={moviesCount > number ? `more-button` : `more-button more-button_disabled`} hidden={loading} onClick={count}>Ещё</button>
                </section>
            </main>
            <Footer/>
        </>
    );
  }
  
  export default Movies;