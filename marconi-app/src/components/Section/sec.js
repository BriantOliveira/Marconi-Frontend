import React, { Component } from 'react';
import './section.css'

class Tech extends Component {
  render() {
    return (
        <div classNameName="wrapper">
            <div className="text-center landing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="core1">Core Technology</h2>
                            <h5 className="s4">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</h5>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

        <div className="card card-plain card-blog">
          <div className="row">
            <div className="col-md-5">
              <div className="card-image">
                <img className="browser" src="./img/browser.png" />
              </div>
            </div>
            <div className="col-md-7">
              <div class="card-block">
                  <h3 className="card-title">
                    <a href="">Programmable Packets</a>
                  </h3>
                  <p>Smart contracts for network packets allow the creation</p>
                  <p> of packet level decentralized applications for improved </p>
                  <p>network security and operation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Tech;
