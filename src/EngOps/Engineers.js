import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav';
import classes from './Engineers.css'

class Engineers extends Component{
    render(){
        return(
            <div>
                
                <Navbar />
                
                <div class="row">
                    <div class="col s2  z-depth-3 " className={classes.nav} >
                        <AdminSideNav />
                    </div>
.
                    <div class="col s10" >
                        <h4 className={classes.head}>ALL ENGINEERS</h4><br/>
                        <div class="container" style={{'margin-top':'1%', width: '100%'}}>
                        {/* <div style={{textAlign :'left'}}> 
                            <a class="waves-effect waves-light btn" style={{margin : '1%', backgroundColor: 'blue'}}>GROUP BY SBUS</a>
                            <a class="waves-effect waves-light btn"  style={{margin : '1%', backgroundColor: 'purple'}}>GROUP BY COMPETENCY PERIOD</a>
                            <a class="waves-effect waves-light btn" style={{margin : '1%', backgroundColor: 'black'}}>GROUP BY NAMES</a>
                            <input type='text' placeholder='Search' class='responsive'  />
                        </div> */}

                            <table class='responsive-table centered striped'>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        {/* <th>MAIL</th> */}
                                        <th>SBU</th>
                                        <th>COMPETENCY</th>
                                        <th>OUT-OF-OFFICE</th>
                                        <th>ANNUAL</th>
                                        <th>CASUAL</th>
                                        <th>EMERGENCY</th>
                                        <th>MATERNITY</th>
                                        <th>PATERNITY</th>
                                        <th>SICK</th>
                                        <th>STUDY</th>
                                        <th>COMPASSIONATE</th>
                                        
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