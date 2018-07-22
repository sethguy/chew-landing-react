import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux'

import { actionDispachConnector } from '../../actions'

import GoodBye from '../GoodBye/';
import Hello from '../Hello/';

import Home from '../Home/';


import { Route } from 'react-router-dom'


import './style.css';

class AppComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
       
      </div>
    );
  }
}

const mapAppStateToProps = (state, ownProps) => ({
  user: state.user
})

const App = connect(mapAppStateToProps, {
  actionDispachConnector
})(AppComponent)

export default App