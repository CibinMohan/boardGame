import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, IndexRoute, Route} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Signin from './components/signup/Signin';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './components/utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import setCurrentUser from './components/actions/login';
const store = createStore(
   // (state ={})=> state,
    rootReducer,
    compose(
         applyMiddleware(thunk),
         window.devToolsExtension ? window.devToolsExtension(): f=>f
    )
   
);
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}
render(
<Provider store={store}>
<BrowserRouter >
<App>
        <Route path="/" component={Greetings}/>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/greet" component={Signin}></Route>
        <Route path="/login" component={LoginPage}></Route>
    </App>
</BrowserRouter>
</Provider>
, document.getElementById('app'));