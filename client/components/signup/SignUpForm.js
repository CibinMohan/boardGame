import React from 'react';
class SignUpForm extends React.Component{

constructor(props){
    super(props);
    var countries = require('country-list')();
    this.state = {
        username :'',
        email:'',
        password:'',
        passwordConf:'',
        errors:[]
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
onChange(e)
{
    this.setState({[e.target.name]:e.target.value});
}
onSubmit(e)
{
    this.setState({errors:{}});
    e.preventDefault();
    this.props.userSignupRequest(this.state).then((response) => this.setState({errors:response.data})
); 
    /*.then(
        ()=> {console.log('sssLLL')},
    ({data}) => this.setState({errors:data})
    );*/
}
render(){
    return(
        <div className="container">
        <form onSubmit ={this.onSubmit}> 
        <h2>Join our community</h2>   
            <div className="form-group">
                <label className ="control-label" >Name:</label>
                <input 
                    value={this.state.username}
                    onChange = {this.onChange}
                    type="text" 
                    name="username" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter user name"
                />
            </div>
            <div className="form-group">
                <label className ="control-label" >Email:</label>
                <input 
                    value={this.state.email}
                    onChange = {this.onChange}
                    type="email" 
                    name="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter email address"
                />
            </div>
            <div className="form-group">
                <label className ="control-label" >Password:</label>
                <input 
                    value={this.state.password}
                    onChange = {this.onChange}
                    type="password" 
                    name="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Enter user name"
                />
            </div>
            <div className="form-group">
                <label className ="control-label" >Confirm Password:</label>
                <input 
                    value={this.state.passwordConf}
                    onChange = {this.onChange}
                    type="password" 
                    name="passwordConf" 
                    className="form-control" 
                    id="passwordConf" 
                    placeholder="Re enter password"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Signup</button>
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