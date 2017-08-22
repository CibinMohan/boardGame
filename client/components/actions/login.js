import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER} from './types';

export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        user
    }
}
export function login(userData){
    return dispatch =>{
        console.log("authaaa");
         return axios.post('/api/auth', userData)
          .then((response)=>{
                 const token = response.data.token;
                 localStorage.setItem('jwtToken',token);
                 setAuthorizationToken(token);
                 dispatch(setCurrentUser(jwt.decode(token)));
          });  
   
    }
}