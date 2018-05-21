import * as React from 'react';
class Wrapper extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return <div>{this.props.children}</div>
    }
}
export default Wrapper;