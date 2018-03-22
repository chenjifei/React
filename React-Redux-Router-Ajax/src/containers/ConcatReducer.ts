import { combineReducers } from 'redux';
import homeReducer from "../reducers/homeReducer";
import detailReducer from "../reducers/detailReducer";
import userInfoReducer from "../reducers/userInfoReducer"
import { routerReducer } from 'react-router-redux';
var merged =  require("obj-merged");

let allReducer = combineReducers(merged({}, {
    home: homeReducer,
    //  detail: detailReducer
    user:userInfoReducer
}, { routing: routerReducer }))

export default allReducer;