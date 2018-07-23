import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'
import { Route } from 'react-router-dom'

class PricingComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "Pricing",

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

const Pricing = connect(mapStateToProps, {
  actionDispachConnector
})(PricingComponet)

export default Pricing