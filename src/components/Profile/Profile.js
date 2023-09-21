import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ message, setMessage, handleeEditUser, handleLogout, auth }) {
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [isEditing, setIsEditing] = React.useState(false);
    const [isSame, setIsSame] = React.useState(true);
    const currentUser = React.useContext(CurrentUserContext);
    const same = (`profile__button-save profile__button ${isSame && 'profile__button profile__button-save_disabled'}`);
    React.useEffect(() => {
        setUsername(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);
    function sameCheck(username, email) {
        if (currentUser.name === username && currentUser.email === email)
        {   
            setIsSame(true);
        }
        else {
            setIsSame(false);
        }
    }
    function handleEditName(evt) {
        setUsername(evt.target.value);
        sameCheck(evt.target.value, email);
    }

    function handleEditEmail(evt) {
        setEmail(evt.target.value);
        sameCheck(username, evt.target.value);
    }

    function handleStartEdit() {
        sameCheck(username, email);
        setIsEditing(true);
        setMessage('');
    }

    function handleEditUser(evt) {
        evt.preventDefault();
        setIsEditing(false);
        console.log(username, email);
        handleeEditUser(username, email);
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
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>Имя</label>
                        <input className='profile-form__input' disabled={!isEditing} name='username' onChange={handleEditName} value={username ?? '' }></input>
                    </div>
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>E-mail</label>
                        <input className='profile-form__input' name='email' disabled={!isEditing} onChange={handleEditEmail} value={ email ?? ''}></input>
                    </div>
                    <span className='profile-form__message'>{message}</span>
                    <button type='submit' disabled={isSame} className={isEditing?  same : `profile__button-save profile__button profile__button_disabled`}>Сохранить</button>
                </form>
                <button className={isEditing? `profile__button-edit profile__button profile__button_disabled` : `profile__button-edit profile__button`} type='button' onClick={handleStartEdit}>Редактировать</button>
                <NavLink to='/' className={isEditing? `profile__button-logout profile__button profile__button_disabled` : `profile__button-logout profile__button`} onClick={logout}>Выйти из аккаунта</NavLink>
            </main>
        </>
    );
  }
  
  export default Profile;