import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormWithValidation } from '../../utils/valid';
const { validate } = require("react-email-validator");

function Profile({ message, setMessage, handleeEditUser, handleLogout, auth }) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [isSame, setIsSame] = React.useState(true);
    const currentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, setIsValid, errors, isValid, setValues  } = useFormWithValidation();

    React.useEffect(() => {
        sameCheck();
        setIsValid(isValid);
    },[handleChange])

    React.useEffect(() => {
        setValues({name: currentUser.name, email: currentUser.email});
    }, [currentUser]);

    function sameCheck() {
        if (currentUser.name === values.name && currentUser.email === values.email)
        {   
            setIsSame(true);
        }
        else {
            setIsSame(false);
        }
    }

    function handleStartEdit() {
        sameCheck();
        setIsEditing(true);
        setMessage('');
        setIsValid(true);
    }

    function handleEditUser(evt) {
        evt.preventDefault();
        if (isSame) {
            setIsEditing(false);
        }
        else {
            if(validate(values.email)) {
                setIsEditing(false);
                handleeEditUser(values.name, values.email);
            }
        }

    }

    function logout() {
        handleLogout();
    }

    return (
        <>
            <Header auth={auth}/>
            <main className='profile'>
                <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
                <form className='profile-form' onSubmit={handleEditUser}>
                    <div className='profile-form__container'>
                        <div className='profile-form__box'>
                            <label className='profile-form__title'>Имя</label>
                            <input className='profile-form__input' disabled={!isEditing} required minLength={2} maxLength={30} name='name' onChange={handleChange} value={values.name || ''}></input>
                        
                        </div>
                        <span className='profile-form__error'>{errors.name}</span>
                    </div>
                    <div>
                        <div className='profile-form__box'>
                            <label className='profile-form__title'>E-mail</label>
                            <input className='profile-form__input' name='email'  type='email' pattern='[a-z0-9._%+]+@[a-z0-9.]+\.[a-z]{2,4}$' required maxLength={30} disabled={!isEditing} onChange={handleChange} value={values.email || ''}></input>
                        </div>
                        <span className='profile-form__error'>{errors.email}</span>
                    </div>

                    <span className='profile-form__message'>{message}</span>
                    {isEditing ?
                        <button type='submit' disabled={isValid && validate(!values.email)} 
                        className={isValid !== isSame? `profile__button-save profile__button` : `profile__button profile__button-save profile__button-save_disabled`}>Сохранить</button>
                        :
                        <button type='submit' disabled={isValid && validate(!values.email)} 
                        className={`profile__button-save profile__button profile__button_disabled`}>Сохранить</button>
                    }
                </form>
                <button className={isEditing? `profile__button-edit profile__button profile__button_disabled` : `profile__button-edit profile__button`} type='button' onClick={handleStartEdit}>Редактировать</button>
                <NavLink to='/' className={isEditing? `profile__button-logout profile__button profile__button_disabled` : `profile__button-logout profile__button`} onClick={logout}>Выйти из аккаунта</NavLink>
            </main>
        </>
    );
  }
  
  export default Profile;