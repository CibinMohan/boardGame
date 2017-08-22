import React from 'react';
import classnames from 'classnames';
import CustTextField from '../fields/CustTextField';
import validateInput from '../../../Server/shared/validations/login';
import {connect} from 'react-redux';
import {addFlashMessage} from '../actions/flashMessages.js'
import { login } from '../actions/login';

class LoginForm extends React.Component{

constructor(props){
    super(props)
    this.state={
        identifier :'',
        password :'',
        errors : {},
        isLoading :false

    }
    this.onSubmit = this.onSubmit.bind(this),
    this.onChange = this.onChange.bind(this)
    
}
isValid(){
    const {errors, isValid} = validateInput(this.state);
    if(!isValid)
    {
        this.setState({errors});
    }
    return isValid;
}
onSubmit(e){
    e.preventDefault();
    if(this.isValid())
    {
        this.setState({errors:{}, isLoading:true});
        this.props.login(this.state).then((response)=>{
        this.context.router.history.push('/')
        }).catch(error => {
            console.log(error.response)
            this.setState({errors:error.response.data.errors, isLoading:false})
        })
    }
}
onChange(e){
    this.setState({[e.target.name]: e.target.value});
}
render(){
    const {errors,identifier,password,isLoading} = this.state;
    return(
        <form onSubmit ={this.onSubmit}> 
        <h2>Login</h2>  
        {errors.form && <div className="alert alert-danger">{errors.form}</div> } 
        <CustTextField
            field="identifier"
            value ={this.state.identifier}
            label="Email id"
            type="text"
            placeHolder="Enter email id"
            error={errors.identifier}
            onChange={this.onChange}
        />
        <CustTextField
            field="password"
            value ={this.state.password}
            label="Password"
            type="password"
            placeHolder="Enter password"
            error={errors.password}
            onChange={this.onChange}
        />
        
          <div className="form-group">
                <button type="submit" disabled={this.state.isLoading} className="btn btn-primary btn-lg">Login</button>
            </div>
        </form>
    );
}
}

LoginForm.contextTypes={
    router: React.PropTypes.object.isRequired
}


LoginForm.propTypes ={
login : React.PropTypes.func.isRequired
}

export default connect(null,{ login})(LoginForm);