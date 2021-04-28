import React from 'react';
import emailjs from 'emailjs-com';




class ContactUs extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                firstName: '',
                lastName: '',
                email:'',
                message:'',
                messageResponse:''
            }        
    }

    onFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});      
    }
    onLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onMessageChange = (event) => {
        this.setState({message: event.target.value});
    }

    onSubmitSend = () =>{

        const templateParams = {
            from_name: this.state.firstName +" "+ this.state.lastName,
            to_name: 'Dwight',
            message:this.state.message,
            email: this.state.email
        };
        const templateResponseParams = {           
            to_name: this.state.firstName,            
            email: this.state.email
        };
        if(this.state.email.length > 1){
            
            emailjs.send('contact_service','contact_form', templateParams, "user_RMkv4Xk720JMhtey0EJvM")
            .then(response => this.setState({messageResponse:'Message Sent. This window will close automatically.'}))
            .catch(err => console.log(err))
            
            emailjs.send('contact_service','template_6bd25fl', templateResponseParams, "user_RMkv4Xk720JMhtey0EJvM")
            .then(response => console.log(response))
            .catch(err => console.log(err)) 
            
            setTimeout(()=>{this.props.onRouteChange('home')}, 7000)
        } else{
            this.setState({messageResponse:'Please enter a valid email address'});
        }       
        
                  
    }


    render(){
        return(
            <div>
                 <div className="contact-form" >
                     <div>
                     <div className='mt-3' style={{height:'5em', width:'35em'}}>
                        <h1>Contact Us</h1> 
                    </div>
                        <div className=''style={{ display:'flex',justifyContent:'center',height:'2em', width:'35em', marginTop:'2em'}}>
                            <div className='mx-2 w-50'>
                                <input onChange={this.onFirstNameChange} type="text" className="form-control form-control-sm" placeholder="First Name" />
                            </div>
                            <div  className='mx-2 w-50'>
                                <input onChange={this.onLastNameChange} type="text" className="form-control form-control-sm" placeholder="Last Name" /> 
                            </div>                 
                        </div>
                        <div className='pt-3 mx-2' style={{marginTop:'1em', height:'5em', width:''}}>
                            <input onChange={this.onEmailChange} type="email" required className="form-control form-control-sm" placeholder="Email" />
                        </div>
                        <div className='mx-2' style={{marginTop:'1em', height:'11em'}}>
                            <textarea onChange={this.onMessageChange} className="form-control form-control-sm"  rows="8"></textarea>
                        </div>
                        <div className='d-inline-flex  w-100' style={{marginTop:'3em', height:'5em'}}>
                            <div className=' mx-2 w-50'>
                                <button type="reset" value='reset' className="btn btn-block border btn-dark" 
                                    onClick={()=>{
                                        this.props.onRouteChange('home')
                                        this.setState({messageResponse:''});
                                    }}
                                >Back</button>
                            </div>
                            <div  className='mx-2  w-50'>
                                <button onClick={()=>{
                                    this.onSubmitSend()                                    
                                    }} type="submit" value='send' className="btn btn-primary btn-block border">Submit</button>         
                            </div>                                       
                        </div>
                        <div>
                             <p>{this.state.messageResponse}</p>
                        </div>             
                    </div> 
                                               
                    </div>            
            </div>
        );
    }
}

export default ContactUs;