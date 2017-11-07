import axios from 'axios'

export const GET_FILMS_BY_TITLE = 'GET_FILMS_BY_TITLE';
export const GET_FILM_BY_DIRECTOR = 'GET_FILM_BY_DIRECTOR';
export const RESET_FILM = 'RESET_FILM'

export const getFilms = (query, response) => {
    return {
        type: GET_FILMS_BY_TITLE,
        query,
        films: response.data.results
    }
}

export const loadFilm = (query) => {
    return (dispatch) => {
        axios.get(`http://api.themoviedb.org/3/search/movie?api_key=b692c617757975a58d6ad43a95a45853&query=${query}`)
            .then( (response) => {
                dispatch(getFilms(query,response));
            })
    }
}