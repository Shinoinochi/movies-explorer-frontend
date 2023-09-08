import imageMovie from '../../images/58fcf299e5a04c29cb37e6280c83da16.jpg';

function MoviesCard({ isSaved }) {
    return (
        <li className='card'>
            <img className='card__image' src={imageMovie} alt='Фотография фильма'></img>
            <div className='card__block'>
                <h3 className='card__title'>В погоне за Бенкси</h3>
                <button className={isSaved ? `card__like card__like_saved` : `card__like`}></button>
            </div>
            <p className='card__time'>1ч 42м</p>
        </li>
    );
  }
  
  export default MoviesCard;