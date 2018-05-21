import * as React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return <div>
            <p>Home</p>
            <Link to="/">App</Link>
        </div>
    }
}
export default Home;