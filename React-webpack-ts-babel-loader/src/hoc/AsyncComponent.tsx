import React, { Component } from "react";

export default function asyncComponent(importComponent: any, Loading: any) {
    return class AsyncComponent extends React.Component<any, any> {
        constructor(props: any, context: any) {
            super(props, context);
            this.state = {
                component: null
            };
        }
        async componentDidMount() {
            const component = await importComponent();
            this.setState({
                component: component.default
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : <Loading />;
        }
    }
    // return AsyncComponent;
}