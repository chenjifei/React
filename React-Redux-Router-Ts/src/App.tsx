import * as React from "react";
import DevTools from "./containers/DevTools";
class App extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.children}
                <DevTools/>
            </div>
        );
    }
}
export default App;