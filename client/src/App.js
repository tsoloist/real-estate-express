import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import HomeBuySell from './HomeBuySell/HomeBuySell';
import Investors from './Investors/Investors';
import About from './About/About';
import Login from './Login/Login';
import Register from './Register/Register';
import Layout from './Layout/Layout';
import Contact from './Contact/Contact';
import AddProperty from './Auth/Admin/AppProperty';
import ViewPropertiesList from './Auth/ViewProperties/ViewProperties';





class App extends Component {


  render() {
    return (
      <Layout>
        <Route exact path="/" component={Homepage} />
        <Route path="/investors" component={Investors} />
        <Route path="/homebuysell" component={HomeBuySell} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} /> 
        <Route path="/register" component={Register} /> 
        <Route path="/contact" component={Contact} />
        <Route path="/admin/addproperty" component={AddProperty} /> 
        <Route path="/viewpropertieslist" component={ViewPropertiesList} />
      </Layout>

    );
  }
}

export default App;
