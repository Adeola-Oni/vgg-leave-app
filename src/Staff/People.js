import React, {Component} from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav'

class People extends Component{
    render(){
        return(
            <div>
                
                <Navbar />
                
                <div class="row">
                    <div class="col s2  z-depth-3 " style={{'background-color': '#033b52 ', color : 'white', 'padding-top':'1%',
                    textAlign: 'center', paddingBottom: '2%'}}>
                        <SideNav />
                    </div>

                    <div class="col s10">
                        <div class="container" style={{'margin-top':'15%', width: '95%'}}>
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

export default People;