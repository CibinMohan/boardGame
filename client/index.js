import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, IndexRoute, Route} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import Signin from './components/signup/Signin';

render(
<BrowserRouter >
<App>
        <Route path="/" component={Greetings}/>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/greet" component={Signin}></Route>
    </App>
</BrowserRouter>, document.getElementById('app'));