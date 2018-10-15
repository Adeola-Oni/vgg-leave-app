import React from 'react';

const AdminSideNav = (()=>{
    return(
        <div>
            <ul >
                <li style={{color: '#F7F6C5'}}><b>ADMIN</b></li><br/>
                <li style={{color: '#F7F6C5'}}><b>ENGINEERING OPERATIONS</b></li><br/><br />
                <li><div class="divider"></div></li><br /><br />
                <li id='sbu'><a href="/admin" style={{color: 'white'}}>SBUs</a></li><br />
                <li><a href="/competency" style={{color: 'white'}}>COMPETENCY CENTER</a></li><br />
                <li><a href="#!" style={{color: 'white'}}>SBUs GRAPH</a></li><br />
                <li><a href="#!" style={{color: 'white'}}>CC GRAPH</a></li><br />
                <li><a href="/engineers" style={{color: 'white'}}>ENGINEERS</a></li><br />
                <li><a href="/people" style={{color: 'white'}}>PEOPLE OPS</a></li><br /><br />
            </ul>
        </div>
    )
})

export default AdminSideNav;