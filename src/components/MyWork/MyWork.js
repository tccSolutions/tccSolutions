import React from 'react'
import Python from '../PythonProjects/Python'

class MyWork extends React.Component {
    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='work'>
                <div className='fs-1 mt-5 fw-bold d-flex justify-content-center'>
                    PC Repair and Builds
                    </div>
                    <Python/>
               
                <div className='fs-1 mt-5 fw-bold justify-content-center'>
                    <h2>Web Projects</h2>
                    <div className="d-flex justify-content-center">
                        <h4 className='w-75 mt-3'>
                            The team at TCCS.TECH has developed many different websites for a variety of different needs.
                            The website you are currently viewing was developed by the team TCCS.TECH using REACT. You can click the links below to visit them.
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