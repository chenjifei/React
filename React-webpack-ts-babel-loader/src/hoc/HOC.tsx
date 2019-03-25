import React, { Component } from 'react'
export default function HOCWrapper(Wrapper: any) {
    return class extends Component<any, any>{
        constructor(props: any, context: any) {
            super(props, context);
            console.log(props)
        }
        componentDidMount() {
            console.log('HOCWrapper componentDidMount')
        }
        render() {
            console.log('HOCWrapper render')
            return <Wrapper{...this.props} ></Wrapper>
        }
    }
}