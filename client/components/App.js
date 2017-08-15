import React from 'react';
import { Link} from 'react-router-dom';
import NavigationBar from './NavigationBar';

class App extends React.Component{
render(){
    return(
        <div className="container">
            <NavigationBar/>
            {this.props.children}  
        </div>
    );
}
}
export default App;