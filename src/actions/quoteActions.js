import * as types from './actionTypes';

const quoteRequest = quote => {
  return {
    type: types.QUOTE,
    quote
  }
}


export const getQuote = () => {
  return dispatch => {
    return fetch("https://talaikis.com/api/quotes/random/")
    .then(response => response.json())
    .then(quote => {
      dispatch(quoteRequest(quote))
    })
    .catch(error => console.log(error));
  };
}
