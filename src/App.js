import React from 'react';
import Background from './components/Background/Background';
import Greeting from './components/Greeting/Greeting';
import Nav from './components/Nav/Nav';
import ContactUs from './components/ContactUs/ContactUs';
import './App.css';
import MyWork from './components/MyWork/MyWork';
import Review from './components/Reviews/Review';
import { Homepage } from './pages/homepage/homepage.component';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import { OurWork } from './pages/our-work/our-work.component';



class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">        
        <Switch>
          <Route exact path='/' component ={Homepage}/> 
          <Route  path='/work' component={OurWork} />
          <Route  path='/contact' > <Nav/> <ContactUs/></Route>
          <Route  path='/reviews' > <Nav/> <Review/></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
