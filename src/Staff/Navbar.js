import React from 'react';
import logo from '../Staff/Images/logo.png';
import './CSS/Navbar.css'
const Navbar = (()=>{
    return(
        <div class="navbar-fixed navbar" >
            <nav className='all'>
                <div class="nav-wrapper wrap" >
                    <a class="brand-logo" href='#!'>
                        <img class="responsive-img small responsive" src={logo} style={{width: '20%'}} alt='MARY JANE' />
                    </a>
                    <ul class="right ">
                        
                        <li><a href="#!" >Leave Policies</a></li>
                        <li ><a href="/login">LogOut<i class="material-icons right icon"  >exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
});

export default Navbar;