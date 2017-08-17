import React from 'react';
import SignUpForm from './SignUpForm';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages.js'
import { userSignupRequest} from '../actions/signupAction';
class SignupPage extends React.Component{
render(){
const {userSignupRequest, addFlashMessage} = this.props;
    return(
        <div className="row">
            <div className = "col-md-4-col-md-offset-4">
                <SignUpForm userSignupRequest ={userSignupRequest} addFlashMessage={addFlashMessage}/>
            </div>
        </div>
    );
}
}

SignupPage.propTypes ={
    addFlashMessage : React.PropTypes.func.isRequired,
    userSignupRequest : React.PropTypes.func.isRequired
}

export default connect(null,{ userSignupRequest,addFlashMessage })(SignupPage);