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
import AboutComponet from './Components/Landing/Home/';
import LocationsComponet from './Components/Landing/Home/';
import PricingsComponet from './Components/Landing/Home/';
import WhyPartnerComponet from './Components/Landing/Home/';
import RestaurantSignUpComponet from './Components/Landing/Home/';



import { Route } from 'react-router-dom'



import './css/slides.css'



const Root = ({store, history}) => (
  <Provider store={ store }>
    <HashRouter history={ history } basename='/'>
      <div>
        <Route exact path="/" component={ LandingHomeComponet } />
        <Route exact path="/about" component={ AboutComponet } />
        <Route exact path="/locations" component={ LocationsComponet } />
        <Route exact path="/pricing" component={ PricingsComponet } />
        <Route exact path="/why-partner" component={ WhyPartnerComponet } />
        <Route exact path="/restaurant-signup" component={ RestaurantSignUpComponet } />
        <Route exact path="/hello" component={ Hello } />
        <Route exact path="/goodby" component={ GoodBye } />
        <Route exact path="/search" component={ Search } />
      </div>
    </HashRouter>
  </Provider>
)

render(<Root store={ store } />, document.getElementById('root'));