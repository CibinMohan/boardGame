import axios from 'axios';

export function login(userData){
    return dispatch =>{
        console.log("authaaa");
         return axios.post('/api/auth', userData);
         /*.then(function(response){
    console.log(response)
  });  */
   
    }
}