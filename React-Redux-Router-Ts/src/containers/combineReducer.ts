import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import homeReducers from "../reducers/homeReducer";
import detailReducers from "../reducers/detailReducer";
var merged =  require("obj-merged");
export const combineReducer = combineReducers(merged({}, {
    homeReducers,
    detailReducers
}, {
        routing: routerReducer
    }))