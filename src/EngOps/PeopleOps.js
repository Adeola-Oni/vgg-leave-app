import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav';

class PeopleOps extends Component{
    render(){
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                    <AdminSideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'margin-left': '10%'}}>
                    
                <div class="col s9 offset-s2">
                <div class="container" style={{'margin-top':'15%', width: '95%'}}>
                    <div class="card z-depth-3" >
                        <div class="card-content" style={{paddingLeft: '6%'}}>
                            <span class="card-title activator grey-text text-darken-4"><b>
                            Hello Engineering Operations Admin, You can talk to People Ops</b></span>
                            <br />
                            <div class="input-field " >
                                <textarea id="textarea1" class="materialize-textarea"></textarea>
                                <label for="textarea1">Say Something</label>
                                </div>
                            </div>
                                <button class="btn waves-effect waves-light" type="submit" name="action" 
                        style={{'margin-left': '5%', 'margin-right': '5%', 'background-color': '#013042'}}>SEND
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

export default PeopleOps;