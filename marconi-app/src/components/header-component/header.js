import React, { Component } from 'react'
import Navbar from '../navagation/Navbar'

export class Header extends Component {
  render() {
    return (
      <div id="home" className="header-1">
      <Navbar />
        <div className="section text-center landing-section">
          <div className="content-center">
            <div className="container">
              <div className="row">
              <img className="img-1" src="/img/computer.png" />
                <div className="col-md-6 offset-md-3 text-center">
                  <h1 className="title">Programmable Etherner</h1>
                  <br></br>
                  <h5 className="description"><span>A new blockchain protocol for jump starting secure networks using programmable packets</span></h5>
                  <br/>
                </div>
                <div className="col-lg-10 offset-md-1">
                  <a className="btn btn-magnify btn-lg btn-round btn-danger" href="#search" role="button"><i className="nc-icon nc-zoom-split"></i> Search Available Contractors</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
