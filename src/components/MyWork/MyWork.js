import React from 'react'
import ac from '../../data/images/MDCS.jpg'

class MyWork extends React.Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='work'>
                <div className='fs-1 mt-5 fw-bold d-flex justify-content-center'>
                    PC Repair and Builds
                    </div>
                <div className='fs-1 mt-5 fw-bold justify-content-center'>
                    <h2>Python Projects</h2>
                    <div className='d-flex justify-content-center mt-5' >
                    <div className='w-50 d-flex justify-content-center'>
                        <div className='justify-content-center'>
                        <img src={ac} alt='' width='300px'/>
                        </div>
                        <div className='w-50 d-flex justify-content-center mt-5'>
                            <h4>This program was designed to help automate the paperwork involed in classifying animals. The user simply inputs the required and the program inserts
                            the information into the required fields.
                        </h4>
                        </div>
                        </div>
                       
                        
                    </div>
                    </div>
                <div className='fs-1 mt-5 fw-bold justify-content-center'>
                    <h2>Web Projects</h2>
                    <div className="d-flex justify-content-center">
                        <h4 className='w-75 mt-3'>
                            The team at TCCS.TECH has developed many different websites for a variety of different needs.
                            The website you are currently viewing was developed soley by the team TCCS.TECH. You can click the links below to visit them.
                            If you have any questions or request please use the
                            <span className='pointer' onClick={() => onRouteChange("contactUs")}><strong > Contact Us</strong></span> link.
                        </h4>
                    </div>
                    <div className='fs-4 d-flex justify-content-center'>
                        <ul className='list-unstyled'>
                            <li className='border mt-3'>
                                <div className='d-flex justify-content-center'>
                                    <a href='https://dmobley0608.github.io/familyhub'><p className='pointer' style={{color:"white"}}>www.hpHangout.com</p></a>
                                </div>
                                
                                <div className='d-flex justify-content-center mt-0'>
                                    <p className='w-75 row'>This is a site that was developed for a customer that wanted a
                                    fun family friendly place to leave messages without the hassle and drama of FACEBOOK.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='fs-1 mt-5 fw-bold'>
                    <h2>Games</h2>
                </div>
            </div>
        );
    }
}

export default MyWork;