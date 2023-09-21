export default class MainApi {
    constructor({ URL, headers }) {
        this._URL = URL;
        this._headers = headers;
    }

    userInfo() {
        return fetch(this._URL + '/users/me', {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
        .then(res => {
            return res.json();
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
            return res.json();
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
            return res.json();
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
            return res.json();
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
            return res.json();
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
            return res.json();
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
            return res.json();
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
            return res.json();
        })
    }

}

export const mainApi = new MainApi({
    URL: 'https://api.shinoinochi.movies.nomoredomainsicu.ru',
    headers: {
        "Content-Type": 'application/json'
    }
});



