import React, { Component } from 'react';
class Loading extends Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context)
    }
    componentDidMount() {
        console.log("------Loading-----");
        console.log(this);
    }
    render() {
        return <div>
            <h3>Loading...</h3>
        </div>
    }
}
export default Loading;