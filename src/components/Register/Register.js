import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Register() {
    return (
        <>
            <section className='account'>
                <img className='account__logo logo' src={logo} alt="Логотип"></img>
                <h2 className='account__title'>Добро пожаловать!</h2>
                <form className='account-form'>
                    <label className='account-form__title'>Имя</label>
                    <input className='account-form__input' placeholder='Даня'></input>
                    <label className='account-form__title'>E-mail</label>
                    <input className='account-form__input' type='email' placeholder='sss@mail.ru'></input>
                    <label className='account-form__title'>Пароль</label>
                    <input className='account-form__input' type='password'></input>
                    <button className='account-form__button account-form__button-register' type='submit'>Зарегистрироваться</button>
                </form>
                
                <p className='account__signin'>Уже зарегистрированы? <NavLink to='/signin' className='account__link reg-link'>Войти</NavLink></p>
            </section>
        </>
    );
  }
  
  export default Register;