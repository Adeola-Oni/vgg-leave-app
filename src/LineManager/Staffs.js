import React, {Component} from 'react';
import Navbar from './Nav';
import SideNav from './SideNav';
import axios from 'axios';
import './CSS/Requests.css';
import Modal from 'react-responsive-modal';

class Staffs extends Component{
    state={
        data : null,
        annual: 0,
        casual: 0,
        emergency: 0,
        maternity: 0,
        paternity: 0,
        sick: 0,
        study: 0,
        compassionate: 0,
        out: 0,
        open: false,
    }

    componentDidMount(){
        let email = localStorage.getItem('email');
        let data = [];
        axios.get('http://localhost:3000/staffs').then(res=>{
            let response = res.data;
            for(let x of response){
                if(x.managerMail === email){
                    let details = [x.name, x.SBU, x.competency, x.email]
                    data.push(details);
                    this.setState({data})
                }
            }
        }).catch(err=>alert(err))
    }

    onOpenModal=() => {
        this.setState({open: true})
    }

    onCloseModal = () => {
        this.setState({
            open: false
         });
    };
    render(){
        let d = this.state.data;

        let staffs;
        let {open}= this.state;
        if(d !== null){
            staffs = d.map((x)=>{
                return(
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <a class="btn-floating waves-effect btn-small waves-light red">
                                        <i class="material-icons">add</i>
                                    </a>
                                </div>
                            </td>
                            <td>{x[0]}</td>
                            <td>{x[1]}</td>
                            <td>{x[2]}</td>
                            <td><a href='!#'>{x[3]}</a></td>
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

                                        {/* {staffRequest.map(x=>{
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
                                        })} */}
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                )
            })
        }
        
        return(
            <div>
                <div style={{position: 'static', zIndex: '-1'}}>
                <SideNav />
                </div>

                <div style={{position: 'relative'}}>
                    <Navbar />
                </div>
                
                <div class="row">
                    <div class="col s9 offset-s2">
                        <div class="container" style={{'margin-top':'2%', width: '90%'}}>
                            <br />
                            <div class='row'  style={{'margin-left': '10%'}}>
                                <div  class="col s12"><h5><b>STAFFS</b></h5></div>
                                <div class="col s12">
                                <p>N.B: YOU ARE THE LINE MANAGER FOR THE FOLLOWING PEOPLE</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th><b>NAME</b></th>
                                            <th><b>SBU</b></th>
                                            <th><b>COMPETENCY</b></th>
                                            <th><b>VGG MAIL</b></th>
                                        </tr>
                                    </thead>
                                        {staffs}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
            </div>
        )
    }
}

export default Staffs;