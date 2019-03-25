import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider as MobxProvider } from 'mobx-react';
import store from './stroe/Store';
import HOC from "./hoc/HOC";
//import App from "@/App";  webpack中配置了 别名
import App from "./components/App";
import Home from "./components/Home";
import RouterWrapper from "./components/RouterWrapper";
import NoMatch from "./components/NoMatch";
import createContext from "./context/createContext";
import Loadable from "react-loadable";
import asyncComponent from "./hoc/AsyncComponent"
import Loading from "./components/Loading"
let HomeWrapper = Loadable({
    loader: () => import(/* webpackChunkName:'Home' */"./components/Home"),
    loading: Loading
})
//asyncComponent(() => import(/* webpackChunkName:'Home' */"./components/Home"), Loading);
let AppWrapper = Loadable({
    loader: () => import(/* webpackChunkName:'App' */"./components/App"),
    loading: Loading
})
let NoMatchWrapper = Loadable({
    loader: () => import(/* webpackChunkName:'NoMatch' */"./components/NoMatch"),
    loading: Loading
})
// asyncComponent(() => import(/* webpackChunkName:'NoMatch' */"./components/NoMatch"), Loading);
export default class Root extends Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context)
    }
    render() {
        let obj = {
            name: "CJF",
            age: 27
        }
        return (<HashRouter>
            <createContext.Provider value={obj}>
                <MobxProvider store={store}>
                    <RouterWrapper>
                        <Switch>
                            <Route path="/" exact component={AppWrapper} />
                            <Route path="/home" component={HomeWrapper} />
                            <Route component={NoMatchWrapper} />
                        </Switch>
                    </RouterWrapper>
                </MobxProvider>
            </createContext.Provider>
        </HashRouter>)

    }

}
