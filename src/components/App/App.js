import './App.css';
import React from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import Main from '../Main/Main';
import SavedMovies from '../SavedMovies/SavedMovies';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import ProtectedRouteElement from '../ProtectedRoute';

function App() {
  const [movies, setMovies] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = React.useState('');
  const [messageSearch, setMessageSearch] = React.useState('');
  const [moviesArray, setMoviesArray] = React.useState([]);
  const [button, setButton] = React.useState(localStorage.getItem('isShort') || true);
  const [localSearchWord, setLocalSearchWord] = React.useState('');

  const checkbox = localStorage.getItem('isShort') === 'true'? true : false;
  const [check, setCheck] = React.useState(checkbox);
  const [checkSaved, setCheckSaved] = React.useState(false); 

  React.useEffect(() => {
    setMessage('');
  }, [navigate]);

  React.useEffect(() => {
      const localMovies = JSON.parse(localStorage.getItem('movies')) || [];
      setMovies(localMovies);
      setLocalSearchWord(localStorage.getItem('name') || ''); 
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    checkToken(location.pathname);
    if (auth) {
      Promise.all([
        mainApi.savedMovies(token),
      ])
      .then(res => {
        setSavedMovies(res[0]);
        setSavedMoviesList(res[0]);
      })
      .catch(err => console.log(err));
    }
  }, [auth]);

  function checkToken(location) {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getUser(token)
      .then(res => {
        setAuth(true);
        navigate(location, {replace: true});
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
    });
    }
    else {
      setAuth(false);
    }
  }

  function editUser(name, email) {
    const token = localStorage.getItem('token');
    mainApi.editUser(token, name, email)
    .then(user => {
      setMessage('Данные успешно изменены');
      setUser(user);
    })
    .catch((err) => {
      setMessage('Возникла ошибка, попробуйте еще раз');
    });
  }
  
  function searchMovies(name) {
    setMovies([]);
    setLoading(true);
    setMessageSearch('');
    moviesApi.getMovies()
    .then(res => {
      setLoading(false);
      if(name.length === 0) {
        setMessage('Нужно ввести ключевое слово');
        setMovies([]);
      } else
        if (!check) {
          setMessage('');
          const findedMovies = res.filter((movie) => 
            movie.nameRU.toLowerCase().includes(name.toLowerCase()));
            localStorage.setItem('name', name);
            localStorage.setItem('movies', JSON.stringify(findedMovies));
          if (findedMovies.length !== 0) {
              localStorage.setItem('isShort', check);
              setMovies(findedMovies);
          }
          else {
            setButton(false);
            setMessageSearch('Ничего не найдено');

          }
        }
        else  {
          setMessage('');
          const findedMovies = res.filter((movie) => 
            movie.nameRU.toLowerCase().includes(name.toLowerCase()));
            localStorage.setItem('name', name);
            localStorage.setItem('movies', JSON.stringify(findedMovies));
          if (findedMovies.length !== 0) {
            localStorage.setItem('isShort', check);
            setMovies(findedMovies);
          }
          else {
            setMessageSearch('Ничего не найдено');
          }
        }
    })
    .catch(err => console.log(err));
  }

  function moreMovies() {
    let movieLoad = moviesArray.slice(0, 2);
    setMoviesArray(moviesArray.slice(2, ));
    setMovies([...movies, ...movieLoad]);
    if (moviesArray.length <= 2 ) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  }

  function searchSavedMovies(name, checked) {
    const token = localStorage.getItem('token');
    setLoading(true);
    setMessageSearch('');
    setSavedMovies([]);
    mainApi.savedMovies(token)
    .then(res => {
      setLoading(false);
      if (name) {
        if (!checked) {
          const findedMovies = res.filter((movie) => 
          movie.nameRU.toLowerCase().includes(name.toLowerCase()));
          if (findedMovies.length !== 0) {
            setSavedMovies(findedMovies);
          }
          else {
            setMessageSearch('Ничего не найдено');
          }
        }
        else {
          setMessage('');
          const findedMovies = res.filter((movie) => 
            movie.nameRU.toLowerCase().includes(name.toLowerCase()));
          if (findedMovies.length !== 0) {
            const short = findedMovies.filter(movie => movie.duration <= 40);
            setSavedMovies(short);
          }
          else {
            setMessageSearch('Ничего не найдено');
          }
        }
      }
      else {
        setSavedMovies(res);
      }
    })
  }

  function registration(name, email, password) {
    setLoading(true);
    mainApi.createUser(name, email, password)
    .then(user => {
      if (user) {
        login(email, password)
      }
    })
    .catch(err => {
      if (err.statusCode === 400) {
        setMessage('При регистрации пользователя произошла ошибка.');
      }
      else {
        setMessage(err.message);
      }
    })
    .finally(() => setLoading(false))
  }

  function login(email, password) {
    setLoading(true);
    mainApi.login(email, password)
    .then(res => {
      if(res.token) {
        setAuth(true);
        localStorage.setItem('token', res.token);
        navigate('/movies', {replace: true});
      }
    })
    .catch(err => {
      if (err.statusCode === 400) {
        setMessage('Что-то пошло не так...');
      }
      else {
        setMessage(err.message);
      }
    })
    .finally(() => setLoading(false))
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('isShort');
    localStorage.removeItem('movies');
    setCheck(false);
    setLocalSearchWord('');
    setMovies([]);
    setAuth(false);
    navigate('/', {replace: true});
  }

  function addMovie(movie, isLiked) {
    const token = localStorage.getItem('token');
    if (isLiked) {
      const movieDel = savedMovies.find(movieSaved => movieSaved.nameRU === movie.nameRU);
      mainApi.deleteMovie(movieDel._id, token)
      .then(res => {
        setSavedMovies((state) => state.filter((c) => c._id !== movieDel._id));
        setSavedMoviesList((state) => state.filter((c) => c._id !== movieDel._id));
      })
      .catch(err => console.log(err));
    }
    else {
      mainApi.saveMovie(movie, token)
      .then(res => {
        setSavedMovies(oldSave => [...oldSave, res]);
        setSavedMoviesList(oldSave => [...oldSave, res]);
      })
      .catch(err => console.log(err));
    }
  }

  function deleteMovie(movie) {
    const token = localStorage.getItem('token');
    mainApi.deleteMovie(movie._id, token)
    .then(res => {
      setSavedMovies((state) => state.filter((c) => c._id !== movie._id));
      setSavedMoviesList((state) => state.filter((c) => c._id !== movie._id));
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={user}>
        <Routes>
          <Route path='/' element={<Main auth={auth}/>} />
          <Route path='/movies' element={
            <ProtectedRouteElement loggedIn={auth}>
              <Movies 
                movies={movies} 
                check={check}
                setCheck={setCheck}
                message={message} 
                moreMovies={moreMovies} 
                searchWord={localSearchWord} 
                button={button} 
                messageSearch={messageSearch} 
                handleSearchMovies={searchMovies} 
                saveMovie={addMovie} 
                myMovies={savedMoviesList} 
                auth={auth} 
                loading={loading}
              />
            </ProtectedRouteElement>}/>
          <Route path='/saved-movies' element={
            <ProtectedRouteElement loggedIn={auth}>
              <SavedMovies handleSearchMovies={searchSavedMovies} 
                messageSearch={messageSearch} 
                check={checkSaved}
                setCheck={setCheckSaved}
                message={message} 
                myMovies={savedMovies} 
                handleDelete={deleteMovie} 
                loading={loading} 
                auth={auth}/>
            </ProtectedRouteElement>} />
          <Route path='/profile' element={
            <ProtectedRouteElement loggedIn={auth}> 
              <Profile 
                user={user} 
                handleeEditUser={editUser} 
                handleLogout={handleLogout} 
                auth={auth}
                message={message}
                setMessage={setMessage}/>
            </ProtectedRouteElement>} />
          <Route path='/signin' element={!auth? <Login login={login} loading={loading} message={message} setMessage={setMessage} /> : <Navigate to='/movies' replace/>} />
          <Route path='/signup' element={!auth? <Register registration={registration} loading={loading} message={message} setMessage={setMessage}/> :<Navigate to='/movies' replace/>} />
          <Route path='/*' element={<Page404/>} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
