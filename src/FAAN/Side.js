import React from 'react';
import './CSS/Side.css';
import { Input } from 'semantic-ui-react'

const Side = (()=>{
    return(
        <div className='side z-depth-1 sidenav sidenav-fixed'>
            <div class='col s12'>
               <div><Input placeholder='Search...' /></div>
                    <h6><a href="#!" >Home</a></h6>
                    <h6><a href="/page" >Dashboard</a></h6>
                    <h6><a href="/transactions" >Transactions</a></h6>
                    <h6><a href="/banks" >Banks</a></h6>
                    <div class="divider"></div>
                    <h6><a href="/faan" >Logout 
                    <i class="material-icons right" style={{color: 'red'}}>power_settings_new</i></a></h6>
                    <div class="divider"></div>
                    <h6><a href="#!" >Messages</a></h6>
                   
            </div>         
        </div>
    )
});

export default Side;