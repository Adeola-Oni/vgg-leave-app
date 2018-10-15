import React from 'react';

const Navbar = (()=>{
    return(
        <nav style={{'background-color': '#013042', color : 'white'}}>
            <div class="nav-wrapper" style={{ 'margin-left' : '2%', 'margin-right':'2%'}}>
                <a class="brand-logo">VGG Logo</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="sass.html" >Home</a></li>
                    <li><a href="sass.html" >Enquiries</a></li>
                    <li ><a href="/login">LogOut<i class="material-icons right"  style={{color: 'red'}}>exit_to_app</i></a></li>
                </ul>
            </div>
        </nav>
    )
})

export default Navbar;