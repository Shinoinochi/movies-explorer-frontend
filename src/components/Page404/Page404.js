import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page404() {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return (
        <main className='page404'>
            <h2 className="page404__title">404</h2>
            <p className="page404__text">Страница не найдена</p>
            <button onClick={back} className="page404__link" >Назад</button>
        </main>
    );
  }
  
  export default Page404;