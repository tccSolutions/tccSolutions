import React from 'react'
import PcRepair from './Pc Repair and Builds/PcRepair'
import Python from './PythonProjects/Python'
import WebProjects from './WebProjects/WebProjects';

class MyWork extends React.Component {
    render() {        
        return (
            <div className='work mt-5'>
                <PcRepair />
                <WebProjects onRouteChange ={this.props.onRouteChange}/>
                <Python />              
            </div>
        );
    }
}

export default MyWork;