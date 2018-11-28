import React, {Component} from 'react'
import VGGLogo from './Images/logo.png';
import Spinner from'./Spinner';
import axios from 'axios';
import './CSS/Login.css';
import Particles from 'react-particles-js';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Login extends Component{
    state = {
        button : true,
        email: null,
        password: null,
        open: false,
        logged: null,
        error:false,
        message: ''
    }
    

    // createNotification = (type) => {
    //     return () => {
    //       switch (type) {
    //         case 'info':
    //           NotificationManager.info('Info message');
    //           break;
    //         case 'success':
    //           NotificationManager.success('Success message', 'Title here');
    //           break;
    //         case 'warning':
    //           NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    //           break;
    //         case 'error':
    //           alert('olll')
    //           NotificationManager.error('Error message', 'Click me!', 5000, () => {
    //             alert('callback');
    //           });
    //           break;
    //         default:;
    //       }
    //     };
    //   };


    handleLogin(e){
        e.preventDefault();
        let email = this.state.email;
        if(email!== null){
            let emailAt =email.includes('@');
            let emailDot =email.includes('.');
            let password = this.state.password
            if(emailAt === true && emailDot === true && password !== null){
                axios.get('http://localhost:3000/staffs').then((res)=>{
                let response = res.data;
                for(let x of response){
                    if(x.email.toLowerCase() === this.state.email && x.password ===this.state.password){
                        this.setState({error : true,
                            logged: true
                        });
                        this.messageHandler();
                        let name = x.name;
                        let email = x.email;
                        let SBU = x.SBU;
                        let competency = x.competency;
                        let id = x.id;
                        let lineManagerMail = x.managerMail;
                        let lineManagerName =  x.lineManagerName;
                        let staffType =  x.staffType;

                        localStorage.setItem('name', name); 
                        localStorage.setItem('email', email); 
                        localStorage.setItem('SBU', SBU); 
                        localStorage.setItem('competency', competency); 
                        localStorage.setItem('userid', id); 
                        localStorage.setItem('lineManagerMail', lineManagerMail);
                        localStorage.setItem('lineManagerName', lineManagerName);
                        localStorage.setItem('staffType', staffType);

                        this.setState({button : false});

                        if(x.lineManager === false ){
                            window.location.replace('http://'+window.location.host+"/staffdashboard")
                                
                        }else if(x.lineManager === "admin"){
                            window.location.replace('http://'+window.location.host+"/admin")
                        }else{
                            window.location.replace('http://'+window.location.host+"/linemanager")
                        }
                    }
                }
                if(this.state.logged !== true){
                    this.setState({error : true});
                    this.messageHandler('Invalid email or password', 'red')
                 }
                }).catch();
            }else{
                this.setState({error : true});
                this.messageHandler('Invalid email or password', 'red');
            }
        }
        
    }

    messageHandler(message, color){
        if(this.state.error){
            let answer = <p style={{color: color}}>{message}</p>
            this.setState({validationError : answer})
        }else{
            this.setState({validationError : null})
        }
       
       
    }

    emailHandler(e){
        let email = e.target.value.toLowerCase();
        this.setState({email})
    }
    passwordHandler(e){
        let password = e.target.value;
        this.setState({password})
    }

    render(){
        return(
            <div className='login-container' >
            
                <Particles params={{
            		particles: {
                        number: {
                            value: 15,
                            density: {
                              enable: true,
                              value_area: 500
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#86f080',
                            opacity: 0.4,
                            width: 1.3
                        },
                        move: {
                            enable: true,
                            speed: 15,
                            random: false,
                            straight: false,
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }
                        }
            	}}}style={{position: "absolute", "z-index": -1}}/>
                 
                <div className="bod" style={{padding: '0px', "z-index": 5, textAlign: 'center'}}>

                    <div class=''>
                    </div>
                    <div className='form' >
                        <form className="card z-depth-5 innerForm" onSubmit={(e)=>this.handleLogin(e)}>
                            <div className="card-content white-text">
                                <div>
                                    <img className=" responsive-img logo" src={VGGLogo} alt='VGG LOGO' />
                                </div>
                                {this.state.validationError}
                                <br/>
                                <div class="input-field col s12">
                                    <i className="material-icons prefix" style={{color: 'white'}}>email</i>
                                    {/* style={{color: 'white'} */}
                                    <input id="email" type="email" class="validate white-text" onChange={(e)=>this.emailHandler(e)}/>
                                    <label for="email" className='white-text'>Email</label>
                                </div>
                        
                                <div className="input-field col s12" style={{marginBottom : '12%'}}>
                                    <i class="material-icons prefix" style={{color: 'white'}}>vpn_key</i>
                                    <input id="password" type="password" class="validate white-text" onChange={(e)=>this.passwordHandler(e)}/>
                                    <label for="password" className='white-text'>Password</label>
                                </div> 

                                <br />
                                {this.state.button ? 
                                    <button  className="button btn waves-effect waves-light" type="submit" name="action" 
                                    style={{backgroundColor: 'transparent'}}>
                                        <p style={{color: 'white'}}>LOGIN</p>
                                        {/* <i class="material-icons right">send</i> */}
                                    </button>
                                     : <div><Spinner/></div>
                                    }
                                
                                <br />
                                
                            </div>
                        </form>
                    </div>
                    <div class=""></div>
                </div>
                
            </div>
           
        )
    }
}

export default Login;