import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMidleware from 'redux-thunk';
import map_reducer from './reducers/map_reducer';
import cards_reducer from './reducers/cards_reducer';





let reducers = combineReducers({

    map: map_reducer,
    cards: cards_reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store

window.store = store;