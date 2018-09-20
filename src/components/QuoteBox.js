import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions/quoteActions';

class QuoteBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "",
      clicked: false
    };
    this.handleChangeQuote = this.handleChangeQuote.bind(this);
  }

  handleChangeQuote(e){
    this.props.getQuote(this.state.quote)
    this.setState({
      clicked: true
    })
  }

  componentDidMount() {
    this.props.getQuote(this.state.quote)
  }

  render() {
    return (
      <div id="quote-box">
        <div id="quote-content">
          <div id="text">
            <h3>{this.props.quote.quote}</h3>
          </div>
          <div id="author">
            <h3>{this.props.quote.author}</h3>
          </div>
        </div>
        <div className="box-buttons">
          <button id="tweet-quote"><a href="twitter.com/intent/tweet">Tweet</a></button>
          <button id="new-quote" onClick={this.handleChangeQuote}>New Quote</button>
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
