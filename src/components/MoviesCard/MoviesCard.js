import React from "react";

function MoviesCard({ isSaved, movie, myMovies, saveMovie, handleDelete }) {
    const [isLiked, setIsLiked] = React.useState(false);
    React.useEffect(() => {
        if (myMovies) {
            const liked = myMovies.some(myMovie => myMovie.nameRU === movie.nameRU);
            if (liked)
            {
                setIsLiked(true);
            }
            else {
                setIsLiked(false);
            }
        }
    }, [myMovies]);
    function handleSaveMovie() {
        saveMovie(movie, isLiked);
    }

    function handleDeleteMovie() {
        handleDelete(movie);
    }
    function time(minutes) {
        const hours = Math.floor(minutes / 60);
        const min = minutes % 60;
        return hours + 'ч ' + min + 'м';
    }

    return (
        <li className='card'>
            <a href={movie.trailerLink} target="_blank" rel="noreferrer" className="card__image-link">
                <img className='card__image' src={isSaved ? `${movie.image}`: `https://api.nomoreparties.co/${movie.image.url}`} alt='Фотография фильма'></img>
            </a>
            <div className='card__block'>
                <h3 className='card__title'>{movie.nameRU}</h3>
                <button className={isSaved ? `card__like card__like_saved` : isLiked? `card__like card__like_active` : `card__like`} onClick={isSaved? handleDeleteMovie: handleSaveMovie}></button>
            </div>
            <p className='card__time'>{time(movie.duration)}</p>
        </li>
    );
  }
  
  export default MoviesCard;