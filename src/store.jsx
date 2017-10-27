import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    counter,
    composeEnhancers(
        applyMiddleware(thunk)
    ));
    console.log(store.getState());

export default store