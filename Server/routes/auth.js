import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import user from '../model/user';
import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import config from '../config';

let app = express();

app.use(bodyParser.json());

app.post('/', (request,response)=>{
    console.log("sasas123"+request.body);
    const {identifier,password} =request.body;
    user.query({
        where:{username:identifier},
        orWhere:{email:identifier}
    }).fetch().then(user=>
    {
        if(user){
            if(bcrypt.compareSync(password,user.get('password_digest'))){
                const token=jwt.sign({
                    id: user.get('id'),
                    username:user.get('username')
                },
                config.jwtSecret);
                response.json({token, success:true});
            }else{
                response.status(401).json({success:false,errors:{form:'Invalid Username/Password'}});
            }
        }else{
                response.status(401).json({success:false, errors:{form:'Invalid Username/Password'}});
            }
    });
});
  
export default app;