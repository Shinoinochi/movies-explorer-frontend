import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';

function Movies({ movies, check, message, searchWord, messageSearch, handleDurationChange, handleSearchMovies, saveMovie, myMovies, auth, loading }) {
    const [number, setNumber] = React.useState(0);
    const [addNumber, setAddNumber] = React.useState(0);

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


    function count() {
        setNumber(number + addNumber);
    }

    return (
        <>
            <Header auth={auth}/>
            <main className="main">
                <section className='movies'>
                    <SearchForm handleSearchMovies={handleSearchMovies} check={check} searchWord={searchWord} isSaved={false} handleDurationChange={handleDurationChange} message={message}/>
                        {loading? <Preloader/> : <MoviesCardList isSaved={false} number={number} movies={movies} myMovies={myMovies} saveMovie={saveMovie}/>}
                        <span className='movies__error'>{messageSearch}</span>
                    <button className={movies.length > number ? `more-button` : `more-button more-button_disabled`} onClick={count}>Ещё</button>
                </section>
            </main>
            <Footer/>
        </>
    );
  }
  
  export default Movies;