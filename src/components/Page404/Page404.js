import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <section className='page404'>
            <h2 className="page404__title">404</h2>
            <p className="page404__text">Страница не найдена</p>
            <NavLink to='/' className="page404__link">Назад</NavLink>
        </section>
    );
  }
  
  export default Login;