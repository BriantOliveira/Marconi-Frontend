import React, { Component } from 'react';
import '../../style.css';

class Header extends Component {
  render() {
    return (
      <header>

      <nav id="navagation" className="navbar navbar-toggleable-md fixed-top bg-danger navbar-transparent" >
          <div className="container nav">
              <button className="navbar" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
              <img src="../img/logo.png"/>
              </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <a href="#" className="btn btn-link btn-neutral">Whitepaper</a>
                  <a href="#" className="btn btn-link btn-neutral">Developers</a>
                  <a href="#" className="btn btn-link btn-neutral">Core Tech</a>
                  <a href="#" className="btn btn-link btn-neutral">Team</a>
              </ul>
              </div>
          </div>
      </nav>

      </header>
    );
  }
}

export default Header;
