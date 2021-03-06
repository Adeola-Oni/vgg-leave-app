import React, {Component} from 'react';
import ian from './Images/ian.JPG'
import './CSS/SideNav.css';
import axios from 'axios';

class SideNav extends Component {
    state={
        name: null,
        SBU: null,
        competency: null,
        email: null,
        id: null
    }

    componentDidMount(){
        let name = localStorage.getItem("name");
        let email = localStorage.getItem('email'); 
        let SBU = localStorage.getItem('SBU'); 
        let competency =  localStorage.getItem('competency'); 
        let id =  localStorage.getItem('id');
        this.setState({
            name,
            SBU,
            competency,
            email,
            id
        })

    }
    render(){
        
    return(
        <div>
            <ul id="slide-out" class="sidenav sidenav-fixed lis z-depth-2" style={{paddingTop: '3%'}}>
                {/* <li><img class="circle responsive-img" src={ian} alt='MARY JANE' style={{width: '60%'}}/></li> */}
                <li className='color'><b><h5>
                    {this.state.name}
                    </h5></b></li>
                <li className='color'><b>{this.state.SBU}</b></li>
                <li className='color'><b>{this.state.competency}</b></li>
                <br/><br/>
                <li><div class="divider"></div></li>
                <li><a href="/linemanager" >REQUEST LEAVE</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/lmstatus" >LEAVE STATUS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/lmrecords" >LEAVE RECORDS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/requests" >REQUESTS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/staffs" >STAFFS</a></li>
                <li><div class="divider"></div></li>
                <li><a href="/peopleops" >PEOPLE OPS</a></li>
            </ul>
        </div>
    )
    }
}
export default SideNav;