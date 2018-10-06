import React, { Component } from 'react';
import QuoteBox from './QuoteBox'

class QuotesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      getQuoteBox:false
    };
    this.handleGetQuoteBox = this.handleGetQuoteBox.bind(this);
  }

  handleGetQuoteBox(e){
    this.setState({
      getQuoteBox: true
    })
  }

  render() {
    return (
      <main className="quotes-page">
        <img src="./images/movie-border.jpg" alt="silent-movie-border" />
        {this.state.getQuoteBox ?
          <div>
            <h1 className="cover-title">Find a Quote to Inspire You Today</h1>
            <button className="getQuotes" onClick={this.handleGetQuoteBox}>Get Quotes</button>
          </div>
          :
          <div className="page">
            <h1 className="page-title">Find a Quote to Inspire You Today</h1>
            <QuoteBox />
          </div>
        }
      </main>
    );
  }
}

export default QuotesPage;
