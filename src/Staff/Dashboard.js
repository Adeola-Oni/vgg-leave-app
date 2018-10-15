import React, {Component} from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav'

class Dashboard extends Component{
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
                    
                    <div class="col s9 offset-s2">
                    
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                                <br />
                                <form action="#" >
                                    <div class='row'  >
                                        <div  class="col s12"><p><b>REQUEST A LEAVE</b></p></div>
                                        <div class="col s4">
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Annual</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Casual</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Emergency</span>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col s4">
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Maternity</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Paternity</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Sick</span>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col s4">
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Study</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Compassionate</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Out-Of-Office</span>
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                                <br />

                                <div >
                                    <div class="input-field "  >
                                        <i class="material-icons prefix">mode_edit</i>
                                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                        <label for="icon_prefix2">Reason(s) for request <span style={{color :'red'}}>*</span></label>
                                    </div>
                                    <br />

                                    <div class="file-field input-field">
                                        <p>Please attach recommended files</p>
                                        <i class="material-icons left"> <input type="file" />attachment</i>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                        </div>
                                    </div>
                                    <br />

                                    {/* <div class="input-field datepicker">
                                        <input type="text" class="datepicker" />
                                    </div> */}

                                    <button class="btn waves-effect waves-light" type="submit" name="action" 
                                    style={{'background-color': '#013042'}}>Submit
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>


                    
            </div>
        )
    }
}

export default Dashboard;