
function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className='portfolio__links'>
                <div className='portfolio__link'>
                    <li className='portfolio__subtitle'>Статичный сайт</li>
                    <a href='https://shinoinochi.github.io/how-to-learn/' target="_blank" rel="noreferrer" className='portfolio__button link'>↗</a>
                </div>
                <div className='portfolio__link'>
                    <li className='portfolio__subtitle'>Адаптивный сайт</li>
                    <a href='https://shinoinochi.github.io/russian-travel/' target="_blank" rel="noreferrer" className='portfolio__button link'>↗</a>
                </div>
                <div className='portfolio__link'>
                    <li className='portfolio__subtitle'>Одностраничное приложение</li>
                    <a href='https://shinoinochi.mesto.nomoreparties.co/' target="_blank" rel="noreferrer" className='portfolio__button link'>↗</a>
                </div>
            </ul>
        </section>
    );
  }
  
  export default Portfolio;