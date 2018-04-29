import React, { Component } from 'react';
import '../../style.css';
import { FromattedMessage } from 'react-intl'

export class Navbar extends Component {
  render() {
    return (
      <nav className={(this.props.dark === true) ? `navbar navbar-toggleable-md navbar-default` : `navbar navbar-toggleable-md navbar-transparent navbar-absolute`}>
          <div className="container nav">
              <button className="navbar" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
                  <span className="navbar-toggler-bar"></span>
              </button>
              <a className="navbar-brand" href="/">
              <img className="logo" src="../img/logo.png"/>
              </a>
              <ul className="navbar-nav ml-auto">
                  <a href="#" className="btn btn-link btn-neutral">Whitepaper</a>
                  <a href="#" className="btn btn-link btn-neutral">Developers</a>
                  <a href="#" className="btn btn-link btn-neutral">Core Tech</a>
                  <a href="#" className="btn btn-link btn-neutral">Team</a>
              </ul>

          </div>
      </nav>
    );
  }
}

export default Navbar;
