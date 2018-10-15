import React from 'react';
import logo from '../Staff/Images/logo.png'
const Navbar = (()=>{
    return(
        <div class="navbar-fixed" >
            <nav style={{'background-color': '#013042', color : 'black'}}>
                <div class="nav-wrapper" style={{ 'margin-left' : '2%', 'margin-right':'2%'}}>
                    <a class="brand-logo" href='#!'>
                        <img class="responsive-img small responsive" src={logo} alt='MARY JANE' style={{width : '15%'}}/>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="https://venturegardengroup.com" >Home</a></li>
                        <li><a href="#!" >Leave Policies</a></li>
                        <li ><a href="/login">LogOut<i class="material-icons right"  style={{color: 'red'}}>exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
})
export default Navbar;