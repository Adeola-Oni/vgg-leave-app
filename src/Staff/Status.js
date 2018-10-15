import React, {Component} from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav'

class Status extends Component{
    render(){
        return(
            <div>
                
                <div style={{position: 'static', zIndex: '-1'}}>
                <SideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row">
                
                <div class="col s9 offset-s2">
                <div class="container" style={{'margin-top':'2%', width: '90%'}}>
                <br />
                    
                        <div class='row'  style={{'margin-left': '10%'}}>
                            <div  class="col s12"><p><b>LEAVE STATUS</b></p></div>
                                <div class="col s5" style={{paddingLeft: '5%', paddingRight: '3%'}}>
                                    <p><b>STATUS :</b></p><br /><br />
                                    <p><b>COMMENTS FROM LINE MANAGER: </b></p><br/><br/>
                                    
                                </div>
                                <div class="col s7">
                                    <p>PENDING</p><br /><br />
                                    <div class="card z-depth-3">
                                        <div class="card-content black-text">
                                        <span class="card-title">TESILIMI YUSUF</span>
                                        <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                        <div class="card-action red-text" >
                                            <a href="#!">Reply</a>
                                            <a href="/people">People Ops</a>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                        <button class="btn waves-effect waves-light" type="submit" name="action" 
                                style={{'margin-left': '5%', 'margin-right': '5%', 'background-color': '#013042'}}>CANCEL REQUEST
                                    <i class="material-icons right">cancel</i>
                                </button>
                                    </div>
                            </div>
                        </div>


                </div> 
            </div>
        )
    }
}

export default Status;