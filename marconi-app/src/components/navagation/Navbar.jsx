import React, { Component } from 'react';
import '../../style.css';
import { FromattedMessage } from 'react-intl';
import { connect } from "react-redux";
import {setLocale} from "../../actions/locale"
import PropTypes from "prop-types";

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
              <ul className="navbar-nav ml-auto nav-item dropdown">
                  <a href="https://docsend.com/view/5zragmb" className="btn btn-link btn-neutral">Whitepaper</a>
                  <a href="#" className="btn btn-link btn-neutral">Developers</a>
                  <a href="#" className="btn btn-link btn-neutral">Core Tech</a>
                  <a href="https://www.marconi.org/team/" className="btn btn-link btn-neutral">Team</a>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      LANGUAGE
                    </a>
                  <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-header">Choose Language</div>
                      <a className="dropdown-item" role="button" onClick={() => this.props.setLocale("en")}><img className="usa-flag" src="./img/usa.ico" /> EN |</a>
                      <a className="dropdown-item" role="button" onClick={() => this.props.setLocale("zh")}><img className="china-flag" src="./img/china.png" />  ZH</a>
                  </div>

              </ul>

          </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps,{setLocale}, null, { pure: false})(Navbar);
