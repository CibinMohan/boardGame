import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import {SET_CURRENT_USER} from './types';

export default function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        user
    };
}
export function logout(){
    return dispatch =>{
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
export function login(userData){
    return dispatch =>{
         return axios.post('/api/auth', userData)
          .then((response)=>{
                 const tokens = response.data.token;
                 console.log(jwt.decode(response.data.token));
                 localStorage.setItem('jwtToken',response.data.token);
                 setAuthorizationToken(response.data.token);
                 dispatch(setCurrentUser(jwt.decode(response.data.token)));
          });  
   
    }
}