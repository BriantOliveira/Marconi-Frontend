import React, { Component } from 'react';
import './App.css';
import './style.css';

//Components
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';
import Home from './components/pages/home';
import Navbar from './components/navagation/Navbar'

import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Home />
      </div>
    );
  }
}

export default App;
