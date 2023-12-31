import imageMe from '../../images/pic__COLOR_pic.png';
function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <h2 className="about-me__title">Студент</h2>
            <div className='about-me__blocks'>
                <div className="about-me__block">
                    <h3 className="about-me__subtitle">Виталий</h3>
                    <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                    После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__link link" href='https://github.com/Shinoinochi' target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className='about-me__img' src={imageMe} alt='me'></img>
            </div>
        </section>
    );
  }
  
  export default AboutMe;