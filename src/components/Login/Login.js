import React from 'react';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/valid';

function Login({ login, message }) {
    const { values, handleChange, errors, isValid, resetForm  } = useFormWithValidation();

    function handleLogin(evt) {
        evt.preventDefault();
        login(values.email, values.password);
    }
    
    return (
        <>
            <main className='account'>
                 <NavLink className='logo' to='/'><img className='account__logo' src={logo} alt="Логотип"></img></NavLink>
                <h2 className='account__title'>Рады видеть!</h2>
                <form className='account-form' onSubmit={handleLogin}>
                    <label className='account-form__title'>E-mail</label>
                    <input className='account-form__input' type='email' name='email' value={values.email || ''} required placeholder='Введите почту' onChange={handleChange}></input>
                    <span className='account-form__error'>{errors.email}</span>
                    <label className='account-form__title'>Пароль</label>
                    <input className='account-form__input' required minLength={8} type='password' name='password' value={values.password || ''} placeholder='Введите пароль' onChange={handleChange}></input>
                    <span className='account-form__error'>{errors.password}</span>
                    <span className='account-form__error'>{message}</span>
                    <button className={isValid? `account-form__button account-form__button-login` : 'account-form__button account-form__button-login account-form__button_disabled'} disabled={!isValid} type='submit'>Войти</button>
                </form>
                <p className='account__signin'>Еще не зарегистрированы? <NavLink to='/signup' className='account__link reg-link'>Регистрация</NavLink></p>
            </main>
        </>
    );
  }
  
  export default Login;