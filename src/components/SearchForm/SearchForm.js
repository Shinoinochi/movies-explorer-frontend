function SearchForm() {
    return (
        <div className='search'>
            <form className="search__form">
                <input className="search__input" placeholder="Фильм" type="search"></input>
                <button className="search__button" type="submit"></button>
            </form>
            <div className='switch'>
                <label className="switch__buttom">
                    <input type="checkbox" defaultChecked="true"></input>
                    <span className="slider"></span>
                </label>
                <p className='switch__text'>Короткометражки</p>
            </div>
        </div>
    );
  }
  
  export default SearchForm;