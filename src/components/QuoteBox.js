import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/quoteActions';

class QuoteBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ""
    };
    this.handleChangeQuote = this.handleChangeQuote.bind(this);
  }

  handleChangeQuote(e){
    this.props.getQuote(this.state.quote)
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="page-title">Find a Quote to Inspire You Today</h1>
        <div id="quote-box">
          <div id="text">
            <h3>{this.props.quote.quote}</h3>
          </div>
          <div id="author">
            <h3>{this.props.quote.author}</h3>
          </div>
          <button id="tweet-quote"><a href="twitter.com/intent/tweet">Tweet</a></button>
          <button id="new-quote" onClick={this.handleChangeQuote}>New Quote</button>
          <p></p>
        </div>
        <p className="credits">Quotes Provided by <a href="https://talaikis.com/random_quotes_api/">Tadas Talaikis</a></p>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return ({
    quote: state.quote,
  });
};

export default connect(mapStatesToProps, { getQuote })(QuoteBox);
