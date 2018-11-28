import React, { Component } from "react";
import './CSS/Policies.css'
import PoliciesNav from './Policies/Nav'

class Policies extends Component{
    goBack(){
        this.props.history.goBack();
    }
    render(){
        return(
            <div>
                <div>
                    <PoliciesNav />
                </div>
                <div class='row'>
                    <div class='col s11'>
                    </div>

                    <div class='col s1 fixed'>
                        <br/>
                        <button className="btn-medium" onClick={()=>this.goBack()}>BACK</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Policies;