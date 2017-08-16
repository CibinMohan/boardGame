import express from 'express';
import bodyParser from 'body-parser';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'
let app = express();

app.use(bodyParser.json());

function validateInput(data){
    let errors ={};

    if(Validator.isEmpty(data.username))
    {
        errors.username = 'The field is required';
    }
    
    if(Validator.isEmpty(data.email))
    {
        errors.email = 'The field is required';
    }
    if(!Validator.isEmail(data.email))
    {
        errors.email = 'Needs to be email';
    }
    
    if(Validator.isEmpty(data.password))
    {
        errors.password = 'The field is required';
    }
    
    if(Validator.isEmpty(data.passwordConf))
    {
        errors.passwordConf = 'The field is required';
    }
    console.log(errors);
    return{
        errors,
        isValid: isEmpty(errors)
    }
}
app.post('/',function(request,response){
console.log(request.body);
const {errors, isValid} = validateInput(request.body);
if(!isValid){
    response.json(errors);
}
});

export default app;