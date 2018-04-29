import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

      <nav id="navagation" class="navbar navbar-toggleable-md fixed-top bg-transparent navbar-transparent" >
          <div class="container nav">
              <button class="navbar" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-bar"></span>
                  <span class="navbar-toggler-bar"></span>
                  <span class="navbar-toggler-bar"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                  <a href="#" class="btn btn-link btn-neutral">Whitepaper</a>
                  <a href="#" class="btn btn-link btn-neutral">Developers</a>
                  <a href="#" class="btn btn-link btn-neutral">Core Tech</a>
                  <a href="#" class="btn btn-link btn-neutral">Team</a>
                  // <a href="/login" class="btn btn-link btn-neutral">Login</a>
              </ul>
          </div>
      </nav>

      </header>
    );
  }
}

export default Header;
