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
                            <h2 className="core">Core Technology</h2>
                            <h5 className="s4">The Marconi protocol is designed down to the ethernet level and powers a decentralized networking stack that provides privacy, security, net neutrality and upgradability</h5>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default Tech;
