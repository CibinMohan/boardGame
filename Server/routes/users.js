import express from 'express';
import bodyParser from 'body-parser';
import ValidateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import user from '../model/user';

let app = express();

app.use(bodyParser.json());


app.post('/',function(request,response){
//const {errors, isValid} = validateInput(request.body);
//if(isValid)
    {
        const {username,email,password} = request.body;
        console.log("uName"+ username +"em"+ email +"pass"+password);
         
        const password_digest = bcrypt.hashSync(password,10);
        console.log("passdig"+password_digest);
        
        user.forge({
             username,email,password_digest
         },{hasTimestamps: true}).save()
         .then(user=>response.json({success:true}))
        .catch(response.json({success:false}));
         
    }
    //else{
         //response.status(400).json(errors);
    
});

export default app;