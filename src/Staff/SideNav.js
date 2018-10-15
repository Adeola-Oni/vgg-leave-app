import React from 'react';
import ian from './Images/ian.JPG'

const SideNav = (()=>{
    return(
        <div style={{color: 'black'}}>

                <ul id="slide-out" class="sidenav sidenav-fixed z-depth-5" style={{marginTop: '4.7%', paddingTop: '1%',
                     'background-color': '#FFFAFB', color : 'white', textAlign:'center'}}>
                    <li><img class="circle responsive-img " src={ian} alt='MARY JANE' style={{width: '60%'}}/></li>
                    <li style={{color: 'black',}}><b><h5>MARY JANE</h5></b></li>
                    <li style={{color: 'black'}}><b>POWERTECH</b></li>
                    <li style={{color: 'black'}}><b>UI/UX</b></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/staffdashboard" >REQUEST LEAVE</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/status" >LEAVE STATUS</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/records" >LEAVE RECORDS</a></li>
                    <li><div class="divider"></div></li>
                    <li><a href="/people" >PEOPLE OPS</a></li>
                </ul>
                {/* <p><a href="/records" >LEAVE RECORDS</a></p> */}
            
        </div>
    )
})

export default SideNav;