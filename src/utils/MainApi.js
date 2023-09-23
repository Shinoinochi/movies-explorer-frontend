export default class MainApi {
    constructor({ URL, headers }) {
        this._URL = URL;
        this._headers = headers;
    }
    _checkData(res) {
        return res.ok? res.json(): Promise.reject(`Ошибка: ${res}`);
    }
    _getErrorAuth(res) {
        return res.json().then((res) => {
          throw new Error(res.message);
        });
      }
    userInfo() {
        return fetch(this._URL + '/users/me', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        .then(res => {
            return this._checkData(res);
        })
    }

    savedMovies(token) {
        return fetch(this._URL + '/movies', {
            method: 'GET',
            headers: { 
                ...this._header,
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            return this._checkData(res);
        })
    }

    login(email, password) {
        return fetch(this._URL + '/signin', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => {
            if (res.ok) return res.json();
            return this._getErrorAuth(res);
        })
    }

    createUser(name, email, password) {
        return fetch(this._URL + '/signup', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({name, email, password})
        })
        .then(res => {
            if (res.ok) return res.json();
            return this._getErrorAuth(res);
        })
    }

    saveMovie(movie, token) {
        return fetch ('https://api.shinoinochi.movies.nomoredomainsicu.ru/movies', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            })
        })
        .then(res => {
            return this._checkData(res);
        })
    }
    deleteMovie(movieID, token) {
        return fetch(this._URL + `/movies/${movieID}`, {
            method: 'DELETE',
            headers: { 
                ...this._header,
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            return this._checkData(res);
        })
    }

    getUser(token) {
        return fetch(this._URL + '/users/me', {
            method: 'GET',
            headers: { 
                ...this._header,
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(res => {
            return this._checkData(res);
        })
    }

    editUser(token, name, email) {
        return fetch(`https://api.shinoinochi.movies.nomoredomainsicu.ru/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                email: email,
                name: name
            })
        })
        .then(res => {
            return this._checkData(res);
        })
    }

}

export const mainApi = new MainApi({
    URL: 'https://api.shinoinochi.movies.nomoredomainsicu.ru',
    headers: {
        "Content-Type": 'application/json'
    }
});



