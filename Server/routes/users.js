import express from 'express';
import bodyParser from 'body-parser';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import user from '../model/user';
import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';

let app = express();

app.use(bodyParser.json());
function validateInputs(data, otherValidations){
    let {errors} = validateInput(data);
    return user.query({
        where: {email:data.email},
        orWhere: {username: data.username}
    }).fetch().then(
        usr=>{
            if(usr)
            {
                    if(usr.get('email') === data.email)
                    {
                        errors.email = 'Email id already registered';
                    }
                    if(usr.get('username') === data.username)
                    {
                       errors.username = 'username id already registered';
                     }
            }
                       return{
                             errors,
                             isValid:isEmpty(errors)
                 };
        
        }
    )
    // return Promise.all([
    //         user.where({email: data.email}).fetch().then(usr=>
    //         {
    //             if(usr){
                    
    //                 errors.email = 'Email id already registered';
    //             }
    //         }),

    //         user.where({username:data.username}).fetch().then(usr=>
    //         {
    //             if(usr){
    //                 errors.username = 'username id already registered';
    //             }
    //         })
    //          ]).then(()=> {
    //                 return{
    //                     errors,
    //                     isValid:isEmpty(errors)
    //                 };
    //             });
    
}


app.post('/',function(request,response){
//const {errors, isValid} = validateInput(request.body);
//console.log("sasasdas22"+errors);
validateInputs(request.body,validateInput).then(({errors,isValid})=>
{
console.log(errors);
console.log(isValid);
if(isValid)
    {
        const {username,email,password} = request.body;
        console.log("uName"+ username +"em"+ email +"pass"+password);
         
        const password_digest = bcrypt.hashSync(password,10);
        console.log("passdig"+password_digest);
        
        user.forge({
             username,email,password_digest
         },{hasTimestamps: true}).save()
         .then(user=>response.json({success:true}))
         .catch(err=> response.json({error: err}));
    }
    else{
         response.json({error:errors,success:false});}
    
});
}

);

export default app;