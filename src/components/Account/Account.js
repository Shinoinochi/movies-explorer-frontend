import AccountLogo from '../../images/icon__COLOR_icon-main.svg';
import { NavLink } from 'react-router-dom';

function Account({ active }) {
    return (
        <div className={`header__account ${active}`}>
            <p className='header__user'><NavLink to='/profile' className='link link_no-border'>Аккаунт</NavLink></p>
            <img  className='header__user-logo' src={AccountLogo} alt='Логотип аккаунта'></img>
        </div>
    );
  }
  
  export default Account;


