import React, { Component } from 'react';
import './section.css'

class Section3 extends Component {
  render() {
    return (
      <div className="Section3">
        <div classNameName="wrapper1">
            <div id="sec" className="text-center landing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h2 className="core1" style={{textAlign: 'center'}}>Use Case</h2>
                            <br />
                        </div>
                    </div>
                  </div>
              </div>
              <div className="cardwrap">
                <div className="row">
          				<div className="col-md-3">
          					<div className="card card-profile card-plain">
          						<div className="card-block">
                        <h4 className="card-title" style={{fontSize: '20px', fontWeight: '400', fontFamily: 'Raleway'}}>Network Admin Apps</h4>
                        <div className="icon">
                          <h6 className="card-category" style={{color: 'rgb(255, 255, 255)'}}><i className="nc-icon nc-simple-add"></i> Create administrative applications for network load balancing, changing network topology and IOT device management.</h6>
                        </div>
          						</div>
          					</div>
          				</div>
                <div className="row">
                  <div className="col-md-3">
                  <div className="card card-profile card-plain">
                    <div className="card-block">
                      <h4 className="card-title" style={{fontSize: '20px', fontWeight: '400', fontFamily: 'Raleway'}}>Virtualized Blockchain</h4>
                      <div className="icon">
                        <h6 className="card-category" style={{color: 'rgb(255, 255, 255)'}}><i className="nc-icon nc-simple-add"></i> Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                  <div className="card card-profile card-plain">
                    <div className="card-block">
                      <h4 className="card-title" style={{fontSize: '20px', fontWeight: '400', fontFamily: 'Raleway'}}>Security Apps</h4>
                      <div className="icon">
                        <h6 className="card-category" style={{color: 'rgb(255, 255, 255)'}}><i className="nc-icon nc-simple-add"></i> Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="bottom-card">
            <div className="cardwrap">
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-block">
                      <h4 className="card-title" style={{fontSize: '20px', fontWeight: '400', fontFamily: 'Raleway', textAlign: "center"}}>Token to Blockchain Migration</h4>
                      <div className="icon">
                        <h6 className="card-category" style={{color: 'rgb(255, 255, 255)'}}><i className="nc-icon nc-simple-add"></i> Migrate token projects (i.e. ERC20) to their own chain where the tokens now provide utility by powering the blockchain</h6>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="row">
                <div className="col-md-4">
                <div className="card card-profile card-plain">
                  <div className="card-block">
                    <h4 className="card-title" style={{fontSize: '20px', fontWeight: '400', fontFamily: 'Raleway', textAlign: "center"}}>Dynamic Networks</h4>
                    <div className="icon">
                      <h6 className="card-category" style={{color: 'rgb(255, 255, 255)'}}><i className="nc-icon nc-simple-add"></i> Rapidly deploy dynamic networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.</h6>
                    </div>
                  </div>
                </div>
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
