import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import App from "./components/App";
import Home from "./components/Home";
class Root extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <HashRouter>
                <Wrapper>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/home" component={Home}/>
                    </Switch>
                </Wrapper>
            </HashRouter>
        )
    }
}
export default Root;