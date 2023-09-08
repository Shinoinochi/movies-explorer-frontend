import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Header/>
            <main className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile-form'>
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>Имя</label>
                        <input className='profile-form__input' defaultValue='Виталий'></input>
                    </div>
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>E-mail</label>
                        <input className='profile-form__input' defaultValue='pochta@yandex.ru'></input>
                    </div>
                </form>
                <button className='profile__button-edit profile__button'>Редактировать</button>
                <NavLink to='/'><button className='profile__button-logout profile__button'>Выйти из аккаунта</button></NavLink>
            </main>
        </>
    );
  }
  
  export default Profile;