import React, {Component} from 'react';
import Navbar from './Navbar';
import SideNav from './SideNav'

class Records extends Component{
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
                    
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                            <div class="card z-depth-5" >
                                <div class="card-content" style={{paddingLeft: '7%', paddingRight : '7%'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>LEAVE RECORDS</b></span>
                                    <br />

                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">LEAVE TAKEN WITHOUT REPORT/PERMISSION</span>
                                            <div class='row'>
                                                <div class='col s8'>TOTAL DAYS TAKEN:</div>
                                                <div class='col s4'>0</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">ANNUAL LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                    <p>DAYS REMAINING :</p>
                                                    <p>ROLLOVER VROM 2017: </p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                    <p>0</p>
                                                    <p>0 </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">CASUAL LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                    <p>DAYS REMAINING :</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">COMPASSIONATE LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">EMERGENCY LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">MATERNITY/PATERNITY LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">SICK LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="card z-depth-3" >
                                        <div class="card-content black-text">
                                            <span class="card-title">STUDY LEAVE</span>
                                            <div class='row'>
                                                <div class='col s8'>
                                                    <p>TOTAL DAYS TAKEN:</p>
                                                </div>
                                                <div class='col s4'>
                                                    <p>15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                             </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        )
    }
}

export default Records;