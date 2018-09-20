import { combineReducers } from 'redux';
import quoteReducers from './quoteReducers';

const rootReducer = combineReducers({
  quote: quoteReducers,
});

export default rootReducer;
