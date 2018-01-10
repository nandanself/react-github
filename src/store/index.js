import { createStore, applyMiddleware } from 'redux'
import userReducer from '../reducers/userReducers'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers(
  {
    userReducer,
  }  
);
export default createStore(reducers, {}, applyMiddleware(thunk));