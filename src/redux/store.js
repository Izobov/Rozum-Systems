import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMidleware from 'redux-thunk';
import map_reducer from './reducers/map_reducer';





let reducers = combineReducers({

    map: map_reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store

window.store = store;