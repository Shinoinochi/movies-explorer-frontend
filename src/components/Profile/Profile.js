import Header from '../Header/Header';
function Profile() {
    return (
        <>
            <Header/>
            <section className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile-form'>
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>Имя</label>
                        <input className='profile-form__input' placeholder='Виталий'></input>
                    </div>
                    <div className='profile-form__box'>
                        <label className='profile-form__title'>E-mail</label>
                        <input className='profile-form__input' placeholder='pochta@yandex.ru'></input>
                    </div>
                </form>
                <button className='profile-form__button-edit profile-form__button'>Редактировать</button>
                <button className='profile-form__button-logout profile-form__button'>Выйти из аккаунта</button>
            </section>
        </>
    );
  }
  
  export default Profile;