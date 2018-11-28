import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './CSS/errorPage.css'

class errorPage extends Component{
   
     
    goBack(){
        this.props.history.goBack();
    }
    
    render(){
        return(
            <div className='login-container'>
                <Particles params={{
            		particles: {
                        number: {
                            value: 80,
                            density: {
                              enable: true,
                              value_area: 500
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#86f080',
                            opacity: 0.4,
                            width: 1.3
                        },
                        move: {
                            enable: true,
                            speed: 15,
                            random: false,
                            straight: false,
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }
                        }
            	}}}style={{position: "absolute", "z-index": -1}}/>
                
                <div className="form" >
                    <h1 className='number'>4<span style={{color: "#51B74B"}}>O</span>4</h1>
                    <h4 className='page'>PAGE NOT FOUND</h4>
                    <button style={{position: "relative", "z-index": -1}} className="btn-large" onClick={()=>this.goBack()}>BACK</button>
                </div>
            </div>
        )
    }
}
export default errorPage;