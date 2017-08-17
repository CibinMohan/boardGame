import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, IndexRoute, Route} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import Signin from './components/signup/Signin';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const store = createStore(
    (state ={})=> state,
    applyMiddleware(thunk)
);
render(
<Provider store={store}>
<BrowserRouter >
<App>
        <Route path="/" component={Greetings}/>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/greet" component={Signin}></Route>
    </App>
</BrowserRouter>
</Provider>
, document.getElementById('app'));