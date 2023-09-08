
function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>
                    <a href='https://shinoinochi.github.io/how-to-learn/' target="_blank" rel="noreferrer" className='portfolio__button link'>
                        <p className='portfolio__subtitle'>Статичный сайт</p>
                        <span>↗</span>
                    </a>
                </li>
                <li className='portfolio__link'>
                    <a href='https://shinoinochi.github.io/russian-travel/' target="_blank" rel="noreferrer" className='portfolio__button link'>
                        <p className='portfolio__subtitle'>Адаптивный сайт</p>
                        <span>↗</span>
                    </a>
                </li>
                <li className='portfolio__link'>
                    <a href='https://shinoinochi.mesto.nomoreparties.co/' target="_blank" rel="noreferrer" className='portfolio__button link'>
                        <p className='portfolio__subtitle'>Одностраничное приложение </p>
                        <span>↗</span>
                    </a>
                </li>
            </ul>
        </section>
    );
  }
  
  export default Portfolio;