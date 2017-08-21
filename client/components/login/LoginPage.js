import React from 'react';
import LoginForm from './LoginForm';
class LoginPage extends React.Component{
render(){
    return(
        <div className="row">
            <div className = "col-md-4-col-md-offset-4">
                <LoginForm userSignupRequest />
            </div>
        </div>
    );
}
}

LoginPage.propTypes ={
}

export default LoginPage;