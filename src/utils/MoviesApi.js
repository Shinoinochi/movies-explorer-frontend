export default class MoviesApi {

    getMovies() {
        return fetch(`https://api.nomoreparties.co/beatfilm-movies/`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
    }

}

export const moviesApi = new MoviesApi();
