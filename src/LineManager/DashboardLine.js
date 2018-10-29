import React, {Component} from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import axios from 'axios';

class DashboardLine extends Component{
    

    
    state={
        id: null,
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
        file: null,
        fileName: null
    }

    componentDidMount(){
        let id =  localStorage.getItem('id');
        this.setState({
            id
        })

    }

    annualLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {annual : checked} });
        this.setState({ leaveName : 'annual' });
    })

    casualLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {casual : checked} });
        this.setState({ leaveName : 'casual' });
    })

    emergencyLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {emergency : checked}})
        this.setState({ leaveName : 'emergency' });
    })

    maternityLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {maternity: checked}})
        this.setState({ leaveName : 'maternity' });
    })

    paternityLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {paternity: checked}});
        this.setState({ leaveName : 'paternity' });
    })

    sickLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {sick: checked}})
        this.setState({ leaveName : 'sick' });
    })

    studyLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {study: checked}})
        this.setState({ leaveName : 'study' });
    })

    compassionateLeave=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {compassionate: checked}})
        this.setState({ leaveName : 'compassionate' });
    })
    
    outOfOffice=((e)=>{
        let checked = e.target.checked;
        this.setState({ checkboxes : {out: checked}})
        this.setState({ leaveName : 'out' });
    })

    
    submitHandler=((e)=>{
        if(this.state.reason !== '' && (Object.values(this.state.checkboxes)[0] === true)){
            if(Object.keys(this.state.checkboxes)[0]=== 'sick' || Object.keys(this.state.checkboxes)[0]=== 'study'){
                if(this.state.file === null){
                    alert('please attach a file to the page for Sick/Study leave')
                }
                else{
                    let data = {
                        id: this.state.id,
                        file: this.state.fileName,
                        reason: this.state.reason,
                        leaveName : this.state.leaveName
                    }
                     axios.post('http://localhost:3000/requests', data).then(res=>console.log(res)).catch(err=>console.log(err));
                }
            }
        }else{
            alert('please fill all boxes')
            
        }
    })

    reasonsHandler=((e)=>{
        let reason = e.target.value;
        this.setState({reason})
    })

    fileHandler=((e)=>{
        let file = e.target.files[0];
        let name = e.target.files[0].name;
        if(file !== undefined){
            let type = file.type;
            if( type === 'application/pdf' || type === 'image/jpeg' ||  type === 'image/jpg' || 
            type=== "application/x-zip-compressed"){
                let res;
                if(file.size < 1000000){
                    let reader = new FileReader();
                    reader.onload= ((e)=>{
                        res = e.target.result;
                        this.setState({file : res});
                        this.setState({fileName: name});
                    })

                    reader.readAsDataURL(e.target.files[0])
                }
            }
        }
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
                    
                        <div class="container" style={{'margin-top':'2%', width: '95%'}}>
                                <br />
                                
                                <form action="#" >
                                    <div class='row'>
                                        <div  class="col s12"><p><b>REQUEST A LEAVE</b></p></div>
                                        <div class="col s4" >
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='annual' checked={this.state.checkboxes.annual} onChange={(e)=>this.annualLeave(e)}/>
                                                    <span>Annual</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='casual' checked={this.state.checkboxes.casual} onChange={(e)=>this.casualLeave(e)}/>
                                                    <span>Casual</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='emergency' checked={this.state.checkboxes.emergency} onChange={(e)=>this.emergencyLeave(e)}/>
                                                    <span>Emergency</span>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col s4">
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='maternity' checked={this.state.checkboxes.maternity} onChange={(e)=>this.maternityLeave(e)}/>
                                                    <span>Maternity</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='paternity' checked={this.state.checkboxes.paternity} onChange={(e)=>this.paternityLeave(e)}/>
                                                    <span>Paternity</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='sick' checked={this.state.checkboxes.sick} onChange={(e)=>this.sickLeave(e)}/>
                                                    <span>Sick</span>
                                                </label>
                                            </p>
                                        </div>
                                        <div class="col s4">
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='study' checked={this.state.checkboxes.study} onChange={(e)=>this.studyLeave(e)}/>
                                                    <span>Study</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='compassionate' checked={this.state.checkboxes.compassionate} onChange={(e)=>this.compassionateLeave(e)}/>
                                                    <span>Compassionate</span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <input type="checkbox" id='outOfOffice' checked={this.state.checkboxes.out} onChange={(e)=>this.outOfOffice(e)}/>
                                                    <span>Out-Of-Office</span>
                                                </label>
                                            </p>
                                        </div>
                                    </div>
                                </form>

                                <div >
                                    <div class="input-field "  >
                                        <i class="material-icons prefix">mode_edit</i>
                                        <textarea id="icon_prefix2" class="materialize-textarea" onChange={(e)=>this.reasonsHandler(e)}></textarea>
                                        <label for="icon_prefix2">Reason(s) for request <span style={{color :'red'}}>*</span></label>
                                    </div>
                                    <br />

                                    <form>
                                        <div class="file-field input-field">
                                            <p>Please attach recommended files (Sick/Study)</p>
                                            <i class="material-icons left"> 
                                            <input type="file" src onChange={(e)=>this.fileHandler(e)} multiple/>
                                            attachment</i>
                            
                                            <div class="file-path-wrapper">
                                                <input class="file-path validate" type="text" placeholder="Upload one or more files" />
                                            </div>
                                        </div>
                                    </form>
                                    <br />


                                    <button class="btn waves-effect waves-light" 
                                    onClick={(e)=>this.submitHandler(e)} type="submit" name="action" 
                                    style={{'background-color': '#013042', padding: '5px'}}>Submit
                                        <i class="material-icons right">send</i>
                                    </button>

                                </div>
                                </div>
                            </div>
                        </div>
            
            </div>
        )
    }
}

export default DashboardLine;