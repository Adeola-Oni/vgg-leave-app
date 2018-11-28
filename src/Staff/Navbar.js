import React, {Component} from 'react';
import logo from '../Staff/Images/logo.png';
import './CSS/Navbar.css';
import {SideNav, SideNavItem, Button} from 'react-materialize';
import Modal from 'react-responsive-modal';

class Navbar extends Component{
    state={
        side: false,
        open: false,
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
    logOutHandler(){
        localStorage.clear();
    }
    onOpenModal=() => {
        this.setState({open: true})
    }

    onCloseModal = () => {
        this.setState({
            open: false
         });
    };
    

    render(){ 
         let{open}= this.state;
    return(
        <div class="navbar-fixed navbar" style={{zIndex: 2}}>
            <nav className='nav-extended all'>
                
                <div class="nav-wrapper">
                    <a href="#!" className="brand-logo " > 
                        <img className=" vgglogo responsive" src={logo}  alt='VGG logo' />
                    </a>

                    <a href className='menu'>
                        <i class="material-icons" onClick={()=>this.onOpenModal()}>menu</i>
                    </a>

                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/policies" >Leave Policies</a></li>
                        <li><a href="/login"onClick={()=>this.logOutHandler()}>
                            LogOut<i class="material-icons right icon"  >exit_to_app</i></a></li>
                    </ul>
                    

                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="/staffdashboard">Request Leave</a></li>
                        <li className="tab"><a href="/status">Leave Status</a></li>
                        <li className="tab"><a href="/records">Leave Records</a></li>
                        <li className="tab"><a href="/people">People Ops</a></li>
                    </ul>
                </div>

                <Modal open={open} onClose={this.onCloseModal} className='modal'>
                    <div>
                        <ul >
                            <li ><b><h5>
                                {this.state.name}
                                </h5></b></li>
                            <li><b>{this.state.SBU}</b></li>
                            <li><b>{this.state.competency}</b></li>
                            <li><div className="divider"></div></li>
                            <li><a href="/staffdashboard" >REQUEST LEAVE</a></li>
                            <li><div class="divider"></div></li>
                            <li><a href="/status" >LEAVE STATUS</a></li>
                            <li><div class="divider"></div></li>
                            <li><a href="/records" >LEAVE RECORDS</a></li>
                            <li><div class="divider"></div></li>
                            <li><a href="/people" >PEOPLE OPS</a></li>
                            <li><a href="/policies" >Leave Policies</a></li>
                            <li><a href="/login"onClick={()=>this.logOutHandler()}>
                            LogOut<i class="material-icons right icon"  >exit_to_app</i></a></li>
                        </ul>
                    </div>
                </Modal>
            </nav>

        </div>


    )
    }
};

export default Navbar;