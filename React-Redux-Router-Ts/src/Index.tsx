import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from "./Root";
import { hashHistory } from "react-router";
import { store } from "./containers/configStore";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux';
let history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <Root history={history} />
    </Provider>
    , document.getElementById("root"));