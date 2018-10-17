import React, {Component} from 'react'
import logo from '../Staff/Images/logo.png';
import Spinner from'./Spinner';

class Login extends Component{
    state = {
        button : true,
    }

    handleLogin(e){
        this.setState({button : false});
        console.log(window.location);

        setTimeout(()=>{
            return(
                window.location.replace( 'http://'+window.location.host+"/staffdashboard")
            ) 
        }, 1000);
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
                                <h4 style={{'padding-bottom': '15%', color: 'black'}}>Venture Garden Group Logo</h4>
                                <div class="input-field col s12">
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>email</i>
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                    <span class="helper-text" data-error="Wrong" data-success="Right">
                                    Please enter your Venture Garden Group mail</span>
                                </div>
                        
                                <div class="input-field col s12" style={{marginBottom : '12%'}}>
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>fingerprint</i>
                                    <input id="password" type="password" class="validate" />
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