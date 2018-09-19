import React, { Component } from 'react';

class QuoteBox extends Component {
  constructor(prop){
    super();
    this.state = {
      quote: [],
      author: []
    };
    // this.handleChangeQuote = this.handleChangeQuote.bind(this);
  }

  // handleChangeQuote(e){
  //   this.setState(){
  //     quote:
  //     author:
  //   }
  // }

  render() {
    return (
      <div className="wrapper">
        <div id="quote-box">
          <div id="text">
            {/* quote text goes here */}
            <h1>hello</h1>
          </div>
          <div id="author">
            {/* quote text goes here */}
          </div>
          <button id="new-quote" onClick={this.handleChangeQuote}></button>
          <button><a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a></button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
