import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting';
import GridMenu from './components/GridMenu/GridMenu';
import Nav from './components/Nav/Nav';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import MyWork from './components/MyWork/MyWork';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";



class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App"> 
        <Nav/>              
        <Background/>
        <Switch>
          <Route exact path='/'> <Greeting/> </Route>
          <Route  path='/work' ><MyWork/></Route>
          <Route  path='/contact' ><ContactUs/></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
