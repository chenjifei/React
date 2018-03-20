import * as React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./components/Home";
import Detail from "./components/Detail";
import App from "./App";
export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="detail" component={Detail} />
    </Route>
)