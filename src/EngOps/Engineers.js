import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav'

class Engineers extends Component{
    render(){
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                    <AdminSideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'margin-left': '10%', marginRight: '3%'}}>
                    
                    <div class="col s9 offset-s2">
                        <h4 style={{textAlign :'left', paddingLeft: '5%'}}>ALL ENGINEERS</h4><br/>
                        <div class="container" style={{'margin-top':'1%', width: '100%'}}>

                        <div style={{textAlign :'left'}}> 
                            <a href='#!' class="waves-effect waves-light btn" style={{margin : '1%', backgroundColor: 'blue'}}>GROUP BY SBUS</a>
                            <a href='#!' class="waves-effect waves-light btn"  style={{margin : '1%', backgroundColor: 'purple'}}>GROUP BY COMPETENCY PERIOD</a>
                            <a href='#!' class="waves-effect waves-light btn" style={{margin : '1%', backgroundColor: 'black'}}>GROUP BY NAMES</a>

                        </div>

                        <div class='row'>
                            <div class='col s4'>
                                <p>ANNUAL LEAVE : <i class="fa fa-lg fa-stop" style={{color: "yellow"}}></i></p>
                                <p>CASUAL LEAVE : <i class="fa fa-lg fa-stop" style={{color: "blue"}}></i></p>
                                <p>EMERGENCY LEAVE : <i class="fa fa-lg fa-stop" style={{color: "red"}}></i></p>
                            </div>

                            <div class='col s4'>
                                <p>MATERNITY LEAVE : <i class="fa fa-lg fa-stop" style={{color: "green"}}></i></p>
                                <p>PATERNITY LEAVE : <i class="fa fa-lg fa-stop" style={{color: "orange"}}></i></p>
                                <p>SICK LEAVE : <i class="fa fa-lg fa-stop" style={{color: "violet"}}></i></p>
                            </div>

                            <div class='col s4'>
                                <p>STUDY LEAVE : <i class="fa fa-lg fa-stop" style={{color: "maroon"}}></i></p>
                                <p>COMPASSIONATE LEAVE : <i class="fa fa-lg fa-stop" style={{color: "teal"}}></i></p>
                                <p>OUT-OF-OFFICE LEAVE : <i class="fa fa-lg fa-stop" style={{color: "black"}}></i></p>
                            </div>
                        </div>
                            
                            
                            


                            <table class='responsive-table centered '>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        {/* <th>MAIL</th> */}
                                        <th>SBU</th>
                                        <th>COMPETENCY</th>
                                        <th> <i class="fa fa-lg fa-stop" style={{color: "yellow"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "blue"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "red"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "green"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "orange"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "violet"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "maroon"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "teal"}}></i></th>
                                        <th><i class="fa fa-lg fa-stop" style={{color: "black"}}></i></th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>ONI ADEOLA</td>
                                        {/* <td>adeola.oni@venturegardengroup.com</td> */}
                                        <td>AVITECH</td>
                                        <td>UI/UX</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>

                                    <tr>
                                        <td>ADEBAYO MOSES</td>
                                        {/* <td>adeola.oni@venturegardengroup.com</td> */}
                                        <td>AVITECH</td>
                                        <td>UI/UX</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                </div> 
            </div>
        </div>
        )
    }
}

export default Engineers;