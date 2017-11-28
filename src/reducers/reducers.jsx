import {
    SEARCH_BY,
    RESET_FILM,
    SET_FILMS,
    FILTER_BY
}
from '../actions/index'

const defaultState = {
  films: [],
  sort: 'title',
  filter: ''
};

const filmReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
              ...state,
              films: action.films
            };

        case SEARCH_BY:
            return {
                ...state,
                sort: action.payload
            };
        case FILTER_BY:
            return {
                ...state,
                filter: action.payload
            }
        case RESET_FILM:
            return {
              ...state,
              films: []
            };
        default:
            return state
    }
}

export default filmReducer
