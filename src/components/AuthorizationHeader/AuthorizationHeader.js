import { NavLink } from 'react-router-dom';

function AuthorizationHeader() {
    return (
        <div className='header__account'>
            <NavLink to='/signup' className='header__signup header__button'>Регистрация</NavLink>
            <NavLink to='/signin' className='header__signin header__button'>Войти</NavLink>
        </div>
    );
  }
  
  export default AuthorizationHeader;


