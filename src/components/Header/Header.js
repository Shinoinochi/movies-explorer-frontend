import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AuthorizationHeader from '../AuthorizationHeader/AuthorizationHeader'

function Header({ headerStyle, auth }) {
    return (
        <header className={`header ${headerStyle}`}>
          <div className='header__block'>
            <NavLink to='/' className='header__logot logo'><img src={logo} className='header__logo' alt='Логотип'/></NavLink>
          </div>
          { auth ? <Navigation/> : <AuthorizationHeader/> }
        </header>
    );
  }
  
  export default Header;