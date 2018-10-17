import React from 'react';
import './CSS/Side.css';
import { Input } from 'semantic-ui-react'

const Side = (()=>{
    return(
        <div className='side'>
            <div class='col s12'>
               <div class="card ">
                    <div class="card-content ">
                            <div><Input placeholder='Search...' /></div>
                        <ul>
                            <li><a href="#!" >Home</a></li>
                            <li><a href="/page" >Dashboard</a></li>
                            <li><a href="/transactions" >Transactions</a></li>
                            <li><a href="/banks" >Banks</a></li>
                            <li><div class="divider"></div></li>
                            <li><a href="/faan" >Logout <i class="material-icons right">power_settings_new</i></a></li>
                            <li><div class="divider"></div></li>
                            <li><a href="#!" >Messages</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    )
});

export default Side;