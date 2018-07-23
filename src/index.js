import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux'

import { store } from './Store';

import App from './Components/App/';

import { HashRouter } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
import GoodBye from './Components/GoodBye/';
import Hello from './Components/Hello/';

import Home from './Components/Home/';
import Search from './Components/Search/';



import LandingHomeComponet from './Components/Landing/Home/';



import { Route } from 'react-router-dom'



import './css/slides.css'



const Root = ({store, history}) => (
  <Provider store={ store }>
    <HashRouter history={ history } basename='/'>
      <div>
        <Route exact path="/" component={ LandingHomeComponet } />
        <Route exact path="/hello" component={ Hello } />
        <Route exact path="/goodby" component={ GoodBye } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/landinghome" component={ LandingHomeComponet } />
      </div>
    </HashRouter>
  </Provider>
)

render(<Root store={ store } />, document.getElementById('root'));