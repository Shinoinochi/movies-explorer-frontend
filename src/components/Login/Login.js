import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <>
            <section className='account'>
                 <NavLink className='logo' to='/'><img className='account__logo' src={logo} alt="Логотип"></img></NavLink>
                <h2 className='account__title'>Рады видеть!</h2>
                <form className='account-form'>
                    <label className='account-form__title'>E-mail</label>
                    <input className='account-form__input' type='email' required placeholder='Введите почту'></input>
                    <label className='account-form__title'>Пароль</label>
                    <input className='account-form__input' required minLength={8} type='password' placeholder='Введите пароль'></input>
                    <button className='account-form__button account-form__button-login' type='submit'>Войти</button>
                </form>
                <p className='account__signin'>Еще не зарегистрированы? <NavLink to='/signup' className='account__link reg-link'>Регистрация</NavLink></p>
            </section>
        </>
    );
  }
  
  export default Login;