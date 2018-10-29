import React, {Component} from 'react'
import logo from '../Staff/Images/logo.png';
import Spinner from'./Spinner';
import axios from 'axios'

class Login extends Component{
    state = {
        button : true,
        email: null,
        password: null
    }

    handleLogin(e){
        let email = this.state.email;
        if(email!== null){
            let emailAt =email.includes('@');
            let emailDot =email.includes('.');
            let password = this.state.password
            if(emailAt === true && emailDot === true && password !== null){
                axios.get('http://localhost:3000/staffs').then((res)=>{
                let response = res.data;
                for(let x of response){
                    if(x.email === this.state.email && x.password ===this.state.password){
                        let name = x.name;
                        let email = x.email;
                        let SBU = x.SBU;
                        let competency = x.competency;
                        let id = x.id;

                        localStorage.setItem('name', name); 
                        localStorage.setItem('email', email); 
                        localStorage.setItem('SBU', SBU); 
                        localStorage.setItem('competency', competency); 
                        localStorage.setItem('id', id); 

                        this.setState({button : false});

                            setTimeout(()=>{
                                return(
                                    window.location.replace( 'http://'+window.location.host+"/staffdashboard")
                                ) 
                            }, 1000);
                    }
                }
                })
            }
    }
        
    }

    emailHandler(e){
        let email = e.target.value;
        this.setState({email})
    }
    passwordHandler(e){
        let password = e.target.value;
        this.setState({password})
    }

    render(){
        return(
            <div>
                <div class="row" style={{padding: '0px'}}>
                    <div class='col s2'></div>
                    <div class='col s4' style={{padding: '0px', 'margin-top': '5%'}}>
                        <div class="card z-depth-5">
                            <div class="card-image " style={{height : '495px', backgroundColor: '#013042'}}>
                             </div>
                         </div>
                     </div>
                            

                    <div class='col s4 ' style={{padding: '0px', 'margin-top': '5%', textAlign: 'center'}}>
                        <div class="card z-depth-5">
                            <div class="card-content white-text">
                                <h4 style={{'padding-bottom': '15%', color: 'black'}}>VGG Logo</h4>
                                <div class="input-field col s12">
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>email</i>
                                    <input id="email" type="email" class="validate" onChange={(e)=>this.emailHandler(e)}/>
                                    <label for="email">Email</label>
                                    <span class="helper-text" data-error="Wrong" data-success="Right">
                                    Please enter your Venture Garden Group mail</span>
                                </div>
                        
                                <div class="input-field col s12" style={{marginBottom : '12%'}}>
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>fingerprint</i>
                                    <input id="password" type="password" class="validate" onChange={(e)=>this.passwordHandler(e)}/>
                                    <label for="password">Password</label>
                                </div> 

                                <br />
                                {this.state.button ? 
                                    <button  onClick={(e)=>this.handleLogin(e)} class="btn waves-effect waves-light" type="submit" name="action" 
                                            style={{'background-color': '#51B74B', "margin-bottom":'11%', color: "white", padding: '5px'}}>LOGIN
                                                <i class="material-icons right">send</i>
                                    </button> : <div style={{"margin-bottom":'7.5%'}}><Spinner/></div>
                                    }
                                
                                <br />
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col s2"></div>
                </div>
            </div>
        )
    }
}

export default Login