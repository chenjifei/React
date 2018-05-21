import * as React from 'react';
import {Link} from 'react-router';
class App extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return <div>
            <p>App</p> 
            <Link to="/home">Home</Link>
            </div>
    }
}
export default App;