import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting'

import GridMenu from './components/GridMenu/GridMenu';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import MyWork from './components/MyWork/MyWork';
import Nav from './components/Nav/Nav'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    });
  }

  render() {
    const { route } = this.state;


    return (
      <div className="App">
        <Background />     
         
        {route === "contactUs"
        ?<div>
            <Nav onRouteChange={this.onRouteChange} route={route}/>
            <ContactUs onRouteChange={this.onRouteChange} route={route} />          
          </div>
        
        :route === "work"
          ? <div>
            <Nav onRouteChange={this.onRouteChange} route={route}/>
            <MyWork onRouteChange={this.onRouteChange} route={route} />
            </div>
          : <div>
              <GridMenu onRouteChange={this.onRouteChange} />
              <Greeting/>
          </div>
        }
      </div>
    );
  }
}

export default App;
