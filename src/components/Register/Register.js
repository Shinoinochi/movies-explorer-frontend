import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Register() {
    return (
        <>
            <main className='account'>
                <NavLink className='logo' to='/'><img className='account__logo' src={logo} alt="Логотип"></img></NavLink>
                <h2 className='account__title'>Добро пожаловать!</h2>
                <form className='account-form'>
                    <label className='account-form__title'>Имя</label>
                    <input className='account-form__input' required minLength={2} maxLength={30} placeholder='Введите имя'></input>
                    <label className='account-form__title'>E-mail</label>
                    <input className='account-form__input' type='email' required placeholder='Введите почту'></input>
                    <label className='account-form__title'>Пароль</label>
                    <input className='account-form__input' required minLength={8} type='password' placeholder='Введите пароль'></input>
                    <button className='account-form__button account-form__button-register' type='submit'>Зарегистрироваться</button>
                </form>
                <p className='account__signin'>Уже зарегистрированы? <NavLink to='/signin' className='account__link reg-link'>Войти</NavLink></p>
            </main>
        </>
    );
  }
  
  export default Register;