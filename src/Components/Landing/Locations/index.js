import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'
import { Route } from 'react-router-dom'

class LocationsComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "Locations",

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

const Locations = connect(mapStateToProps, {
  actionDispachConnector
})(LocationsComponet)

export default Locations