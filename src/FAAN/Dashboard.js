import React, {Component} from 'react';
import Nav from '../FAAN/Nav';
import Side from '../FAAN/Side';
import {Line} from 'react-chartjs-2';
// import { Container } from 'mdbootstrap';
import './CSS/Dashboard.css';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#848484',
        borderColor: '#848484',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#848484',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#848484',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

class Page extends Component{
        
    render(){
    return(
        <div>
            <Nav/>
            <div class='row'>
                <div class='col s3'>
                    <Side />
                </div>

                <div class='col s9'>
                    <div className="dashboard">
                        <div class="card">
                            <div class='row name'>
                                <div class='col s8 '><h5 >Dashboard</h5></div>
                                <div class='col s4'></div>
                            </div>
                        </div>
                    </div><br />

                    <div class='row'>
                        <div className='graph'><Line data={data} /></div>
                        <div class='col s6'>
                            <h6>Top Locations</h6>
                            <ul class="collection list">
                                <li class="collection-item">Ibadan</li>
                                <li class="collection-item">Jos</li>
                                <li class="collection-item">Cal</li>
                                <li class="collection-item">Akure</li>
                                <li class="collection-item">Ilorin</li>
                            </ul>
                        </div>
                        <div class='col s6'>
                            <h6>Top Banks</h6>
                            <ul class="collection list">
                                <li class="collection-item">Skye</li>
                                <li class="collection-item">Fidelity</li>
                                <li class="collection-item">Access</li>
                                <li class="collection-item">FBN</li>
                                <li class="collection-item">UBA</li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>
            
        </div>
    )
}}
export default Page;