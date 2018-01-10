import { createStore, applyMiddleware } from 'redux'
import ProfileReducer from '../reducers/profile'
import SearchReducer from '../reducers/search'
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers(
  {
    SearchReducer,  
    ProfileReducer
  }  
);
export default createStore(reducers, {}, applyMiddleware(thunk));