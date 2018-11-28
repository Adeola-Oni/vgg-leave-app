import React, {Component} from 'react';
import Nav from './Nav';
import SideNav from './SideNav';
import axios from 'axios';

class Status extends Component{
    state={
        startDate: null,
        endDate: null,
        leaveName : null,
        reason : null,
        approved: false,
        status: null,
        content:[],
    }
    componentDidMount(){
        this.formHandler();
        this.statusHandler();
    }

    formHandler(){
        let all =[];
        let userid = localStorage.getItem('userid');
        let name = localStorage.getItem('name');
        axios.get('http://localhost:3000/requests').then( res=>{
            let response = res.data.reverse();
            for(let x of response){
                if(x.name === name){
                    all.push(x);
                    console.log(all);
                     this.setState({content : all})
                }
                    }
                }
        ).catch(err=>alert("form Han"));
    }

    statusHandler = ()=> {
        let userid = localStorage.getItem('userid');
        let app = this.state.app
        axios.get('http://localhost:3000/approved/'+userid).then(res=>{
            this.setState({approved: !app});
        }).catch(err=>err);   
    }

    cancelRequest(e, id){
        axios.delete('http://localhost:3000/requests/'+id).then((res)=>{
            this.setState({startDate : null, 
                endDate : null,
                leaveName : null,
                reason : null,
                status : null
            })
            this.formHandler();
        }).catch(err=>alert('this'))
    }

    getContentsHandler=()=>{
        
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
                <div class="row">
                <div class="col s9 offset-s2">
                <div class="container" style={{'margin-top':'2%', width: '90%'}}>
                    <br />
                    <div class='row'  style={{'margin-left': '10%'}}>
                        <div  class="col s12"><p><b>LEAVE STATUS</b></p></div>
                            <div class="col s10" style={{paddingLeft: '5%', paddingRight: '3%'}}>

                            {this.state.content.map((x, i) => {
                                let lineManagerName = localStorage.getItem('lineManagerName');
                                let color;
                                if(x.status==='Approved'){
                                    color = '#51B74B';
                                }else if(x.status==='Disapproved'){
                                    color = 'red';
                                }else{
                                    color = 'black';
                                }

                                return(
                                    <div class="card z-depth-3" key={i}>
                                         <div class="card-content black-text">
                                             <h6>REQUEST TO {lineManagerName}</h6>
                                             <p><b>Leave Type:  </b> {x.leaveName}</p>
                                             <p><b>Reason:  </b> {x.reason}</p>
                                             <p><b>Start Date:  </b> {x.startDate}</p>
                                             <p><b>End Date:  </b> {x.endDate}</p>
                                             <p style={{color}}><b>Status: </b> {x.status}</p>
                                         </div>
                                         {x.status !== 'pending'? null:
                                            <div class="card-action red-text" >
                                                <a style={{color: 'red'}} href onClick={(e)=>this.cancelRequest(e,x.id)}>
                                                Cancel-Request<i class="material-icons left" 
                                                onClick={(e)=>this.cancelRequest(e,x.id)}>cancel</i></a>
                                            </div>
                                        } 
                                     </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                </div> 
            </div>
            </div>
        )
    }
}

export default Status;