import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducer } from "./combineReducer";
import DevTools from "./DevTools";
const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore)

export const store = finalCreateStore(combineReducer, DevTools.instrument());
