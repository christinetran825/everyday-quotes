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
        <div id="quote-box">
          <h1>hello</h1>
          <div id="text">
            <h3>{this.props.quote.quote}</h3>
          </div>
          <div id="author">
            <h2>{this.props.quote.author}</h2>
          </div>
          <button id="new-quote" onClick={this.handleChangeQuote}>New Quote</button>
          <button><a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a></button>
          <p></p>
        </div>
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
