import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'

class TopBarComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "TopBar",

    }

  }

  clicked = () => {

    this.setState({})

  }

  render() {
    return (

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
      );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const TopBar = connect(mapStateToProps, {
  actionDispachConnector
})(TopBarComponet)

export default TopBar