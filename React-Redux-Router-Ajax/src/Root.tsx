import * as React from 'react';
import { Router } from 'react-router';
import {routes} from "./routes";
class Root extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <Router routes={routes} history={this.props.history} />
        );
    }
}
export default Root;