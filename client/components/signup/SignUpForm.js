import React from 'react';
import classnames from 'classnames';
import CustTextField from '../fields/CustTextField';
import validateInput from '../../../Server/shared/validations/signup';

class SignUpForm extends React.Component{

constructor(props){
    super(props);
    var countries = require('country-list')();
    this.state = {
        username :'',
        email:'',
        password:'',
        passwordConf:'',
        errors:{},
        isLoading:false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onChange(e)
{
    this.setState({[e.target.name]:e.target.value});
}
isValid(){
    const {errors, isValid} = validateInput(this.state);    
    if(!isValid)
    {
        this.setState({errors})
    }
    return isValid;
}
onSubmit(e)
{
     e.preventDefault();
    if(this.isValid()){
        this.setState({errors:{},isLoading:true});
        this.props.userSignupRequest(this.state).then((response) => this.setState({errors:response.data,isLoading:false})
         );
    } 
    /*.then(
        ()=> {console.log('sssLLL')},
    ({data}) => this.setState({errors:data})
    );*/
}
render(){
    const {errors} = this.state;
    return(
        <div className="container">
        <form onSubmit ={this.onSubmit}> 
        <h2>Join our community</h2>   
        <CustTextField
            field="username"
            value ={this.state.username}
            label="Name"
            type="text"
            placeHolder="Enter user name"
            error={errors.username}
            onChange={this.onChange}
           
        />
         
        <CustTextField
            field="email"
            value ={this.state.email}
            label="Email"
            type="text"
            placeHolder="Enter email address"
            error={errors.email}
            onChange={this.onChange}
           
        />
         
        <CustTextField
            field="password"
            value ={this.state.password}
            label="Password"
            type="password"
            placeHolder="Create password"
            error={errors.password}
            onChange={this.onChange}
           
        />
         
        <CustTextField
            field="passwordConf"
            value ={this.state.passwordConf}
            label="Confirm Password"
            type="password"
            placeHolder="Re-enter password"
            error={errors.passwordConf}
            onChange={this.onChange}
           
        />
          <div className="form-group">
                <button type="submit" disabled={this.state.isLoading} className="btn btn-default">Signup</button>
            </div>
        </form>
        </div>
    );
}
}

SignUpForm.propTypes ={
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignUpForm;