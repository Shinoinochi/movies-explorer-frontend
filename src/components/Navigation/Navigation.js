import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import closeButton from '../../images/closeButton.svg';
import burger from '../../images/burger.svg';

function handleMenu() {
    document.querySelector('.header__mobile').classList.toggle('header__menu-toggle');
    document.querySelector('.header__mobile-menu').classList.toggle('menu-active');
  }

function Navigation() {
    return (
        <>
        <img className='header__burger link' src={burger} onClick={handleMenu} alt='Меню'></img>
        <div className='header__mobile'>
        <img className='header__close-button link' src={closeButton} onClick={handleMenu} alt='Кнопка закрытия меню'></img>
            <ul className='header__mobile-menu'>
                <li className='header__list'><NavLink to='/' className='link'>Главная</NavLink></li>
                <li className='header__list'><NavLink to='/movies' className='link'>Фильмы</NavLink></li>
                <li className='header__list'><NavLink to='/saved-movies' className='link'>Сохранённые фильмы</NavLink></li>
                <li className='header__list'><Account active={'header__account_active'}/></li>
            </ul>
        </div>
        <ul className='header__menu'>
            <li className='header__item'><NavLink to='/movies' className='link link_no-border'>Фильмы</NavLink></li>
            <li className='header__item'><NavLink to='/saved-movies' className='link link_no-border'>Сохранённые фильмы</NavLink></li>
        </ul>
        <Account active={'header__account_unactive'}/>
        </>
    );
  }
  
  export default Navigation;


