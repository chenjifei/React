import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from "../actions/homeActions";
import { Link } from "react-router";
class Home extends React.Component<any, any>{
    [x: string]: any
    constructor(props: any) {
        super(props);
        console.log(this);
    }
    add() {
        this.props.actions.add(1);
    }
    sub() {
        this.props.actions.sub(1);
    }
    prev() {
        let index = (this.props.currentIndex - 1 + this.props.InitArr.length) % this.props.InitArr.length;
        this.props.actions.prev(index);
        console.log(this,index);
    }
    next() {
        let index = (this.props.currentIndex + 1) % this.props.InitArr.length;
        this.props.actions.next(index);
        console.log(this,index);
    }
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="/detail">Detail</Link>
                <h5>{this.props.homeCounter}</h5>
                <h5>{this.props.InitArr[this.props.currentIndex]}</h5>
                <button type="button" className="btn btn-primary" onClick={this.add.bind(this)}>加</button>
                <button type="button" className="btn btn-info" onClick={this.sub.bind(this)}>减</button>
                <button type="button" className="btn btn-success" onClick={this.prev.bind(this)}>上一个</button>
                <button type="button" className="btn btn-danger" onClick={this.next.bind(this)}>下一个</button>
            </div>
        );
    }
}
export default connect((state: any) => {
    return {
        homeCounter: state.homeReducers.homeCounter,
        InitArr: state.homeReducers.InitArr,
        currentIndex: state.homeReducers.currentIndex
    }

}, (dispatch: any) => {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    }

})(Home);