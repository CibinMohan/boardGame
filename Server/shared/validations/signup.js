import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data){
    let errors ={};
    let isValid = false;
    console.log("ser0"+data.username);
    if(Validator.isEmpty(data.username))
    {
        console.log("ser"+data.username);
        errors.username = 'The field is required';
    }
    
    
    if(!Validator.isEmail(data.email))
    {
        errors.email = 'Email Id not valid';
    }

    if(Validator.isEmpty(data.email))
    {
        errors.email = 'This field is required';
    }
    
    if (!Validator.equals(data.password,data.passwordConf))
    {
        errors.passwordConf = 'Passwords must match';
    }
    if(Validator.isEmpty(data.password))
    {
        errors.password = 'The field is required';
    }
    
    if(Validator.isEmpty(data.passwordConf))
    {
        errors.passwordConf = 'The field is required';
    }
    //console.log(errors);
    return{
        errors,
        isValid: isEmpty(errors)
    }
}