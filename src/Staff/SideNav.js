import React from 'react';
import ian from './Images/ian.JPG'
import './CSS/SideNav.css';

const SideNav = (()=>{
    return(
        <div>
            <ul id="slide-out" class="sidenav sidenav-fixed lis" >
                <li><img class="circle responsive-img" src={ian} alt='MARY JANE' style={{width: '60%'}}/></li>
                <li className='color'><b><h5>MARY JANE</h5></b></li>
                <li className='color'><b>POWERTECH</b></li>
                <li className='color'><b>UI/UX</b></li>
                <li><div class="divider"></div></li>
                <li><a href="/staffdashboard" >REQUEST LEAVE</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/status" >LEAVE STATUS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/records" >LEAVE RECORDS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/people" >PEOPLE OPS</a></li>
            </ul>
        </div>
    )
})

export default SideNav;