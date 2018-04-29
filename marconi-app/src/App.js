import React, { Component } from 'react';
import './App.css';
import './style.css';
import { IntlProvider } from 'react-intl';

//Components
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';
import Home from './components/pages/home';
import Navbar from './components/navagation/Navbar'

import { Router, Route, hashHistory } from 'react-router';
import messages from "./messages";

class App extends Component {
  render() {
    const {lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="App">
      <Home />
      </div>
      </IntlProvider>
    );
  }
}



export default App;
