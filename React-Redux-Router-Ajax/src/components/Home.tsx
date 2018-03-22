import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router";
import { getUserInfo } from "../actions/asyncActions"
class Home extends React.Component<any, any>{
    [x: string]: any
    constructor(props: any) {
        super(props);
        console.log(this);
    }
    getInfo() {
        this.props.getUserInfo()
        console.log(this);
    }
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="/detail">Detail</Link>
                <h1>{this.props.userInfo.name}</h1>

                <button className="btn btn-primary" onClick={this.getInfo.bind(this)}>获取用户数据</button>
            </div>
        );
    }
}

export default connect((state: any) => {
    console.log(state);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    return { userInfo: state.user.userInfo }
}, { getUserInfo })(Home);