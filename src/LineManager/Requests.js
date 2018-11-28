import React, {Component} from 'react';
import Navbar from './Nav';
import SideNav from './SideNav';
import axios from 'axios';
import './CSS/Requests.css';

class Requests extends Component{
    state={
        data: null,
        answer: null,
        Engineers: [],
        totalNumber: 0,
        frontend: 0,
        hni: 0,
        backend : 0,
        support: 0,
        devops: 0,
        qa: 0,
        avitech: 0,
        edutech : 0,
        powertech: 0,
        gsv: 0,
        gardendata: 0,
        vigipay: 0,
        finatech: 0,
        cooporate: 0

    }
    
    componentDidMount(){
        this.fetchRequests();
        this.getFrontData();
        this.getHniData();
        this.getBackend();
        this.getDevops();
        this.getQA();
        this.getSupport();
        this.getData();
        this.getFinatech();
    }

    getFrontData(){
        axios.get('http://localhost:3000/frontend/1').then(res=>{
            this.setState({frontend : res.data.number})
        }).catch(err=>console.log(err));
    }

    getHniData(){
        axios.get('http://localhost:3000/hni/1').then(res=>{
            this.setState({hni : res.data.number})
        }).catch(err=>console.log(err));
    }

    getBackend(){
        axios.get('http://localhost:3000/backend/1').then(res=>{
            this.setState({backend : res.data.number})
        }).catch(err=>console.log(err));
    }

    getQA(){
        axios.get('http://localhost:3000/qa/1').then(res=>{
            this.setState({qa : res.data.number})
        }).catch(err=>console.log(err));
    }

    getDevops=()=>{
        axios.get('http://localhost:3000/devops/1').then(res=>{
            this.setState({devops : res.data.number})
        }).catch(err=>console.log(err));
    }

    getSupport(){
        axios.get('http://localhost:3000/support/1').then(res=>{
            this.setState({support : res.data.number})
        }).catch(err=>console.log(err));
    }

    getData=()=>{
        axios.get('http://localhost:3000/engineers/1').then(res=>{
            this.setState({totalNumber : res.data})
        }).catch(err=>console.log(err));
    }

    getAvitech=()=>{
        axios.get('http://localhost:3000/avitech/1').then(res=>{
            this.setState({avitech : res.data.number})
        }).catch(err=>console.log(err));
    }

    getFinatech=()=>{
        axios.get('http://localhost:3000/finatech/1').then(res=>{
            this.setState({finatech : res.data.number})
        }).catch(err=>console.log(err));
    }

    showRequests=()=>{
        let answer
        if(this.state.data !== null){
            let d = this.state.data;
            answer = d.map((x)=>{
                let color;
                if(x[5]==='Approved'){
                    color = '#51B74B';
                }else if(x[5]==='Disapproved'){
                    color = 'red';
                }else{
                    color = 'black';
                }
                return(
                    <div class="card z-depth-3" style={{marginLeft: '10%'}}>
                        <div class="card-content black-text" >
                            <b><p>{x[0]}</p></b>
                            <p>Leave Type: <b>{x[1]}</b></p>
                            <p>Reason: {x[2]}</p>
                            <p>Start Date : {x[3]}</p>
                            <p>End Date : {x[4]}</p>
                            <p style={{color: color}}>Status : {x[5]}</p>
                        </div>
                        {(x[5]==='pending') ? 
                        <div class="card-action" >
                            <a class='' onClick={(e)=>this.approveHandler(e, x[6])} href style={{color: "green"}}>APPROVE</a>
                            <a onClick={(e)=>this.disapproveHandler(e, x[6])} href style={{color: "red"}}>DISAPPROVE</a>
                        </div> : null
                        }
                    </div>
                )
            })
            this.setState({answer}) 
        }else{
            answer = 
            <div>
                <br/>
                <div class="card-content black-text" style={{textAlign: 'center'}}>
                    <h6>NO REQUESTS</h6>
                </div>
                <br/>
            </div>
            this.setState({answer}) 
        }
    }

    fetchRequests = () =>{
        let data = [];
        let mail = localStorage.getItem('email');
        
        axios.get('http://localhost:3000/requests').then(res=>{
            let response = res.data.reverse();
            if(response.length !== 0){
                for(let x of response){
                    if(x.lineManagerMail === mail){
                        let details = [x.name, x.leaveName, x.reason, x.startDate, x.endDate, x.status, x.id];
                        data.push(details);
                        this.setState({data})
                    }
                }
            }
            this.showRequests();
        }).catch(err=>alert(err))
    }

    approveHandler(e, ident){
        let data = {"status" : "Approved"}
        axios.patch('http://localhost:3000/requests/'+ident, data).then((res)=>{
            let x = res.data;
            if(x.staffType === 'Engineer'){
                let number = this.state.totalNumber + 1;
                axios.patch('http://localhost:3000/engineers', number).then(res=>alert(res.data)).catch(err=>console.log(err));
                
                if(x.competency === "UI/UX"){
                    let frontend = parseInt(this.state.frontend) + 1;
                    let data = {"number": frontend}
                    axios.patch('http://localhost:3000/frontend/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getFrontData();
                    }).catch(err=>console.log(err));
                }
                else if(x.competency === "HNI"){
                    let hni = parseInt(this.state.hni) + 1;
                    let data = {"number": hni}
                    axios.patch('http://localhost:3000/hni/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getHniData();
                    }
                    ).catch(err=>console.log(err));
                }
                else if(x.competency === "Backend/Fullstack"){
                    let backend = parseInt(this.state.backend) + 1;
                    let data = {"number": backend}
                    axios.patch('http://localhost:3000/backend/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getBackend();
                    }
                    ).catch(err=>console.log(err));
                }
                else if(x.competency === "IT Support"){
                    let support = parseInt(this.state.support) + 1;
                    let data = {"number": support}
                    axios.patch('http://localhost:3000/support/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getSupport();
                    }).catch(err=>console.log(err));
                }
                else if(x.competency === "DevOps"){
                    let devops = parseInt(this.state.devops) + 1;
                    let data = {"number": devops}
                    axios.patch('http://localhost:3000/devops/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getDevops();
                    }).catch(err=>console.log(err));
                }
                else if(x.competency === "QA"){
                    let qa = parseInt(this.state.qa) + 1;
                    let data = {"number": qa};
                    axios.patch('http://localhost:3000/qa/1', data).then(()=>{
                        this.fetchRequests();
                        this.showRequests();
                        this.getQA();
                    }).catch(err=>console.log(err));
                }
                else if(x.SBU === "AVITECH"){
                    let avitech = parseInt(this.state.avitech) + 1;
                    let data = {"number": avitech};
                    axios.patch('http://localhost:3000/avitech/1', data).then(()=>{
                        this.getQA();
                    }).catch(err=>console.log(err));
                } 
                else if(x.SBU === "FINATECH"){
                    let finatech = parseInt(this.state.finatech) + 1;
                    let data = {"number": finatech};
                    axios.patch('http://localhost:3000/finatech/1', data).then(()=>{
                        this.getFinatech();
                    }).catch(err=>console.log(err));
                }

            }
            
        }).catch(err=>alert(err))
    }

    disapproveHandler(e, ident){
        let data = {"status" : "Disapproved"}
        axios.patch('http://localhost:3000/requests/'+ident, data).then(()=>{
            this.fetchRequests();
            this.showRequests();
        }).catch(err=>alert(err))
    }

    render(){
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
                                <div  class="col s12"><h6><b>LEAVE REQUESTS</b></h6></div>
                                <div class="col s10">
                                    <br/>
                                    {this.state.answer}
                                </div>
                            </div>
                        </div>
                    </div> 
            </div>
            </div>
        )
    }
}

export default Requests;