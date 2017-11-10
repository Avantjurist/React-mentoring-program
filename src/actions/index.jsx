import axios from 'axios'

export const SEARCH_BY = 'GET_FILMS_BY_TITLE';
export const RESET_FILM = 'RESET_FILM'
export const SET_FILMS = 'SET_FILMS'

export const setFilms = (response) => {
    return {
        type: SET_FILMS,
        films: response.data.results
    }
}

export const loadFilm = (query) => {
    return (dispatch, getState) => {
        axios.get(
          (getState().sort == "director") ?
          `http://api.themoviedb.org/3/discover/movie?director=${query}&api_key=b692c617757975a58d6ad43a95a45853`:
          `http://api.themoviedb.org/3/search/movie?api_key=b692c617757975a58d6ad43a95a45853&query=${query}`)

            .then( (response) => {
                dispatch(setFilms(response));
            })
    }
}

export const searchBy = (query) => {
    return {
      type: SEARCH_BY,
      payload: query
    };
}
