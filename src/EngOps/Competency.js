import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav'
import {Doughnut} from 'react-chartjs-2';
import './CSS/Competency.css';
import axios from 'axios';

class Competency extends Component{
    state={
        data: {},
        year: '',
        frontend : null,
        backend: null,
        hni : null,
        support: null,
        devops: null,
        qa: null
    }

    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({year})
        axios.get('http://localhost:3000/frontend/1').then(res=>{
            let frontend = res.data.number;
            this.setState({frontend})
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/hni/1').then(res=>{
            let hni = res.data.number;
            this.setState({hni})
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/support/1').then(res=>{
            let support = res.data.number;
            this.setState({support})
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/backend/1').then(res=>{
            let backend = res.data.number;
            this.setState({backend})
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/devops/1').then(res=>{
            let devops = res.data.number;
            this.setState({devops})
        }).catch(err=>console.log(err))

        axios.get('http://localhost:3000/qa/1').then(res=>{
            let qa = res.data.number;
            this.setState({qa})
        }).catch(err=>console.log(err))
    }
    render(){
        let{ frontend,backend,hni,support,devops,qa} = this.state;
        const data = {
            datasets: [{
                data: [hni, frontend, devops,backend, 
                    qa,support],
                backgroundColor: [
                    "blue",
                    "green",
                    "aqua",
                    "gray",
                    "red",
                    "gold"
                ]
            }],
            labels: [
                'HNI',
                'UI/UX',
                'DevOps',
                'Full-Stack/Backend',
                'QA',
                'IT Support'
            ],
        };
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                    <AdminSideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row" style={{'margin-left': '10%'}}>
                    
                    <div className="col s9 offset-s2">
                        {/* <h4 style={{textAlign :'left', paddingLeft: '5%'}}>ALL COMPETENY CENTERS</h4><br/> */}
                        <div  class="col s12"><p><b>ALL COMPETENCY CENTERS</b></p></div>
                        
                        <div className='container table '>
                            <table className='centered striped'>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th><b>UI/UX</b></th>
                                        <th><b>BACKEND</b></th>
                                        <th><b>DEVOPS</b></th>
                                        <th><b>HNI</b></th>
                                        <th><b>IT SUPPORT</b></th>
                                        <th><b>QA</b></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><b><p>TOTAL NUMBER OF DAYS</p></b></td>
                                        <td>{frontend}</td>
                                        <td>{backend}</td>
                                        <td>{hni}</td>
                                        <td>{support}</td>
                                        <td>{devops}</td>
                                        <td>{qa}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                        
                        <div class="container" style={{width: '85%'}}>
                            <Doughnut data={data} />
                        </div>
                        <br/>
                        <p className='center'>DATA REPRESENTATION FOR ENGINEERING COMPETENCY CENTERS IN {this.state.year}</p>
                    </div>
                    
            </div>
        </div>
        )
    }
}

export default Competency;