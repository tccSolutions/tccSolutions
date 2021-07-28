import React from 'react';
import underline from '../../data/images/underline.png';


class Greeting extends React.Component{
    render(){
        return(
            <div className='d-flex  justify-content-center mt-5'>
                <div>
                <div className='dcs'>
                    <h1 style = {{marginBottom:'0'}}>Tim's Custom Computer Solutions</h1>                   
                    <img alt= 'underline' src={underline} style={{lineHeight:'0'}} />              
                </div>
                <div className='dcs_2'> 
                                    Thank you for visiting TCCS.tech. We offer a 
                                    variety of services ranging from pc repair to web development.
                                    Please use the <span className='link '> Contact Us</span> link if you would like a quote or have a 
                                    question.
                </div>
            </div>
            </div>

            
            
        );
    }
}

export default Greeting;