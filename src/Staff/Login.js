import React, {Component} from 'react'

class Login extends Component{
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
                            

                    <div class='col s4 ' style={{padding: '0px', 'margin-top': '5%'}}>
                        <div class="card z-depth-5">
                            <div class="card-content white-text">
                                <h4 style={{'padding-bottom': '15%', color: 'black'}}>Venture Garden Group</h4>
                                <div class="input-field col s12">
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>email</i>
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                    <span class="helper-text" data-error="Wrong" data-success="Right">
                                    Please Enter Your Venture Garden Group Mail</span>
                                </div>
                        
                                <div class="input-field col s12">
                                    <i class="material-icons prefix" style={{color: '#51B74B'}}>fingerprint</i>
                                    <input id="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                                </div> 

                                <br />
                                <button class="btn waves-effect waves-light" type="submit" name="action" 
                                        style={{'background-color': '#51B74B', "margin-bottom":'10%', "margin-top":'12%' }}>LOGIN
                                            <i class="material-icons right">send</i>
                                </button>
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