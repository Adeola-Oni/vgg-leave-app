import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router, Route, Switch} from 'react-router'
import StaffDashboard from '../src/Staff/Dashboard';
import Login from '../src/Staff/Login';
import Status from '../src/Staff/Status';
import Records from '../src/Staff/Records';
import EngAdmin from '../src/EngOps/AdminDashboard';
import Competency from '../src/EngOps/Competency';
import People from '../src/Staff/People';
import Engineers from '../src/EngOps/Engineers';
// import EngPeople from '../src/EngOps/People';
import PeopleOps from '../src/EngOps/PeopleOps';

import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/staffdashboard' component={StaffDashboard}/>
            <Route exact path='/status' component={Status}/>
            <Route exact path='/records'  component={Records}/>
            <Route exact path='/admin'  component={EngAdmin}/>
            <Route exact path='/competency'  component={Competency}/>
            <Route exact path='/people'  component={People}/>
            <Route exact path='/engineers'  component={Engineers}/>
            {/* <Route exact path='/engp'  component={EngPeople}/> */}
            <Route exact path='/eng'  component={PeopleOps}/>

        </Switch>
    </Router>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
