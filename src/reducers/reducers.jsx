import {
    GET_FILMS_BY_TITLE,
    GET_FILM_BY_DIRECTOR,
    RESET_FILM
}
from '../actions/index'

const filmReducer = (state=[], action) => {
    switch (action.type) {
        case GET_FILMS_BY_TITLE:
            return action.films;
        case GET_FILM_BY_DIRECTOR:
            return action.films;
        case RESET_FILM:
            return [];
        default:
            return state
    }
}

export default filmReducer