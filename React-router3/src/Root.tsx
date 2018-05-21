import * as React from 'react';
import { Router, hashHistory } from 'react-router';
import { routes} from "./Routes";
class Root extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return <Router history={hashHistory} routes={routes} />
    }
}
export default Root;