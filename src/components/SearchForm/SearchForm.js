import React from 'react';

function SearchForm({ handleSearchMovies, check, searchWord, isSaved, handleDurationChange, message }) {
    const [checked, setChecked] = React.useState(true);
    const [searchName, setSearchName] = React.useState('');
    function handleSetSearchName(evt) {
        setSearchName(evt.target.value);
    }
    function handleSearch(evt) {
        evt.preventDefault();
        handleSearchMovies(searchName, checked);
    } 
    function handleSwitchChange() {
        handleDurationChange(isSaved);
    }
    React.useState(()=> {
        setSearchName(searchWord);
    }, []);

    return (
        <div className='search'>
            <form className="search__form">
                <input className="search__input" placeholder="Фильм" type="search"  defaultValue={searchWord} onChange={handleSetSearchName}></input>
                <button className="search__button" type="submit" onClick={handleSearch}></button>
            </form>
            <span className='search__error'>{message}</span>
            <div className='switch'>
                <label className="switch__buttom">
                    <input type="checkbox" defaultChecked={check} onClick={() => setChecked((state) => !state)} onChange={handleSwitchChange}></input>
                    <span className="slider"></span>
                </label>
                <p className='switch__text'>Короткометражки</p>
            </div>
        </div>
    );
  }
  
  export default SearchForm;