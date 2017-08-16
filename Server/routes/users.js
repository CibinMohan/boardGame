import express from 'express';
import bodyParser from 'body-parser';
import ValidateInput from '../shared/validations/signup';
let app = express();

app.use(bodyParser.json());


app.post('/',function(request,response){
console.log(request.body);
const {errors, isValid} = validateInput(request.body);
if(!isValid){
    response.json(errors);
}
});

export default app;