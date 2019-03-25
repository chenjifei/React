import React, { Component } from 'react';
class NoMatch extends Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context)
    }
    componentDidMount() {
        console.log("------No Match-----");
        console.log(this);
    }
    render() {
        return <div>
            <h1>No Match</h1>
        </div>
    }
}
export default NoMatch;