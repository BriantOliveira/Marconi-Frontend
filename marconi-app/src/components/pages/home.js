import React, { Component } from 'react';
import '../../App.css'
import Header from '../header-component/header.js';
import Footer from '../footer-component/footer.js';
import Tech from '../Section/sec.js';
import {IntlProvider} from 'react-intl';


export class Home extends Component {
  render() {
    return (
      <IntlProvider locale="en">
      <div>
      <Header />
      <Tech />
      </div>
      </IntlProvider>
    );
  }
}

export default Home;
