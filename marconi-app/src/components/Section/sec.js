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
            <div class="card card-plain card-blog">
              <div class="row">
                <div class="col-md-7">
                    <div class="card-block">
                      <h3 class="card-title">Ethernet-Level Encryption</h3>
                      <div className="quotes">
                        <p className="p1">Secure communication pipes established at Layer 2 of</p>
                        <p className="p1">the OSI model provide packet-level encryption and custom</p>
                        <p className="p1">packet routing and processing</p>
                      </div>
                   </div>
                </div>
                <div class="col-md-5">
                  <div class="card-image">
                    <img class="security" src="./img/lock.png" />
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
                  <h3 className="card-title">Programmable Packets</h3>
                  <div className="quotes">
                    <p className="p1">Smart contracts for network packets allow the creation</p>
                    <p className="p1"> of packet level decentralized applications for improved </p>
                    <p className="p1">network security and operation</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Tech;
