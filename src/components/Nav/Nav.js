import React from 'react'


class Nav extends React.Component {    
    render() {
       
        return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Tccs.Tech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/work">Our Work</a>
                        <a className="nav-link" href="/contact">Contact Us</a>
                        <a className="nav-link" href="/reviews">Reviews</a>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;