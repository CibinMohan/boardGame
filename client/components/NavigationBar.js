import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from './actions/login'
class NavigationBar extends React.Component{
    logout(e){
        e.preventDefault();
        this.props.logout();
    }
    render(){
     const {isAuthenticated}  = this.props.auth; 
     const userLink =
            (<ul className="nav navbar-nav navbar-right">
                <li><a href ="#" onClick={this.logout.bind(this)}>Logout</a>
                </li>
                </ul>
     
     );
     const gustLink =(
            <ul className="nav navbar-nav navbar-right">
                <li>
                <Link to = "signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to = "login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
     );
    return(  
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Styx Football</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><Link to = "greet">Greet</Link></li>
                    <li><Link to = "greet">Greet</Link></li>
                    </ul>
                    <div className="collapse navbar-collapse">
                        {isAuthenticated ? userLink: gustLink}
                    </div>
                </div>
            </nav>

    );
    }
}
NavigationBar.propType ={
    auth: React.PropTypes.object.isRequired,
    logout:React.PropTypes.func.isRequired
};
function mapStateToProp(state){
    return{
        auth:state.auth
    };
}
export default connect(mapStateToProp,{logout}) (NavigationBar);