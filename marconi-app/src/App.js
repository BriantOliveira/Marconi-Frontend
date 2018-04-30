import React, { Component } from 'react';
import './App.css';
import './style.css';
import {IntlProvider} from 'react-intl';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Router, Route, hashHistory } from 'react-router';
import messages from "./messages";

//Components
import Header from './components/header-component/header';
import Footer from './components/footer-component/footer';
import Home from './components/pages/home';
import Navbar from './components/navagation/Navbar'


class App extends Component {
  render() {
    const {location, lang} = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="App">
      <Route location={location} path="/" exact component={Home} />
      <Home />
      </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps)(App);
