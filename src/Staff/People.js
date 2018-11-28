import React, {Component} from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav';
import './CSS/People.css'

class People extends Component{
    render(){
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                    <SideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'margin-left': '10%'}}>
                    
                    <div class="col s9 offset-s3">
                        <div class=" box" >
                            <div class="card z-depth-5" >
                                <div class="card-content" style={{paddingLeft: '6%', paddingRight :'6%'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>
                                    Hello there, You can talk to People Ops</b></span>
                                    <br />
                                    <div class="input-field " >
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Say Something</label>
                                        </div>
                                    </div>
                                        <button class="btn waves-effect waves-light" type="submit" name="action" 
                                style={{'margin-left': '5%', 'margin-right': '5%', padding: '5px','background-color': '#013042'}}>SEND
                                    <i class="material-icons right">send</i>
                                </button>
                                <br/><br/>
                            </div>
                        </div>


                    </div>
                </div> 
            </div>
        )
    }
}

export default People;