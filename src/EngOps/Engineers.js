import React, {Component} from 'react';
import Navbar from '../Staff/Navbar';
import AdminSideNav from './AdminSideNav';
import './Engineers.css';
import axios from 'axios';
import Modal from 'react-responsive-modal';


class Engineers extends Component{
    state={
        staffs: [],
        open: false,
        staffRequest: [],
        annual: 0,
        casual: 0,
        emergency: 0,
        maternity: 0,
        paternity: 0,
        sick: 0,
        study: 0,
        compassionate: 0,
        out: 0,
        name: "",
        SBU: "",
        competency: "",
        lineManagerName: "",
        email: ""
    }
    componentDidMount(){
        axios.get('http://localhost:3000/staffs').then(res=>{
            let response = res.data;
            this.setState({staffs : response});
        }).catch(err=>console.log(err))
    }

    onOpenModal=(e) => {
        let id = e.target.value
        axios.get('http://localhost:3000/users/'+id+'/requests').then(res=>{
            let response = res.data;
            this.getDetails(id);
            let staffRequest = res.data;
            this.setState({})
            this.setState({staffRequest})
            axios.get('http://localhost:3000/staffs/'+id).then(res=>{
                let response = res.data;
                this.setState({name: response.name,
                    SBU: response.SBU,
                    competency: response.competency,
                    lineManagerName: response.lineManagerName,
                    email: response.email,
                    open: true
                });
            })
        }).catch(err=>console.log(err));
        
    };
    
    onCloseModal = () => {
        this.setState({ staffRequest: [],
            open: false,
            annual: 0,
            casual: 0,
            emergency: 0,
            maternity: 0,
            paternity: 0,
            sick: 0,
            study: 0,
            compassionate: 0,
            out: 0
         });
    };

    getDetails(id){
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
        let {staffs, open, staffRequest}= this.state;
        let staff;

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
                        <br/>
                        <div class="input-field col s4 offset-s8">
                            <i class="material-icons prefix" style={{color: '#51B74B'}}>search</i>
                            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                            <label for="icon_prefix2">Search</label>
                        </div>
                        
                        <div class="container" style={{'margin-top':'1%', width: '100%'}}>
                            <table class='responsive-table centered '>
                                <thead>
                                    <tr>
                                        <th>ADD</th>
                                        <th>NAME</th>
                                        <th>SBU</th>
                                        <th>COMPETENCY</th>
                                        <th>LINE MANAGER</th>
                                        <th>MAIL</th>
                                        <th>LEAVE DETAILS </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {staffs.map((x)=>{
                                        if(x.email !== "admin@venturegardengroup.com" ){
                                            return(
                                                <tr>
                                                    <td>
                                                        <div>
                                                            <a class="btn-floating waves-effect btn-small waves-light red">
                                                                <i class="material-icons">add</i>
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>{x.name}</td>
                                                    <td>{x.SBU}</td>
                                                    <td>{x.competency}</td>
                                                    <td>{x.lineManagerName}</td>
                                                    <td style={{color: 'blue'}}>{x.email}</td>
                                                    <td>
                                                        <div>
                                                            <button class='btn button buttons' value= {x.id} onClick={(e)=>this.onOpenModal(e)}>Details</button>
                                                            <Modal open={open} onClose={this.onCloseModal} >
                                                                <p>NAME: {this.state.name}</p>
                                                                <p>SBU: {this.state.SBU}</p>
                                                                <p>COMPETENCY: {this.state.competency}</p>
                                                                <p>LINE MANAGER: {this.state.lineManagerName}</p>
                                                                <p style={{color: 'blue'}}>EMAIL: {this.state.email}</p>

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

                                                                {staffRequest.map(x=>{
                                                                    return(
                                                                        <div>
                                                                            <br/>
                                                                            <p>Leave name: {x.leaveName}</p>
                                                                            <p>Start date: {x.startDate}</p>
                                                                            <p>End date: {x.endDate}</p>
                                                                            <p>Reason: {x.reason}</p>
                                                                            <p>Status: {x.status}</p><br/><hr/>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </Modal>
                                                        </div>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        }  
                                        })}
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