function Footer() {
    return (
        <footer className='footer'>
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__bottom">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className='footer__menu'>
                    <li className='footer__menu-link'><a className='link' href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
                    <li className='footer__menu-link'><a className='link' href='https://github.com/Shinoinochi' target="_blank" rel="noreferrer">Github</a></li>
                </ul>
            </div>
        </footer>
    );
  }
  
  export default Footer;