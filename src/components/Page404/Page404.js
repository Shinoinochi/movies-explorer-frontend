import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <main className='page404'>
            <h2 className="page404__title">404</h2>
            <p className="page404__text">Страница не найдена</p>
            <NavLink to='/' className="page404__link">Назад</NavLink>
        </main>
    );
  }
  
  export default Login;