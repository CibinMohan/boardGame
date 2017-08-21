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
        isLoading:false,
        nameemailCheck: false,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExcists = this.checkUserExcists.bind(this);
}
onChange(e)
{
    this.setState({[e.target.name]:e.target.value});
}1
isValid(){
    const {errors, isValid} = validateInput(this.state);    
    console.log("sasa"+errors);
    if(!isValid)
    {
        this.setState({errors})
    }
    return isValid;
}

checkUserExcists(e){
    const field = e.target.name;
    const val = e.target.value;
    if(val!==''){
        console.log(val);
        this.props.isUserExists(val).then(response=>{
                let errors = this.state.errors;
                let nameemailCheck = this.state.nameemailCheck;
                if(response.data.usr){
                    errors[field] = 'User already exist with same ' +field;
                    nameemailCheck =true;
                }
                else{
                    errors[field]= '';
                    nameemailCheck =false;
                }
                this.setState({errors, nameemailCheck});
        });
    }
}
onSubmit(e)
{
     e.preventDefault();
    if(this.isValid()){
        this.setState({errors:{},isLoading:true});
        this.props.userSignupRequest(this.state).then(
            (response) =>{
                
                console.log("aaa1aa"+response.data.success);
                if(response.data.success)
                {
                    this.props.addFlashMessage({
                    type:'success',
                    text:'Signup Success'
                     },
                     this.context.router.history.push('/')
                )
            }else{
                     console.log("aaaa"+response.errors);
                   this.setState({errors:response.data.error});
                }
                 this.setState({isLoading:false})
                // this.context.router.push('/')
            }
         );
    } 
    /*
    (response) =>
         this.setState({errors:response.data,isLoading:false})
         );
    .then(
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
            checkUserExcists ={this.checkUserExcists}
           
        />
         
        <CustTextField
            field="email"
            value ={this.state.email}
            label="Email"
            type="text"
            placeHolder="Enter email address"
            error={errors.email}
            onChange={this.onChange}
            checkUserExcists ={this.checkUserExcists}
           
           
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
                <button type="submit" disabled={this.state.isLoading || this.state.nameemailCheck} className="btn btn-default">Signup</button>
            </div>
        </form>
        </div>
    );
}
}

SignUpForm.contextTypes={
    router: React.PropTypes.object.isRequired
}

SignUpForm.propTypes ={
    addFlashMessage : React.PropTypes.func.isRequired,
    isUserExists : React.PropTypes.func.isRequired,
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignUpForm;