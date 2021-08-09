import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting';
import Nav from './components/Nav/Nav';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import MyWork from './components/MyWork/MyWork';
import Review from './components/Reviews/Review';
import {GridMenu} from './components/GridMenu/GridMenu.component'

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
        <Switch>
          <Route exact path='/'> <Greeting/><GridMenu/> </Route>
          <Route  path='/work' > <Nav/> <MyWork/></Route>
          <Route  path='/contact' > <Nav/> <ContactUs/></Route>
          <Route  path='/reviews' > <Nav/> <Review/></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
