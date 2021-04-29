import React from 'react'

class Nav extends React.Component {    
    render() {
        const {onRouteChange} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <div className="container-fluid">
                    <p className="navbar-brand">TCCS.TECH</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link" onClick={() =>{onRouteChange("home")}}>Home</p>
                            </li>
                            <li className="nav-item" >                                
                                    <p className="nav-link" onClick={()=>onRouteChange("contactUs")}>Contact Us</p>                                                           
                            </li>
                            <li className="nav-item" >                                
                                    <p className="nav-link" onClick={()=>onRouteChange("review")}>Reviews</p>                                                           
                            </li>
                            
                        </ul>
        
                    </div>
                    </div>
            </nav>
        );
    }
}

export default Nav;