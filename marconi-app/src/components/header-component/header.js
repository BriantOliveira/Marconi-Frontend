import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

      <div className="logo">
      LOGO
      </div>

      <nav>
        <ul>
          <li>
            <a href='#'>Whitepaper</a>
          </li>
          <li>
            <a href='#'>Developers</a>
          </li>
          <li>
            <a href='#'>Core Tech</a>
          </li>
          <li>
            <a href='#'>Team</a>
          </li>
        </ul>
      </nav>

      </header>
    );
  }
}

export default Header;
