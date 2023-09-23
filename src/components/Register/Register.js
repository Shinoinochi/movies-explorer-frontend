import logo from '../../images/logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/valid';
const { validate } = require("react-email-validator");

function Register({ registration, loading, message, setMessage }) {
    const [valid, setValid] = React.useState(false);
    const { values, handleChange, errors, isValid, resetForm  } = useFormWithValidation();
    React.useEffect(()=> {
        if (isValid && validate(values.email)) {
            setValid(true);
        } else {
            setMessage('');
            setValid(false);
        }
    }, [handleChange]);

    function handleRegistr(evt) {
        evt.preventDefault();
        setMessage('');
        if (!loading) {
            setValid(loading);
            registration(values.name, values.email, values.password);
        }
    }

    return (
        <>
            <main className='account'>
                <NavLink className='logo' to='/'><img className='account__logo' src={logo} alt="Логотип"></img></NavLink>
                <h2 className='account__title'>Добро пожаловать!</h2>
                <form className='account-form' onSubmit={handleRegistr}>
                    <label className='account-form__title'>Имя</label>
                    <input className='account-form__input' required minLength={2} maxLength={30} placeholder='Введите имя' name='name' value={values.name || ''} onChange={handleChange}></input>
                    <span className='account-form__error'>{errors.name}</span>
                    <label className='account-form__title'>E-mail</label>
                    <input className='account-form__input' type='email' required placeholder='Введите почту' name='email' value={values.email || ''} onChange={handleChange}></input>
                    <span className='account-form__error'>{errors.email}</span>
                    <label className='account-form__title'>Пароль</label>
                    <input className='account-form__input' required minLength={8} type='password' placeholder='Введите пароль' name='password' value={values.password || ''} onChange={handleChange}></input>
                    <span className='account-form__error'>{errors.password}</span>
                    <span className='account-form__error'>{message? message : ''}</span>
                    <button className={valid ? `account-form__button account-form__button-register` : 'account-form__button account-form__button-register account-form__button_disabled'} disabled={!valid} type='submit'>Зарегистрироваться</button>
                </form>
                <p className='account__signin'>Уже зарегистрированы? <NavLink to='/signin' className='account__link reg-link'>Войти</NavLink></p>
            </main>
        </>
    );
  }
  
  export default Register;