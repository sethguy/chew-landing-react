import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../../actions'
import { Route } from 'react-router-dom'

class AboutComponet extends Component {
  constructor() {
    super();

    this.state = {
      title: "About",

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

const About = connect(mapStateToProps, {
  actionDispachConnector
})(AboutComponet)

export default About