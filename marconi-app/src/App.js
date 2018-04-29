import React, { Component } from 'react';
import './App.css';
import './style.css';

//Components
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';
import Home from './components/pages/home';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <Home />

      <Footer/>

      </div>
    );
  }
}

export default App;
