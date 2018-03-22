import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from "react-router";
class Detail extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        console.log(this);
    }
    render() {
        return (
            <div>
                <h3>Detail</h3>
                <Link to="/home">Home</Link>
            </div>
        );
    }
}
export default Detail;