import React, {Component} from 'react';
import './CSS/FAAN.css';
import Spinner from './Spinner';


class Login extends Component{
    state = {
        button : true,
    }

    handleLogin(e){
        this.setState({button : false});
        console.log(window.location);

        setTimeout(()=>{
            return(
                window.location.replace( 'http://'+window.location.host+"/page")
            ) 
        }, 1000);
    }

    render(){
        
        return(
            <div>
                <div class="row" style={{marginTop: '10%', textAlign : 'center'}}>
                    <div class="col s3 "></div>
                    <div class="col s6 ">
                        <div class="card z-depth-5">
                            <div class="card-content">
                                <b><h5>POS Monitoring Portal</h5></b>
                                <div>
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix" >Username</i>
                                        <input id="Username" type="text" class="validate" />
                                        <label for="Username">Username</label>
                                        {/* <span class="helper-text" data-error="Wrong" data-success="Right">
                                        Please enter your username</span> */}
                                    </div>

                                    <div class="input-field col s12 ">
                                        <i class="material-icons prefix" >Password</i>
                                        <input id="password" type="password" class="validate" />
                                        <label for="password">Password</label>
                                        {/* <span class="helper-text" data-error="Wrong" data-success="Right">
                                        Please enter your password</span> */}
                                    </div>
                                    {this.state.button ? 
                                        <button class="btn waves-effect waves-light" type="submit" name="action"
                                        onClick={(e)=>this.handleLogin(e)} style={{padding: '5px'}}>LOGIN
                                                <i class="material-icons right">send</i>
                                        </button> : 
                                            <Spinner/>
                                        }
                                    
                                </div>
                        </div>
                    </div>
                    <div class="col s3 "></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;