import React, { Component } from 'react';
import '../../App.css'
import Header from '../header-component/header.js'
import Footer from '../footer-component/footer.js'


export class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      <Footer />
      </div>
    );
  }
}

export default Home;
