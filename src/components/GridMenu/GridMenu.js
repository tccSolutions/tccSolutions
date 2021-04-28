import React from 'react';   


class GridMenu extends React.Component{

 
    toggleView =(element) => {
        const elem = document.getElementById(element); 
        if(elem.style.display === ''){
            elem.style.display = "none";
        }else{
            elem.style.display = '';
        }      
              
    }
            
      
    addClass = (element, style)=>{
       document.getElementById(element)
       .classList.add(style);
        }

    removeClass = (element, style) =>{
        const elem = document.getElementById(element);    
        elem.classList.remove(style);
    }
       
    
    render(){
       const {onRouteChange} = this.props;
        return(
            <div className='grid-menu'>
                
                <div>
                    {/* Welcome Button */}
                    <div className='cell-container'>
                        <div id='welcome'  className='cell'>
                            <div id='welcome-front' className='inner-cell' onClick={()=>{
                                this.addClass('welcome', 'grow')
                                this.toggleView('welcome-front')
                                this.toggleView('welcome-back') 
                                }} >
                                <svg   width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                    <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                </svg>
                                <p >Welcome</p>
                            </div>  
                            <div id='welcome-back' className='back' style={{display:'none'}}>
                                <p >
                                    Thank you for visiting TCCS.tech. We offer a 
                                    variety of services ranging from pc repair to web development.
                                    Please use<span className='link '> Contact Us</span> link if you would like a quote or have a 
                                    question.
                                </p>
                                <div className='' >
                                <button type="button" className="btn btn-light btn-sm back"  onClick={()=>{
                                        this.removeClass('welcome','grow')
                                        this.toggleView('welcome-front')
                                        this.toggleView('welcome-back')}}
                                    >Back</button>        
                                </div>
                                                            
                            </div>                 
                        </div>
                    </div>   
                    {/* Our Work Button */}
                    <div className='cell-container'>
                        <div id='ourWork' className='cell'>
                            <div id='ourWork-front' className='inner-cell'  onClick={()=>{
                                this.addClass('ourWork', 'grow')
                                this.toggleView('ourWork-front')
                                this.toggleView('ourWork-back') 
                                }} >                            <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                            </svg>
                            <p >Our Work</p>
                            </div>
                            <div id='ourWork-back' className='back' style={{display:'none'}}>
                                <p >Under Construction</p>
                                <button type="button" name="" id="" className="btn btn-light btn-sm back" onClick={()=>{
                                        this.removeClass('ourWork','grow')
                                        this.toggleView('ourWork-front')
                                        this.toggleView('ourWork-back')}}>Back</button>
                            </div>
                            
                        </div>
                       
                    </div>                  
                    
                            
                </div>
                {/* Second Column */}
                <div>
                    {/* Contact Us Button */}
                    <div className='cell-container' >
                        <div id='contact' className='cell'>
                            <div id='contact-front' className='inner-cell' onClick={()=>{onRouteChange('contactUs') }}>
                                <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-chat-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                                <p>Contact Us</p>
                            </div>                    
                        </div>
                    </div>
                        
                    

                    {/* My Account Button */}
                    <div>
                        <div id='myAccount' className='cell'>
                            <div className='inner-cell'>
                            <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <p>My Account</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
               

            </div>
        
        );

    }
}

export default GridMenu;