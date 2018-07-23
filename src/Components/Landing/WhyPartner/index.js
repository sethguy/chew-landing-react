import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'
import { Route } from 'react-router-dom'

class WhyPartnerComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "WhyPartner",

    }

  }

  clicked = () => {

    this.setState({})

  }

  render() {
    return (
      <div className="slides scroll fast simplifiedMobile animated">
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <nav className="side medium stroke">
          <div className="navigation">
            <ul>
            </ul>
          </div>
        </nav>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <nav className="panel top forceMobileView fixed white">
          <div className="sections desktop">
            <div style={ { "minWidth": 200 } } className="left">
              <a href="index.html" title="WorkChew"><img height="50" src={ "/static/img/logo2.png" } /></a>
            </div>
            <div className="right">
              <ul className="menu uppercase crop">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="locations.html">Locations</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="whyPartner.html">Why Partner</a>
                </li>
                <li>
                  <a href="restaurantsignup.html">Restaurant Sign Up</a>
                </li>
                <button id="login">
                  SIGN-UP/LOG-IN
                </button>
              </ul>
            </div>
          </div>
          <div className="sections compact hidden">
            <div className="left">
              <a href="index.html" title="Brand Name"></a>
            </div>
            <div className="right">
              <span className="button actionButton sidebarTrigger" data-sidebar-id="1"><svg> </svg></span>
            </div>
          </div>
        </nav>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <nav className="sidebar deepPurple" data-sidebar-id="1">
          <div className="close">
            <svg>
            </svg>
          </div>
          <div className="content">
            <a className="logo" href="index.html" title="Brand Name">
              <svg height="50" width="120"> </svg>
            </a>
            <ul className="mainMenu uppercase">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="locations.html">Locations</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="membersignup.html">Member Sign Up</a>
              </li>
              <li>
                <a href="whyPartner.html">Why Partner</a>
              </li>
              <li>
                <a href="restaurantsignup.html">Restaurant Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <section className="slide fade-7 kenBurns" id="home">
          <div className="content">
            <div className="container">
              <div className="wrap">
                <div className="fix-10-12">
                  <h1 className="huge ae-1">Work. Eat. Connect.</h1>
                  <div className="ae-2">
                    <p className="hero">
                      WorkChew reimagines your favorite restaurants as coworking communities that cater to your changing needs. Choose the affordable benefits package that best suits
                      you. Then work, eat, drink, connect and relax at our network of host restaurants.
                    </p>
                  </div>
                  <div className="w-100 flex" id="options">
                    <div className="flex-1">
                      <a className="button white ae-5 fromCenter cropBottom uppercase stroke" href="about.html">Member</a>
                      <br />
                      <br />
                      <p className="hero" style={ { "fontSize": 24 } }>
                        Need a space and craving community?
                      </p>
                    </div>
                    <div className="flex-1">
                      <a className="button white ae-5 fromCenter cropBottom uppercase stroke" href="whyPartner.html">Restaurant</a>
                      <br />
                      <br />
                      <p className="hero" style={ { "fontSize": 24 } }>
                        Run a restaurant? Want to partner with us?
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="background" style={ { "backgroundImage": "url(\"/static/img/img-1.jpg\")" } }></div>
        </section>
        <nav className="panel bottom forceMobileView">
          <div className="sections desktop">
            <div className="left">
              <a href="index.html" title="Brand Name"></a>
            </div>
            <div className="center">
              <ul className="menu uppercase">
                <li>
                  Copyright © 2017 WorkChew. All Rights Reserved
                </li>
              </ul>
            </div>
            <div className="right"></div>
          </div>
          <div className="sections compact hidden">
            <div className="left">
              <a href="index.html"></a>
            </div>
            <div className="right"></div>
          </div>
        </nav>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <nav className="sidebar" data-sidebar-id="1">
          <div className="close">
            <svg>
            </svg>
          </div>
          <div className="content">
            <a className="logo" href="index.html" title="Brand Name">
              <svg height="50" width="120"> </svg>
            </a>
            <ul className="mainMenu uppercase">
              <li>
                <a href="membersignup.html" style={ { "color": "#EC692A" } }>SIGN-UP/LOG-IN</a>
              </li>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="locations.html">Locations</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="membersignup.html">Member Sign Up</a>
              </li>
              <li>
                <a href="whyPartner.html">Why Partner</a>
              </li>
              <li>
                <a href="restaurantsignup.html">Restaurant Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <div className="dropdown share bottom right" data-dropdown-id="1" data-pinterest-image="https://workchew.com/wp-content/uploads/2015/10/Presentation.jpg" data-text="Cool new coworking spaces"
          data-url="https://workchew.com">
          <div className="title">
            Share
          </div>
          <ul>
            <li className="facebook">
              <svg>
              </svg>
            </li>
            <li className="twitter">
              <svg>
              </svg>
            </li>
            <li className="googlePlus">
              <svg>
              </svg>
            </li>
            <li className="pinterest">
              <svg>
              </svg>
            </li>
            <li className="mail" data-body="Body" data-subject="Subject">
              share by email
            </li>
          </ul>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p>
        </p>
        <p></p>
        <p></p>
        <p></p>
        <div className="loadingIcon">
          <svg className="loading-icon" id="loading-circle" viewBox="0 0 18 18">
            <circle
                    className="circle"
                    cx="9"
                    cy="9"
                    fill="none"
                    opacity=".1"
                    r="8"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"></circle>
            <circle
                    className="dash"
                    cx="9"
                    cy="9"
                    fill="none"
                    r="8"
                    strokeDasharray="1,100"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"></circle>
          </svg>
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const WhyPartner = connect(mapStateToProps, {
  actionDispachConnector
})(WhyPartnerComponet)

export default WhyPartner