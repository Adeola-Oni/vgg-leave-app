import React, {Component} from 'react';
import AdminSideNav from './AdminSideNav';
import Navbar from '../Staff/Navbar';
import {Bar} from 'react-chartjs-2';

class SBU extends Component{
    state={
        Avitech:{},
        year: ''
    }
    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({year})
       
        const Avitech = {
            datasets: [{
                data: [10, 20, 30,40, 15, 12, 2, 20, 30,40, 15, 12],
                backgroundColor: [
                    "red",
                    "silver",
                    "blue",
                    "pink",
                    "purple",
                    "aqua",
                    "violet",
                    "teal",
                    "brown",
                    "yellow",
                    "orange",
                    "indigo"
                ]
            }],
            labels: [
                'January',
                'Feburary',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
        };
        this.setState({Avitech})
    }
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
                    <div class="col s9 offset-s2 ">
                        <div class="container" style={{'margin-top':'2%', width: '85%'}}>
                            <p className='center'>DATA REPRESENTATION FOR ALL ENGINEERS IN <b>AVITECH</b></p>
                            <Bar data={this.state.Avitech} />  
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default SBU;