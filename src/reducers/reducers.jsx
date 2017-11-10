import {
    COCK_SIZE,
    RESET_FILM,
    SET_FILMS
}
from '../actions/index'

const defaultState = {
  films: [],
  sort: 'title'
};

const filmReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
              ...state,
              films: action.films
            };

        case COCK_SIZE:
            return {
                ...state,
                sort: action.payload
            };
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
