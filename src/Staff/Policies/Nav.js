import React, {Component} from 'react';
import logo from '../Images/logo.png';
import './Nav.css'

class Nav extends Component{
  
    logOutHandler(){
        localStorage.clear();
    }
    
    
    render(){    
    return(
        <div class="navbar-fixed navbar" >
            <nav className='all'>
                <div class="nav-wrapper wrap" >
                    <a class="brand-logo" href='#!'>
                        <img class="responsive-img small responsive" src={logo} style={{width: '20%'}} alt='MARY JANE' />
                    </a>
                    <ul class="right ">
                        <li ><a href="/login" onClick={()=>this.logOutHandler()}>LogOut<i class="material-icons right icon"  >exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
    }
};

export default Nav;