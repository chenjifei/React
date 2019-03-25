import React from 'react';
import { observer, inject } from 'mobx-react';
import createContext from "../context/createContext"
@inject("store")
@observer
class Home extends React.Component<any, any>{
    static contextType = createContext;//注入 context
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            count: 1,
            name: 'Home'
        }
    }
    // componentWillMount() {//React 16 中 弃用但未删除  React17 将会删除  和getDerivedStateFromProps混用 浏览器会有警告
    //     console.log("---------------Home  componentWillMount--------------------")
    //     console.log(this.props, this.context)
    // }
    componentWillReceivePorps() {//React 16 中 弃用但未删除  React17 将会删除
        console.log("---------------Home  componentWillReceivePorps--------------------")
        console.log(this.props, this.context)
    }
    // componentWillUpdate() {//React 16 中 弃用但未删除  React17 将会删除  和getDerivedStateFromProps混用 浏览器会有警告
    //     console.log("---------------Home  componentWillUpdate--------------------")
    //     console.log(this.props, this.context)
    // }
    static getDerivedStateFromProps(props: any, state: any) {
        console.log("-----------------------------Home getDerivedStateFromProps----------------------------")
        console.log(props, state)
        return null;//返回一个对象作为新的state，返回null则说明不需要更新state 配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法
    }
    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log("-----------------------------Home shouldComponentUpdate----------------------------")
        console.log(nextProps, nextState)
        //组件接收到新的props或者state时调用，return true就会更新dom（使用diff算法更新），return false能阻止更新（不调用render）
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {// 组件更新前触发
        console.log("-----------------------------Home getSnapshotBeforeUpdate----------------------------")
        console.log(prevProps,prevState)
        // update发生的时候，在render之后，在组件dom渲染之前；返回一个值，作为componentDidUpdate的第三个参数；配合componentDidUpdate, 可以覆盖componentWillUpdate的所有用法
        return 456;
    }
    componentDidMount() {
        console.log("---------------Home  componentDidMount--------------------")
        console.log(this.props, this.context)
    }
    componentDidUpdate() { // 组件更新后触发
        console.log("---------------Home  componentDidUpdate--------------------")
        console.log(arguments)
    }
    componentWillUnmount() { // 组件卸载时触发
        console.log("---------------Home  componentWillUnmount--------------------")
        console.log(this.props, this.context)
    }
    render() {
        console.log("---------Home render--------------")
        return (<div className="home-wrapper">
            <h1>{this.state.name}</h1>
            <h1>{this.state.count}</h1>
            <h1>{this.props.store.count}</h1>
            <hr />
            <button onClick={() => this.clickStateHandler()}>state++</button>
            <button onClick={() => this.clickStoreHandler()}>store++</button>
        </div>);
    }
    componentDidCatch(error: any, info: any) {//React 16 新增加
        console.log("----------------Home componentDidCatch-----------------------------------")
        console.log(error, info)
    }
    componentWillReact() { //mobx-react提供的什么周期方法
        console.log("----------------Home  mobx-react componentWillReact-----------------------------------")
        console.log(this, arguments)
    }
    clickStoreHandler() {
        this.props.store.addCount()
    }
    clickStateHandler() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this, this.state)
        })
        console.log(this, this.state)
    }
}
export default Home
