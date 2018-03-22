import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import allReducer from "./ConcatReducer";
import DevTools from "./DevTools";
let tempcompose = compose(applyMiddleware(thunkMiddleWare), DevTools.instrument())
let store = createStore(allReducer, ['use redux in react'], tempcompose);

export default store;