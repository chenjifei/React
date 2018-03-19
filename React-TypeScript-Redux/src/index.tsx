import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TempHome } from "./components/Home";
import { Provider } from 'react-redux';
import {IndexReducer} from "./reducer/indexReducer";
import {createStore} from "redux";

const store = createStore(IndexReducer);

console.log(store);
console.log(store.getState());
window["store"] = store;
ReactDOM.render(
    <Provider store={store}>
        <TempHome />
    </Provider>
    , document.getElementById("root"));
