import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav'

class AdminDashboard extends Component{
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
                    
                        <h4 style={{textAlign :'left', paddingLeft: '5%'}}>ALL SBUS</h4><br/>
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: '#DC6ACF'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>AVITECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: '#F7F6C5'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>EDUTECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: '#21A179'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>EDUTECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: '#5E2BFF'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>EDUTECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: 'z-depth-5'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>EDUTECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="card z-depth-3" style={{paddingLeft: '7%', paddingRight : '7%',
                             backgroundColor: '#21A179'}}>
                                    <span class="card-title activator grey-text text-darken-4"><b>EDUTECH</b></span>
                                    <br />
                                <div class="card-content" >
                                    <div class='row'>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4'>
                                            <p>TOTAL LEAVE DAYS</p>
                                            <p>ANNUAL</p>
                                            <p>CASUAL</p>
                                        </div>
                                        <div class='col s4' >
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
                                            <p>ANNUAL</p>
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

export default AdminDashboard;