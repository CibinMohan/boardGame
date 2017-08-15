import React from 'react';
import { Link} from 'react-router-dom';
class NavigationBar extends React.Component{
    render(){
    return(  
        <div>
            <h1>Start</h1>
            {this.props.children}                        
            <Link to = "signup">Signup</Link>
            <Link to = "greet">Greet</Link>
        </div>
    );
    }
}

export default NavigationBar;