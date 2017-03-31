import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dateReducers from './dateReducers';

const rootReducer = combineReducers({
  dates: dateReducers,
  routing: routerReducer
});

export default rootReducer;
