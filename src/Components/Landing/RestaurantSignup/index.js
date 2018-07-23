import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'

import { Route } from 'react-router-dom'

class RestaurantSignUpComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "RestaurantSignUp",

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

const RestaurantSignUp = connect(mapStateToProps, {
  actionDispachConnector
})(RestaurantSignUpComponet)

export default RestaurantSignUp