import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {    
    render() {
        const {onRouteChange} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <div className="container-fluid">
                <Link className = "navbar-brand" to="/">TCCS.TECH</Link>                   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item">
                            <Link className = "nav-link" to="/"> Home</Link> 
                            </li>
                            <li>
                            <Link className = "nav-link" to="/work"> Our Work</Link> 
                            </li>
                            <li className="nav-item" >                                
                                   <Link className = "nav-link" to="/contact"> Contact Us</Link>                                                          
                            </li>                           
                        </ul>        
                    </div>
                    </div>
            </nav>
        );
    }
}

export default Nav;