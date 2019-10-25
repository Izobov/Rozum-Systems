import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMidleware from 'redux-thunk';
import map_reducer from './reducers/map_reducer';
import cards_reducer from './reducers/cards_reducer';
import { reducer as formReducer } from 'redux-form';
import auth_reducer from './reducers/auth_reducer';





let reducers = combineReducers({

    map: map_reducer,
    cards: cards_reducer,
    form: formReducer,
    auth: auth_reducer
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store

window.store = store;