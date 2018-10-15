import React, {Component} from 'react';
// import classes from './Dashboard.css';
import {Image, Row, Col, Grid} from 'react-bootstrap';
import Navbar from './Navbar';
import SideNav from './SideNav'

class Dashboard extends Component{
    render(){
        return(
            <div>
                
                <Navbar />
                
                <div class="row">
                    <div class="col s2  z-depth-3 " style={{'background-color': '#033b52 ', color : 'white', 
                    'padding-top':'1%', textAlign: 'center', paddingBottom: '1%'}}>
                        <SideNav />
                    </div>

                    <div class="col s10">
                    
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                            <div class="card z-depth-3" >
                                <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4"><b>REQUEST A LEAVE</b></span>
                                <br />
                                <form action="#">
                                    <div class='row'  style={{'margin-left': '5%', 'margin-right': '5%'}}>
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

                                <div class="input-field " style={{'margin-left': '5%', 'margin-right': '5%'}}>
                                    <i class="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                    <label for="icon_prefix2">Reason(s) for request <span style={{color :'red'}}>*</span></label>
                                </div>
                                <br />

                                <div class="file-field input-field" style={{'margin-left': '5%', 'margin-right': '5%'}}>
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
                                style={{'margin-left': '5%', 'margin-right': '5%', 'background-color': '#013042'}}>Submit
                                    <i class="material-icons right">send</i>
                                </button>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div> 
            </div>
        )
    }
}

export default Dashboard;