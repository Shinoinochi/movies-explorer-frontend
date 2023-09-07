function Techs() {
    return (
        <section className='techs' id='techs'>
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <button className="techs__item">HTML</button>
                <button className="techs__item">CSS</button>
                <button className="techs__item">JS</button>
                <button className="techs__item">React</button>
                <button className="techs__item">Git</button>
                <button className="techs__item">Express.js</button>
                <button className="techs__item">mongoDB</button>
            </ul>
        </section>
    );
  }
  
  export default Techs;