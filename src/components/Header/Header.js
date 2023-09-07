import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import AuthorizationHeader from '../AuthorizationHeader/AuthorizationHeader'



const logginIn = true;

function Header({ headerStyle }) {
    return (
        <header className={`header ${headerStyle}`}>
          <div className='header__block'>
            <NavLink to='/' className='header__logot'><img src={logo} className='header__logo' alt='Логотип'/></NavLink>
          </div>
          { logginIn ? <Navigation/> : <AuthorizationHeader/> }
        </header>
    );
  }
  
  export default Header;