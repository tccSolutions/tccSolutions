import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting'

import GridMenu from './components/GridMenu/GridMenu';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import MyWork from './components/MyWork/MyWork';



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
        <GridMenu onRouteChange={this.onRouteChange} />
       
        {route === 'home'
        ? <Greeting />
         
        :route === "contactUs"
        ? <ContactUs onRouteChange={this.onRouteChange} route={route} />          
        
        :route === "work"
          ? <MyWork onRouteChange={this.onRouteChange} route={route} />
          : <div></div>
        }
      </div>
    );
  }
}

export default App;
