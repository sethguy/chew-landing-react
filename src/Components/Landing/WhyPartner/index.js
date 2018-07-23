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
      <div>
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