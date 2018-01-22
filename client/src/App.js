import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav.js';
import HomeBuySell from './HomeBuySell/HomeBuySell';
import Investors from './Investors/Investors';
import About from './About/About';
import Login from './Login/Login';
import Footer from './Footer/Footer';




class App extends Component {


  render() {
    return (
      <div className="App">
      <div className="NavBg">
        <Nav />
      </div>
        <Route exact path="/" component={Homepage} />
        <Route path="/investors" component={Investors} />
        <Route path="/homebuysell" component={HomeBuySell} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} /> 
      </div>
    );
  }
}

export default App;
