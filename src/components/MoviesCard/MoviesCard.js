import imageMovie from '../../images/58fcf299e5a04c29cb37e6280c83da16.jpg';
import LikeButton from '../../images/icon__COLOR_stroke-2.svg';

function MoviesCard() {
    return (
        <div className='card'>
            <img className='card__image' src={imageMovie} alt='Фотография фильма'></img>
            <div className='card__block'>
                <h3 className='card__title'>В погоне за Бенкси</h3>
                <img className='card__like' src={LikeButton} alt='Лайк'></img>
            </div>
            <p className='card__time'>1ч 42м</p>
        </div>
    );
  }
  
  export default MoviesCard;