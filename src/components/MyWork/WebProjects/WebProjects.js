import React from 'react'
import fhub from '../../../data/images/fhub.jpg'

class WebProjects extends React.Component{
    render(){
       const {onRouteChange} = this.props;
        return(
            <div className='d-flex justify-content-center border-bottom border-secondary border-3'>
                    
                <div className='fs-1 mt-5 fw-bold justify-content-center'>
                    <h2>Web Projects</h2>
                    <div className="d-flex justify-content-center">
                        <h5 className='w-75 mt-3'>
                            The team at TCCS.TECH has developed many different websites for a variety of different needs.
                            The website you are currently viewing was developed by the team TCCS.TECH using REACT. You can click the links below to visit them.
                            If you have any questions or request please use the
                            <span className='pointer' onClick={() => onRouteChange("contactUs")}><strong > Contact Us</strong></span> link.
                        </h5>
                    </div>
                    <div className='fs-4 d-flex justify-content-center'>
                        <ul className='list-unstyled'>
                            <li className='mt-3'>
                                <div className='d-flex justify-content-center'>
                                    <a href='https://dmobley0608.github.io/familyhub'><p className='pointer' style={{ color: "white" }}>www.hpHangout.com</p></a>
                                </div>
                                <div>
                                    <img src={fhub} alt='...' style={{width:'300px'}}/>
                                </div>

                                <div className='d-flex justify-content-center mt-0'>
                                    <h6 className='w-75 row'>This is a site that was developed for a customer that wanted a
                                    fun family friendly place to leave messages without the hassle and drama of FACEBOOK. 
                                    <br></br>
                                    <br></br>
                                    ****DISCLAIMER this site is linked to a git hub page. If you would like to utilize this site for your family or friends please use the contact link.*******</h6>                                                                        
                                </div>
                            
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebProjects;