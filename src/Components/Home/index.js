import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../actions'

import { Route } from 'react-router-dom'

class HomeComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "Home",

    }

  }

  clicked = () => {

    this.setState({})

  }

  render() {
    return (
      <div>
        <h1 onClick={(event) => { this.clicked() }} >{this.state.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const Home = connect(mapStateToProps, {
  actionDispachConnector
})(HomeComponet)

export default Home