import React from 'react'


class PcRepair extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center border-bottom border-secondary border-3'>
                <div>
                    <div className=''>
                        <h3 className="">Pc Repair and Builds</h3>
                    </div>
                    <div className=''>
                        <p className=''>Is your PC running slow, not starting, or do you want a new custom build? We can help with all of these needs.</p>
                    </div>
                    <div className=''>                                                
                        <h4 className=''>Our Services Include:</h4>
                        <div className='d-flex justify-content-center'>
                        <ul className='w-30 text-start'>
                            <li>PC Maintentance</li>
                            <li>Pc Restoration</li>
                            <li>File Recover</li>
                            <li>Hardware Replacement</li>
                            <li>Custom PC Builds</li>
                            <li>Gaming PC Builds</li>                            
                        </ul>
                    </div>
                    <div>
                        <h5>Our other services can be seen below.</h5>
                    </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default PcRepair;