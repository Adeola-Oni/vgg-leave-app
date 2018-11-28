import React, {Component} from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import axios from 'axios';
import Spinner from '../Staff/Spinner';

class DashboardLine extends Component{
    state={
        userid: null,
        checkedValue : null,
        reason :'',
        leaveName: '',
        checkboxes : {
            annual: false,
            casual: false,
            emergency: false,
            maternity: false,
            paternity: false,
            sick: false,
            study: false,
            compassionate: false,
            out : false,
        },
        // file: null,
        // fileName: null,
        startDate: null,
        endDate: null,
        submitButton : true,
        lineManagerMail : null,
        linemangerName : null,
        currentDate: null,
        maxDate: null
    }

    componentDidMount(){
        let userid =  localStorage.getItem('userid');
        let lineManagerMail = localStorage.getItem('lineManagerMail');
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let currentDate =  `${year}-${month}-${day}`;
        let maxDate = `${year}-12-31`;

        this.setState({
            userid,
            lineManagerMail,
            currentDate,
            maxDate
        })
    }

    annualLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {annual : checked} });
        this.setState({ leaveName : 'Annual Leave' });
    })

    casualLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {casual : checked} });
        this.setState({ leaveName : 'Casual Leave' });
    })

    emergencyLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {emergency : checked}})
        this.setState({ leaveName : 'Emergency Leave' });
    })

    maternityLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {maternity: checked}})
        this.setState({ leaveName : 'Maternity Leave' });
    })

    paternityLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {paternity: checked}});
        this.setState({ leaveName : 'Paternity Leave' });
    })

    sickLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {sick: checked}})
        this.setState({ leaveName : 'Sick Leave' });
    })

    studyLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {study: checked}})
        this.setState({ leaveName : 'Study Leave' });
    })

    compassionateLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {compassionate: checked}})
        this.setState({ leaveName : 'Compassionate Leave' });
    })
    
    outOfOffice=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {out: checked}})
        this.setState({ leaveName : 'Out-Of-Office' });
    })

    
    submitHandler=((e)=>{
        e.preventDefault();
        if(this.state.reason !== '' && (Object.values(this.state.checkboxes)[0] === true && 
            this.state.startDate !== null && this.state.endDate !== null)){
            this.setState({incompleteFields : false});
            if(this.state.leaveName === 'Out-Of-Office' || this.state.leaveName === 'Emergency Leave' 
                || this.state.leaveName === 'Sick Leave'){
                let data = {
                    userId: this.state.userid,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    status: 'Approved',
                    reason: this.state.reason,
                    leaveName : this.state.leaveName,
                    lineManagerMail : this.state.lineManagerMail,
                    lineMangerName: localStorage.getItem('lineManagerName'),
                    SBU: localStorage.getItem('SBU'),
                    competency: localStorage.getItem('competency'),
                    name: localStorage.getItem('name'),
                    staffType: localStorage.getItem('staffType')
                }
                axios.post('http://localhost:3000/requests', data).then(
                res=>{
                    window.location.replace('http://'+window.location.host+"/lmstatus")
                }
                ).catch(err=>alert(err))
            }else{
                let data = {
                    userId: this.state.userid,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    status: 'pending',
                    reason: this.state.reason,
                    leaveName : this.state.leaveName,
                    lineManagerMail : this.state.lineManagerMail,
                    lineMangerName: localStorage.getItem('lineManagerName'),
                    SBU: localStorage.getItem('SBU'),
                    competency: localStorage.getItem('competency'),
                    name: localStorage.getItem('name'),
                    staffType: localStorage.getItem('staffType')
                }
                axios.post('http://localhost:3000/requests', data).then(
                res=>{
                    window.location.replace('http://'+window.location.host+"/lmstatus")
                }
            ).catch(err=>alert(err))
            }
            
            
        }else{
            this.setState({incompleteFields : true})
        }
    })


    reasonsHandler=((e)=>{
        let reason = e.target.value;
        this.setState({reason})
    })

    startDateHandler=((e)=>{
        let startDate = e.target.value;
        this.setState({startDate});
    })

    endDateHandler=((e)=>{
        let endDate = e.target.value;
        this.setState({endDate})
    })
    
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
                        <div class="container" style={{'margin-top':'1%', width: '95%'}}>
                            <br />
                            <form onSubmit={(e)=>this.submitHandler(e)} >
                                <div class='row'>
                                    <div  class="col s12"><p><b>REQUEST A LEAVE</b></p></div>
                                    <div class="col s4" >
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Annual Leave' checked={this.state.checkboxes.annual} onChange={(e)=>this.annualLeave(e)}/>
                                                <span>Annual</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Casual Leave' checked={this.state.checkboxes.casual} onChange={(e)=>this.casualLeave(e)}/>
                                                <span>Casual</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Emergency Leave' checked={this.state.checkboxes.emergency} onChange={(e)=>this.emergencyLeave(e)}/>
                                                <span>Emergency</span>
                                            </label>
                                        </p>
                                    </div>
                                    <div class="col s4">
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Maternity Leave' checked={this.state.checkboxes.maternity} onChange={(e)=>this.maternityLeave(e)}/>
                                                <span>Maternity</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Paternity Leave' checked={this.state.checkboxes.paternity} onChange={(e)=>this.paternityLeave(e)}/>
                                                <span>Paternity</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Sick Leave' checked={this.state.checkboxes.sick} onChange={(e)=>this.sickLeave(e)}/>
                                                <span>Sick</span>
                                            </label>
                                        </p>
                                    </div>
                                    <div class="col s4">
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Study Leave' checked={this.state.checkboxes.study} onChange={(e)=>this.studyLeave(e)}/>
                                                <span>Study</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='Compassionate Leave' checked={this.state.checkboxes.compassionate} onChange={(e)=>this.compassionateLeave(e)}/>
                                                <span>Compassionate</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input type="checkbox" id='OutOfOffice' checked={this.state.checkboxes.out} onChange={(e)=>this.outOfOffice(e)}/>
                                                <span>Out-Of-Office</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="input-field row">
                                    <i class="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" class="materialize-textarea" onChange={(e)=>this.reasonsHandler(e)}></textarea>
                                    <label for="icon_prefix2">Reason(s) for request <span style={{color :'red'}}>*</span></label>
                                </div>
                                <br />
                                <div>
                                    <div class='col s4'>START DATE <span style={{color :'red'}}>*</span>
                                        <input type="date" min={this.state.currentDate} max={this.state.maxDate}
                                        onChange={(e)=>this.startDateHandler(e)}/>
                                    </div>
                                    <div class='col s4'></div>
                                    <div class='col s4'>FINISH DATE <span style={{color :'red'}}>*</span>
                                        <input type="date" min={this.state.currentDate} onChange={(e)=>this.endDateHandler(e)} />
                                    </div>
                                </div>
                                <br />

                                {this.state.submitButton ? 
                                    <button class="btn waves-effect waves-light" type="submit"
                                    style={{'background-color': '#013042', padding: '5px'}}>Submit
                                        <i class="material-icons right">send</i>
                                    </button> : <div><Spinner/></div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardLine;