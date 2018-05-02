import React, { Component } from 'react';
import './section.css'

class Section3 extends Component {
  render() {
    return (
      <div className="Section3">
        <div classNameName="wrapper1">
            <div className="text-center landing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="core1">Use Case</h2>
                            <br />
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="card-block">
                							<h4 class="card-title">Network Admin Apps</h4>
                							<h6 class="card-category">Create administrative applications for network load balancing, changing network topology and IOT device management.</h6>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}


export default Section3;
