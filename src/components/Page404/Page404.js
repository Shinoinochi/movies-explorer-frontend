import React from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const back = () => navigate(-4);
    return (
        <main className='page404'>
            <h2 className="page404__title">404</h2>
            <p className="page404__text">Страница не найдена</p>
            <button onClick={back} className="page404__link">Назад</button>
        </main>
    );
  }
  
  export default Login;