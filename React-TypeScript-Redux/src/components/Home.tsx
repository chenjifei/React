import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from "../actions/index";
class Home extends React.Component<any, any>{
    constructor(props) {
        super(props);
        console.log("+++++++++++++++++++++++++++++")
        console.log(this);
    }
    add() {
        this.props.actions.add(1)
    }
    sub() {
        this.props.actions.sub(1)
    }
    render() {
        return (
            <div>
                <p>Home</p>
                <h3>{this.props.value}</h3>
                <button className="btn btn-primary" onClick={this.add.bind(this)}>增加</button>
                <button className="btn btn-info" onClick={this.sub.bind(this)}> 减少</button>

            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    value: state.value
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})
let TempHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { TempHome };