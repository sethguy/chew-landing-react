import {  combineReducers } from 'redux'

import * as Actions from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
  case Actions.ACTION_TYPE:
    return Object.assign({}, state, {
      
    });
  default:
    return state;
  }
  
}

export const rootReducer = combineReducers({
  user
})