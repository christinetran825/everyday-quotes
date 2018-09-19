import { combineReducers } from 'redux';
import quoteReducers from './quoteReducers';
import authorReducers from './authorReducers';

const rootReducer = combineReducers({
  quote: quoteReducers,
  author: authorReducers
});

export default rootReducer;
