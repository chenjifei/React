import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class RouterWrapper extends Component<any, any>{
  
    constructor(props: any, context: any) {
        super(props, context)
    }
    componentDidMount() {
        console.log("------router wrapper-----");
        console.log(this);
    }
    render() {
        return <div>
            <Link to="/">APP</Link>
            <Link to="/home">Home</Link>
            <div className="container">{this.props.children}</div>
        </div>
    }
}
export default RouterWrapper;