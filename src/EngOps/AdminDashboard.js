import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav';
import {Doughnut} from 'react-chartjs-2';
import './CSS/AdminDashboard.css';
import axios from 'axios'

class AdminDashboard extends Component{
    state={
        data: {},
        year: '',
        Engineers: [],
        avitech: 2,
        edutech : 0,
        powertech: 2,
        gsv: 0,
        gardendata: 0,
        vigipay: 10,
        finatech: 0,
        cooporate: 0,
        approved: []
    }

    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({year});

        axios.get('http://localhost:3000/requests').then(res=>{
            let response = res.data;
            this.checkSBU();
        }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/avitech/1').then(res=>{
        // let avitech = res.data.number;
        // this.setState({avitech})
        // }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/edutech/1').then(res=>{
        //     let edutech = res.data.number;
        //     this.setState({edutech})
        // }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/powertech/1').then(res=>{
        //     let powertech = res.data.number;
        //     this.setState({powertech})
        // }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/gsv/1').then(res=>{
        //     let gsv = res.data.number;
        //     this.setState({gsv})
        // }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/gardendata/1').then(res=>{
        //     let gardendata = res.data.number;
        //     this.setState({gardendata})
        // }).catch(err=>console.log(err))

        // axios.get('http://localhost:3000/vigipay/1').then(res=>{
        //     let vigipay = res.data.number;
        //     this.setState({vigipay})
        // }).catch(err=>console.log(err));

        // axios.get('http://localhost:3000/finatech/1').then(res=>{
        //     let finatech = res.data.number;
        //     this.setState({finatech})
        // }).catch(err=>console.log(err));

        // axios.get('http://localhost:3000/cooporate/1').then(res=>{
        //     let cooporate = res.data.number;
        //     this.setState({cooporate})
        // }).catch(err=>console.log(err));

        
    }

    checkSBU(){
        let approved = [];
        axios.get('http://localhost:3000/requests').then(res=>{
            let response = res.data;
            for(let x of response){
                if(x.status==='Approved'){
                    approved.push(x);
                    this.setState({approved})
                }
            }
            let app = this.state.approved;
            console.log(app);
        
        app.map((x)=>{
            if(x.SBU === 'AVITECH'){
                let avitech = this.state.avitech + 1
                this.setState({avitech})
            }else if(x.SBU === 'EDUTECH'){
                let edutech = this.state.edutech + 1
                this.setState({edutech});
            }else if(x.SBU === 'FINATECH'){
                let finatech = this.state.finatech + 1
                this.setState({finatech});
            }else if(x.SBU === 'POWERTECH'){
                let powertech = this.state.powertech + 1
                this.setState({powertech});
            }else if(x.SBU === 'VIGIPAY'){
                let vigipay = this.state.vigipay + 1
                this.setState({vigipay});
            }else if(x.SBU === 'GSV'){
                let gsv = this.state.gsv + 1
                this.setState({gsv});
            }else if(x.SBU === 'GARDENDATA'){
                let gardendata = this.state.gardendata + 1
                this.setState({gardendata});
            }else if(x.SBU === 'COOPORATE'){
                let cooporate = this.state.cooporate + 1
                this.setState({cooporate});
            }
        })
    }).catch(err=>console.log(err));
    }

    render(){
        let{ avitech,edutech,powertech,gsv,gardendata,vigipay, finatech,cooporate, approved} = this.state;

        const data = {
            datasets: [{
                data: [avitech,edutech,powertech,gsv,gardendata,vigipay, finatech,cooporate],
                backgroundColor: [
                    "red",
                    "yellow",
                    "blue",
                    "teal",
                    "pink",
                    "aquamarine",
                    "indigo",
                    "purple"
                ]
            }],
            labels: [
                'Avitech',
                'Edutech',
                'Powertech',
                'GSV',
                'Gardendata',
                'Vigipay',
                "Finatech",
                "Cooporate"
            ],
        };

        approved.map((x)=>{

        })
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
                        <div  class="col s12"><p><b>ALL SBUs</b></p></div>
                        <div class="container" style={{'margin-top':'2%', width: '85%'}}>
                            <Doughnut data={data} />
                            <p className='center'>DATA REPRESENTATION FOR ALL ENGINEERS IN {this.state.year}</p>
                        </div>
                    </div> 

                    <div class="col s9 offset-s2 ">
                        <table>
                            <thead>
                                <tr>
                                    <th>SBU</th>
                                    <th>Avitech</th>
                                    <th>Edutech</th>
                                    <th>Finatech</th>
                                    <th>GSV</th>
                                    <th>Gardendata</th>
                                    <th>Vigipay</th>
                                    <th>Cooporate</th>
                                    <th>Powertech</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Number Of Days</td>
                                    <td>{this.state.avitech}</td>
                                    <td>{this.state.edutech}</td>
                                    <td>{this.state.finatech}</td>
                                    <td>{this.state.gsv}</td>
                                    <td>{this.state.gardendata}</td>
                                    <td>{this.state.vigipay}</td>
                                    <td>{this.state.cooporate}</td>
                                    <td>{this.state.powertech}</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div> 
            </div>
        </div>
        )
    }
}

export default AdminDashboard;