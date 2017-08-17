import React from 'react';
import { Link} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import FlsahMessageList from './flash/FlsahMessageList';

class App extends React.Component{
render(){
    return(
        <div className="container">
            <NavigationBar/>
            <FlsahMessageList/>
            {this.props.children}  
        </div>
    );
}
}
export default App;