import React from 'react';
import ian from './Images/ian.JPG'

const SideNav = (()=>{
    return(
        <div>
            <ul >
                <li><img class="circle responsive-img " src={ian} alt='MARY JANE'/></li>
                <li style={{color: '#F7F6C5'}}><b>MARY JANE</b></li><br/>
                <li style={{color: '#F7F6C5'}}><b>POWERTECH</b></li><br/>
                <li style={{color: '#F7F6C5'}}><b>UI/UX</b></li><br/>
                <li><div class="divider"></div></li><br />
                <li><a href="/staffdashboard" style={{color: 'white'}}>REQUEST LEAVE</a></li><br />
                <li><a href="/status" style={{color: 'white'}}>LEAVE STATUS</a></li><br />
                <li><a href="/records" style={{color: 'white'}}>LEAVE RECORDS</a></li><br />
                <li><a href="/people" style={{color: 'white'}}>PEOPLE OPS</a></li><br />
                

            </ul>
        </div>
    )
})

export default SideNav;