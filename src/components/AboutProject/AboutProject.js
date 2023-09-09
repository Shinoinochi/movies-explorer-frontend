function AboutProject() {
    return (
        <section className='about' id='project'>
            <h2 className="about__title">О проекте</h2>
            <div className="about__blocks">
                <div className="about__block">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__block">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__progress">
                <div className="about__steps">
                    <button className="about__week one">1 неделя</button>
                    <p className="about__skill">Back-end</p>
                </div>
                <div className="about__steps">
                    <button className="about__week">4 недели</button>
                    <p className="about__skill">Front-end</p>
                </div>
            </div>
        </section>
    );
  }
  
  export default AboutProject;