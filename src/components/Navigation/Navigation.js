import AccountLogo from '../../images/icon__COLOR_icon-main.svg';
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
        <img className='header__burger' src={burger} onClick={handleMenu} alt='Меню'></img>
        <div className='header__mobile'>
        <ul className='header__mobile-menu'>
            <img className='header__close-button' src={closeButton} onClick={handleMenu} alt='Кнопка закрытия меню'></img>
            <li className='header__burger_list'><NavLink to='/' className='link'>Главная</NavLink></li>
            <li className='header__burger_list'><NavLink to='/movies' className='link'>Фильмы</NavLink></li>
            <li className='header__burger_list'><NavLink to='/saved-movies' className='link'>Сохранённые фильмы</NavLink></li>
            <Account active={'account_active'}/>
        </ul>
        </div>
        <ul className='header__menu'>
            <li className='header__menu_list'><NavLink to='/movies' className='link link_no-border'>Фильмы</NavLink></li>
            <li className='header__menu_list'><NavLink to='/saved-movies' className='link link_no-border'>Сохранённые фильмы</NavLink></li>
        </ul>
        <Account active={'account_unactive'}/>
        </>
    );
  }
  
  export default Navigation;


