import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from "./components/Wrapper";
import App from "./components/App";
import Home from "./components/Home";
export const routes = (
    <Route>
        <Route path="/" component={Wrapper}>
            <IndexRoute component={App} />
            <Route path="home" component={Home} />
        </Route>
    </Route>
)