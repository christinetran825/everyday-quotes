import * as types from '../actions/actionTypes';

const initialState = {
  quote: []
}

export default (state=initialState, action) => {
  switch(action.type) {
    case types.QUOTE:
      return action.quote;
    default:
      return state
  }
}
