import React, { Component } from 'react'
import Navbar from '../navagation/Navbar'
import { FormattedMessage } from 'react-intl'

export class Header extends Component {
  render() {
    return (
      <div id="section" className="header-1">
      <Navbar />
        <div className="section text-center landing-section">
          <div className="content-center">
            <div className="container">
              <div className="row">
              <img className="img-1" src="/img/computer.png" />
                <div className="col-md-6 offset-md-3 text-center">
                  <h1 className="title">Programmable Etherner</h1>
                  <br></br>
                  <h5 className="description"><span><FormattedMessage id="h5.span" defaultMessage="A new blockchain protocol for jump starting secure networks using programmable packets" /></span></h5>
                  <br/>
                </div>

                <div className="col-lg-10 offset-md-1">
                <h2 className="lp-element lp-pom-text nlh">Get early access to the SDK</h2>
                  <a className="btn btn-magnify btn-lg btn-round btn-danger"  role="button"><img className="gitlogo" src="./img/git.svg"/> Request Git Access</a>
                  <a className="btn btn-magnify btn-lg btn-round btn-danger"  role="button">View Sample Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
