import axios from 'axios';

export function userSignupRequest(userData){
    return dispatch =>{
         return axios.post('/api/users', userData);
         /*.then(function(response){
    console.log(response)
  });  */
   
    }
}
export function isUserExists(identifer){
  return dispatch =>{
    return axios.get(`/api/users/${identifer}`)
  }
}