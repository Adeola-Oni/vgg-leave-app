import React, {Component} from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import axios from 'axios';

class LMRecords extends Component{
    state={
        annual: 0,
        casual: 0,
        emergency: 0,
        maternity: 0,
        paternity: 0,
        sick: 0,
        study: 0,
        compassionate: 0,
        out: 0,
        year: null
    }

    componentDidMount(){
        let year = new Date().getFullYear();
        this.setState({year})
        this.getDetails();
    }

    getDetails(){
        let id = localStorage.getItem('userid')
        axios.get('http://localhost:3000/users/'+id+'/requests').then(res=>{
            let response = res.data;
            response.map((x)=>{
                if(x.status === 'Approved'){
                    switch(x.leaveName) {
                        case 'Annual Leave':
                            let annual;
                            return (annual = this.state.annual + 1,
                                    this.setState({annual : annual}))
                        case 'Casual Leave':
                            let casual;
                            return (casual = this.state.casual + 1,
                                this.setState({casual : casual}))
                        case 'Emergency Leave':
                            let emergency;
                            return (emergency = this.state.emergency + 1,
                                this.setState({emergency : emergency}))
                        case 'Maternity Leave':
                            let value;
                            return (value = this.state.maternity + 1,
                                    this.setState({maternity : value}))
                        case 'Paternity Leave':
                            let paternity;
                            return (paternity = this.state.paternity + 1,
                                this.setState({paternity : paternity}))
                        case 'Sick Leave':
                            let sick;
                            return (sick = this.state.sick + 1,
                                this.setState({sick : sick}))
                        case 'Study Leave':
                            let study;
                            return (study = this.state.study + 1,
                                this.setState({study : study}))
                        case 'Compassionate Leave':
                            let compassionate;
                            return (compassionate = this.state.compassionate + 1,
                                this.setState({compassionate : compassionate}))
                        case 'Out-Of-Office':
                            let out;
                            return (out = this.state.out + 1,
                                this.setState({out : out}))
                        default:
                            return null;
                      } 
                }
            })  
        }).catch(err=>console.log(err));
    }
    render(){
        
        return(
            <div>
                <div >
                    <SideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Nav />
                </div>
                
                <div class="row" style={{'margin-left': '10%'}}>
                    
                    <div class="col s9 offset-s2">
                    
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                            <br/>
                            <h6><b>LEAVE RECORD FOR {this.state.year}</b></h6>
                            <br/>

                            <table className='highlight centered'>
                                <thead>
                                    <tr>
                                        <th><b>LEAVE NAME</b></th>
                                        <th><b>NUMBER OF DAYS TAKEN</b></th>
                                        <th><b>NUMBER OF DAYS REMAINING</b></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    
                                    <tr>
                                        <td>Annual Leave</td>
                                        <td>{this.state.annual}</td>
                                        <td>{15 - this.state.annual}</td>
                                    </tr>
                                    <tr>
                                        <td>Casual Leave</td>
                                        <td>{this.state.casual}</td>
                                        <td>{15 - this.state.casual}</td>
                                    </tr>
                                    <tr>
                                        <td>Compassionate Leave</td>
                                        <td>{this.state.compassionate}</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Emergency Leave</td>
                                        <td>{this.state.emergency}</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Maternity Leave</td>
                                        <td>{this.state.maternity}</td>
                                        <td>{30 - this.state.maternity}</td>
                                    </tr>
                                    <tr>
                                        <td>Out-Of-Office</td>
                                        <td>{this.state.out}</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Paternity Leave</td>
                                        <td>{this.state.paternity}</td>
                                        <td>{5 - this.state.paternity}</td>
                                    </tr>
                                    <tr>
                                        <td>Sick Leave</td>
                                        <td>{this.state.sick}</td>
                                        <td>---</td>
                                    </tr>
                                    <tr>
                                        <td>Study Leave</td>
                                        <td>{this.state.study}</td>
                                        <td>---</td>
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

export default LMRecords;