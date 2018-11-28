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
import PeopleOps from '../src/EngOps/PeopleOps';
import LineManager from '../src/LineManager/DashboardLine';
import Requests from '../src/LineManager/Requests';
import LMStatus from '../src/LineManager/LMStatus';
import LMRecords from '../src/LineManager/LMRecords';
import Staffs from '../src/LineManager/Staffs';
import Peopleops from '../src/LineManager/PeopleOps';
import NotFound from '../src/Staff/errorPage';
import Policies from '../src/Staff/Policies'

// <------- FAAN WORK ----- >

import FAANLogin from '../src/FAAN/FAAN.js';
import Page from '../src/FAAN/Dashboard';
import Transactions from '../src/FAAN/Transactions';
import Banks from '../src/FAAN/Banks';
import SBU from '../src/EngOps/SBU'

import {createBrowserHistory} from 'history';

let history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={Login}/>
            <Route exact path='/staffdashboard' component={StaffDashboard}/>
            <Route exact path='/status' component={Status}/>
            <Route exact path='/records'  component={Records}/>
            <Route exact path='/admin'  component={EngAdmin}/>
            <Route exact path='/competency'  component={Competency}/>
            <Route exact path='/people'  component={People}/>
            <Route exact path='/engineers'  component={Engineers}/>
            <Route exact path='/linemanager'  component={LineManager}/>
            <Route exact path='/requests'  component={Requests}/>
            <Route exact path='/lmstatus'  component={LMStatus}/>
            <Route exact path='/lmrecords'  component={LMRecords}/>
            <Route exact path='/staffs'  component={Staffs}/>
            <Route exact path='/peopleops'  component={Peopleops}/>
            <Route exact path='/policies'  component={Policies}/>
            <Route exact path='/sbugraph'  component={SBU}/>
            <Route component={NotFound}/>

            {/* <Route exact path='/engp'  component={EngPeople}/> */}
            <Route exact path='/eng'  component={PeopleOps}/>
            {/* <-----FAAN WORK -----> */}
            <Route exact path='/faan'  component={FAANLogin}/>
            <Route exact path='/page'  component={Page}/>
            <Route exact path='/transactions'  component={Transactions}/>
            <Route exact path='/banks'  component={Banks}/>

        </Switch>
    </Router>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
